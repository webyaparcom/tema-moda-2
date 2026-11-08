# Sepet Pro — `hf29dd` (tema-moda-2)

## Amaç
Profesyonel sepet sayfası (PLAN-PRO F3). MxStore (mxCartV1) ile satır listesi, adet −/+ ve giriş alanı, satır silme (çıkış animasyonu), ara toplam / kargo / toplam özeti, ücretsiz kargo ilerleme çubuğu (desing.ucretsizKargoLimit), boş sepet durumu ve iskelet yükleme. Sepet değişince (mx:sepet, diğer sekmeler) yeniden çizer; footer/sepet-widget ile aynı veriyi paylaşır.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/sepet-pro` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: back/sepetim.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
