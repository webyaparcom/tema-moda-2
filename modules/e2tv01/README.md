# E-ticaret Tab Vitrin (Tema3) — `e2tv01` (tema-moda-2)

## Amaç
Journal 3 tarzı tab vitrin: 4 sekme (Yeni Gelenler / Seçtiklerimiz / Çok Satanlar / Çok Sevilenler), 4 kolon ürün grid, rozet, yıldız, hover aksiyonları (favori/karşılaştır/hızlı görünüm placeholder). Canlı products.json okur.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/eticaret-tab-vitrin` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: anasayfa/ortak düzen.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
