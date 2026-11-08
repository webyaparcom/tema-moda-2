# Tanıtım Modülü — `buly7t` (tema-moda-2)

## Amaç
Kurumsal tanıtım ve hakkımızda modülü. Firma tanıtımı, vizyon, misyon metinlerini görsel ile birlikte sunar. Ana sayfa şeridi ve temalar için varsayılan cok dilli metinler. İki kolonlu responsive tasarım, W2 animasyon ve icon desteği içerir. Görsel varyant desing.stil (31 Eki 2026): "" klasik (beyaz çerçeveli yuvarlak görsel, bugünkü görünüm) · "yuzen-gorsel" (dik kart görsel bandın dışına taşar, gölgeli, hafif eğik) · "cerceve-ofset" (kare görsel, arkasında kaymış primary renk çerçeve) · "ikon-liste" (yatay görsel + vizyon/misyon ikonlu madde listesi; ikon icon2/icon3). Bant zemini/yazısı bgcolor/fontcolor çifti kalır; eklenen renkler yalnız var(--mx-site-*) token.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/module-1` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: page/teslimat.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
