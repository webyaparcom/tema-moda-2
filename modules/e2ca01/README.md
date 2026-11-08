# CTA Şerit 1 — `e2ca01` (tema-moda-2)

## Amaç
Harekete geçirici çağrı (CTA) şerit modülü. Gradient arka plan üzerinde başlık, açıklama ve iki buton gösterir. Buton URL'leri dil öneki olmadan pathnext (iletisim, urunler) — site routing ekler. Çok dilli metin ve animasyonlu giriş içerir. Görsel varyant desing.stil (31 Eki 2026): "" klasik (gradient anahtarı tam genişlik bant, bugünkü görünüm) · "gradient" (token gradient primary→koyu, yuvarlak köşeli iç bant, ortalı yığın, ışık daireleri, hap düğmeler) · "kart-yuzen" (sayfa zemininde yüzen yüzey kartı, dekoratif primary daireler, sol vurgu çizgisi). Varyant renkleri yalnız var(--mx-site-*) token çiftleri.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/cta-1` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: anasayfa/ortak düzen.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
