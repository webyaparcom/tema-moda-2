# Ödeme (Demo) — `zuksjm` (tema-moda-2)

## Amaç
Statik e-ticaret demosu için SAHTE ödeme adımı: sepet özeti → iletişim/adres formu → ödeme yöntemi (kart / havale / kapıda) → kart formu (Luhn, SKT, CVC; hiçbir kart verisi saklanmaz, gönderilmez, günlüğe yazılmaz) → «3D Secure» SMS simülasyonu (doğru / yanlış / iptal / başarısız dene, failRate) → MxStore.siparis.olustur ile DEMO- numaralı kayıt → sipariş-tamam sayfasına yönlendirme. Üstte kalıcı DEMO uyarısı; TR/EN/AR, Arapçada RTL. API gerekmez.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/odeme-demo` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: back/odeme.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
