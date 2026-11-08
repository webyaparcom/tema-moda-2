# Siparişlerim (Pro) — `fr3t2e` (tema-moda-2)

## Amaç
Sipariş geçmişi (PLAN-PRO F3). Üyede MxStore.siparis.listem → GET /api/public/siparis?sayfa= (sayfalama) ve açılır detay MxStore.siparis.detay → GET /api/public/siparis/:no: kalemler, ara toplam/kargo/toplam, adres, ödeme yöntemi, mx-stepper durum ilerlemesi (beklemede→onaylandı→hazırlanıyor→kargoda→teslim; iptal uyarısı). Misafirde / üyelik kullanılamıyorsa mxOrdersV1 yerel geçmişi + sipariş no + e-posta sorgusu (?email=).

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/uye-siparislerim` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: user/siparislerim.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
