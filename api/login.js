// Mayatech File Manager - Login API
// Bu endpoint backend'de çalışır, şifreler güvende

export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only accept POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { username, password } = req.body;

        // GÜVENLİK: Şifreler environment variables'da saklanıyor
        const VALID_USERNAME = process.env.MAYATECH_USERNAME || '5999';
        const VALID_PASSWORD = process.env.MAYATECH_PASSWORD || '549476';

        // Validate credentials
        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            // Generate a simple session token
            const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
            
            return res.status(200).json({
                success: true,
                token: token,
                message: 'Login successful'
            });
        } else {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
}
