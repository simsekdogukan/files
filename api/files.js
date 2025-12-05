// Mayatech File Manager - Files API
// GitHub API çağrıları backend'den yapılır, token güvende

export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only accept GET
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // GÜVENLİK: Token kontrolü
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        const token = authHeader.substring(7);

        // Token doğrulama (basit kontrol)
        try {
            const decoded = Buffer.from(token, 'base64').toString('utf-8');
            const [username, timestamp] = decoded.split(':');

            // Token timeout kontrolü (1 saat)
            const elapsed = Date.now() - parseInt(timestamp);
            if (elapsed > 3600000) {
                return res.status(401).json({
                    success: false,
                    message: 'Token expired'
                });
            }
        } catch (e) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token'
            });
        }

        // GÜVENLİK: GitHub bilgileri environment variables'da
        const REPO_OWNER = process.env.GITHUB_REPO_OWNER || 'simsekdogukan';
        const REPO_NAME = process.env.GITHUB_REPO_NAME || 'mayatech-licanse';
        const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Optional: for private repos

        // GitHub API'den dosyaları çek
        const headers = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Mayatech-File-Manager'
        };

        // Eğer GitHub token varsa ekle
        if (GITHUB_TOKEN) {
            headers['Authorization'] = `token ${GITHUB_TOKEN}`;
        }

        const response = await fetch(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/`,
            { headers }
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const files = await response.json();

        // Sadece indirilebilir dosyaları filtrele
        const downloadableFiles = files.filter(file =>
            file.type === 'file' &&
            !file.name.startsWith('.') &&
            file.name !== 'README.md' &&
            file.name !== 'index.html' &&
            file.name !== 'vercel.json'
        );

        return res.status(200).json({
            success: true,
            files: downloadableFiles
        });

    } catch (error) {
        console.error('Files API error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
}
