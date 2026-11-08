# Üye Girişi (Pro) — `kmtz4x` (tema-moda-2)

## Amaç
Müşteri giriş modülü (PLAN-PRO F3). MxStore.uye.giris → POST /api/public/uye/giris (mx_uye çerezi); Giriş | Üye ol sekmeleri, şifre göster/gizle, şifremi unuttum bağlantısı, just-validate doğrulama, sunucu hata mesajları (401/429), zaten girişliyse Hesabım kartı, üyelik kullanılamıyorsa bilgi kutusu. Başarıda ?donus= yoluna ya da hesabim sayfasına yönlendirir.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/uye-giris` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: back/login.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
