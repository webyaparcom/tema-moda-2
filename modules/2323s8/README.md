# Ödeme Pro — `2323s8` (tema-moda-2)

## Amaç
Profesyonel 3 adımlı ödeme (PLAN-PRO F3): Bilgiler/Adres → Ödeme yöntemi (kapıda / havale) → Onay. Üye ise kayıtlı adres seçimi + yeni adres (isteğe bağlı adres defterine kaydetme), misafir ise misafir formu + giriş bağlantısı. MxStore.siparis.olustur ile POST /api/public/siparis (fiyat sunucuda); başarıda siparis-tamam sayfasına no ile geçer, sepet temizlenir. Sunucu alan hatası ilgili adıma döner. API yoksa (statik yayın) desing.number doluysa WhatsApp + mxOrdersV1 yedeği; o da yoksa kapalı uyarısı.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/odeme-pro` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: —.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
