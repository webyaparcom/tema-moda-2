# Urun Vitrin — `fw6iul` (tema-moda-2)

## Amaç
Ürün vitrini: products.json'daki ürünleri kategori çipleri, arama ve sıralamayla listeler; kategori sayfalarında boş gövdeyi doldurur (tema-gida deseni).

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/eticaret-urun-vitrin` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: page/urunler, category/aksesuar, category/dis-giyim, category/giyim.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
