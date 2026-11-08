# Adreslerim — `3dmv5j` (tema-moda-2)

## Amaç
Müşteri teslimat ve fatura adresleri yönetim modülü. Ev, iş, diğer adres türlerini kaydeder, düzenler ve varsayılan adres seçimi yapar. 3 farklı e-ticaret projesinde sipariş teslimatı için kayıtlı adresleri saklar. Hızlı ödeme akışı için adres seçimi ve düzenleme form popup'ı sunar. PLAN-PRO F3: MxStore varsa GET|POST /api/public/uye/adres + PATCH|DELETE /:id (başlık, ad soyad, telefon, il, ilçe, açık adres, posta kodu, varsayılan) ekle/düzenle formu; oturum yoksa girisUrl sayfasına. Eski dataListWeb yolu MxStore yoksa yedek.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/eticaret-adresler` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: user/adreslerim.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
