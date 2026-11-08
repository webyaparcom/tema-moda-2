# Demo Bandı — `e2db01` (tema-moda-2)

## Amaç
Demo sitelerin her sayfasının üstünde duran, kapatılamaz bilgi şeridi: «Bu bir demo sitedir» uyarısı ve «Bu temayı iste» bağlantısı. Sayfanın en üstüne yapışır (position:sticky), sabit menüleri bant yüksekliği kadar aşağı iter (--mx-demo-bandi-h). Üç dil (TR/EN/AR), Arapçada RTL, mobilde iki satıra sarar.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/header/demo-bandi` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: anasayfa/ortak düzen.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
