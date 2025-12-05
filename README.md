# 🚀 Mayatech İndirme Merkezi

Modern ve dinamik dosya indirme merkezi. GitHub reposuna yüklediğiniz her dosya otomatik olarak güzel bir arayüzde listelenir ve tek tıkla indirilebilir.

## ✨ Özellikler

- 🎨 **Ultra Modern Tasarım** - Glassmorphism, gradient renkler ve smooth animasyonlar
- 🔄 **Otomatik Dosya Tespiti** - GitHub'a yüklenen dosyalar anında görünür
- 📦 **Akıllı Dosya İkonları** - ZIP, RAR, EXE, PDF vb. her dosya tipi için özel icon
- 📊 **Dosya Boyutu Gösterimi** - Otomatik formatlanmış dosya boyutları
- 📱 **Responsive Tasarım** - Her cihazda mükemmel görünüm
- ⚡ **GitHub API Entegrasyonu** - Gerçek zamanlı dosya listesi

## 🎯 Nasıl Çalışır?

1. GitHub reposuna (`mayatech-licanse`) herhangi bir dosya yükleyin
2. Sistem otomatik olarak dosyayı algılar
3. Ana sayfada modern bir kart olarak görünür
4. Kullanıcılar tek tıkla dosyayı indirebilir

## 🚀 Kurulum ve Deployment

### GitHub'a Yükleme

```bash
# Proje klasörüne gidin
cd /Users/dogukansimsek/.gemini/antigravity/scratch/dosya-indirme-projesi

# Remote ekleyin
git remote add origin https://github.com/simsekdogukan/mayatech-licanse.git

# Push yapın
git branch -M main
git push -u origin main
```

### Vercel'e Deploy

1. https://vercel.com adresine gidin
2. "Import Project" seçeneğine tıklayın
3. GitHub'dan `mayatech-licanse` reposunu seçin
4. "Deploy" butonuna tıklayın

✅ **Otomatik Deployment:** Bundan sonra GitHub'a her push yaptığınızda Vercel otomatik olarak güncelleyecek!

## 📁 Dosya Yapısı

```
mayatech-licanse/
├── index.html          # Ana indirme merkezi
├── vercel.json         # Vercel yapılandırması
├── README.md           # Bu dosya
└── [dosyalarınız]      # İndirilebilir dosyalar
```

## 🎨 Desteklenen Dosya Tipleri

- 📦 Arşiv dosyaları: ZIP, RAR, 7Z
- ⚙️ Uygulama dosyaları: EXE
- 📄 Dokümanlar: PDF, DOC, DOCX, TXT
- 📁 Diğer tüm dosya tipleri

## 💡 İpuçları

- **Yeni dosya eklemek için:** Sadece GitHub reposuna push edin, otomatik görünecek
- **Dosya silmek için:** GitHub'dan dosyayı silin, sayfa otomatik güncellenecek
- **Sistem dosyaları:** `.gitignore`, `README.md`, `index.html`, `vercel.json` listeye eklenmez

## 🔧 Özelleştirme

GitHub repo bilgilerini değiştirmek için `index.html` içindeki şu satırları düzenleyin:

```javascript
const REPO_OWNER = 'simsekdogukan';
const REPO_NAME = 'mayatech-licanse';
```

---

**Mayatech © 2025** | Modern, hızlı ve güvenilir dosya dağıtım sistemi
