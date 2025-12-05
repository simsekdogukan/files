# 🔒 Mayatech File Manager - Secure Backend Edition

Vercel Serverless Functions ile güvenli backend API'ye sahip dosya yönetim sistemi.

## 🛡️ Güvenlik Özellikleri

### ✅ Backend'de Korunan Veriler
- **Şifreler:** Environment variables'da saklanır (F12 ile görülemez!)
- **GitHub Token:** Backend'de güvenle tutuluyor
- **Authentication:** Token tabanlı güvenli sistem
- **Session Timeout:** 1 saatlik oturum süresi

### 🔐 API Endpoints

#### POST /api/login
Kullanıcı girişi yapar, güvenli token döner.

#### GET /api/files
Token ile korumalı dosya listesi döner.

## 🚀 Kurulum ve Deployment

### 1. GitHub'a Yükle

```bash
cd /Users/dogukansimsek/.gemini/antigravity/scratch/dosya-indirme-projesi
git add -A
git commit -m "Backend API güvenlik sistemi"
git push origin main
```

### 2. Vercel'e Deploy Et

1. https://vercel.com adresine gidin
2. GitHub reposunu import edin: `simsekdogukan/mayatech-licanse`
3. **Environment Variables** ekleyin:

```
MAYATECH_USERNAME=5999
MAYATECH_PASSWORD=549476
GITHUB_REPO_OWNER=simsekdogukan
GITHUB_REPO_NAME=mayatech-licanse
```

4. Deploy butonuna tıklayın

### 3. İlk Kullanım

Deploy edildikten sonra:
- Kimlik: `5999`
- Şifre: `549476`

## 📁 Proje Yapısı

```
mayatech-licanse/
├── api/
│   ├── login.js        # Backend login endpoint
│   └── files.js        # Backend dosya listesi endpoint
├── index.html          # Frontend (API'ye bağlı)
├── vercel.json         # Vercel yapılandırması
├── .env.example        # Environment variables örneği
└── README.md           # Bu dosya
```

## 🔬 Teknik Detaylar

### Frontend
- Vanilla JavaScript
- Fetch API ile backend iletişimi
- Token tabanlı authentication
- Session yönetimi

### Backend
- Vercel Serverless Functions
- Node.js runtime
- Environment variables ile güvenlik
- Token generation ve validation

## 🆚 Önceki Versiyondan Farklar

| Özellik | Önceki (Client-Only) | Yeni (Backend API) |
|---------|---------------------|-------------------|
| Şifreler | Kodda görünür (F12) | Backend'de gizli ✅ |
| GitHub Token | Frontend'de | Backend'de ✅ |
| Güvenlik | Zayıf | Güçlü ✅ |
| F12 Koruması | Yok | Var ✅ |

## 📝 Notlar

- Environment variables Vercel dashboard'dan ayarlanmalı
- Local test için `.env.local` dosyası oluşturun
- GitHub token opsiyonel (public repo için gerekli değil)

---

**© 2025 Mayatech** - Backend API ile güvenli dosya yönetim sistemi
