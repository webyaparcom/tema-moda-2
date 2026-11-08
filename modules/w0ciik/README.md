# Üye Kayıt (Pro) — `w0ciik` (tema-moda-2)

## Amaç
Müşteri kayıt modülü (PLAN-PRO F3). MxStore.uye.kayit → POST /api/public/uye/kayit {ad, soyad, email, telefon, sifre, kvkk:true} (201 + mx_uye çerezi). Ad/soyad/e-posta/telefon/şifre + tekrar, şifre güç göstergesi (sunucu şartı: ≥8, harf+rakam), KVKK + üyelik sözleşmesi onayı, just-validate doğrulama, sunucu 'alan' hatası ilgili alanın altına; başarıda ?donus= ya da hesabim.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/uye-kayit` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: back/kayit.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
