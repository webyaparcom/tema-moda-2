# Sepet Widget — `e2sw01` (tema-moda-2)

## Amaç
Site geneli localStorage sepet çekirdeği. Yüzen sepet butonu, adet rozeti, çekmece (drawer) sepet listesi ve window.mxCartAdd / window.addToCart global API'sini sağlar. Vitrin, detay ve liste modüllerinin sepete ekle butonları bu modülle çalışır hale gelir. Veri anahtarı: mxCartV1.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/footer/sepet-widget` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: anasayfa/ortak düzen.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
