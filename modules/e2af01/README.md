# Altın Fiyat Bandı (Bilgilendirme) — `e2af01` (tema-moda-2)

## Amaç
Statik, bilgilendirme amaçlı gram altın / ayar fiyat bandı. Değerler elle girilir (canlı veri yoktur); güncelleme tarihi-saati Intl ile biçimlenir ve «bilgilendirme amaçlıdır, bağlayıcı değildir» uyarısı her zaman görünür. Yatay kayan bant tek kopyadır (içerik çoğaltılmaz); duraklat düğmesi vardır, prefers-reduced-motion'da durağan ve kaydırılabilir; RTL'de kayma yönü ters döner.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/altin-fiyat-bandi` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: —.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
