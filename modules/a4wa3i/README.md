# Hesabım (Pro) — `a4wa3i` (tema-moda-2)

## Amaç
Üye hesap paneli (PLAN-PRO F3). Sol menü: Bilgilerim (MxStore.uye.guncelle → PATCH /api/public/uye/ben), Adreslerim (GET|POST /api/public/uye/adres, PATCH|DELETE /api/public/uye/adres/:id; varsayılan rozeti), Siparişlerim özeti (GET /api/public/siparis), Şifre (POST /api/public/uye/sifre), Çıkış (POST /api/public/uye/cikis). Oturum yoksa desing girisUrl sayfasına ?donus= ile yönlendirir; URL hash (#adreslerim…) ile panel açılır; mobilde menü üstte yatay kaydırmalı.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/uye-hesabim` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: user/hesabim.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
