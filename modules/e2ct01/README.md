# İletişim — `e2ct01` (tema-moda-2)

## Amaç
İletişim bilgileri görüntüleme modülü. Telefon, email ve adres bilgilerini icon ile şık tasarımda sunar. 26 farklı projede kullanılır: kurumsal şirketler, restoranlar, e-ticaret siteleri, sağlık kuruluşları ve hizmet sektöründe. Responsive kart düzeni ve tıklanabilir telefon/email linkleri içerir. Görsel varyant desing.stil (31 Eki 2026): "" klasik (çerçeveli liste, bugünkü görünüm) · "kartli" (her bilgi ortalı bir kart, 3→2→1 sütun) · "koyu-panel" (sol koyu başlık paneli primary/primary-contrast + sağda ayraçlı liste). Varyant renkleri yalnız var(--mx-site-*) token.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/contact-3` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: kurumsal/iletisim.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
