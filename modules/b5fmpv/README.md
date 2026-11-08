# Sipariş Tamamlandı — `b5fmpv` (tema-moda-2)

## Amaç
Sipariş tamamlandı sayfası (PLAN-PRO F3). URL ?no= (+ ?email=) ve MxStore.siparis.son() ile sipariş numarası, kalemler, ara toplam/kargo/toplam, ödeme yöntemi ve durum rozetini gösterir; üye ya da e-posta varsa GET /api/public/siparis/:no ile sunucudan tazeler. Başarı animasyonu, sipariş no kopyalama, Siparişlerim ve alışverişe devam bağlantıları; numara yoksa boş durum.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/siparis-tamam` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: back/siparis-onay.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
