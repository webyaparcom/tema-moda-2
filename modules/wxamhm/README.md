# Login — `wxamhm` (tema-moda-2)

## Amaç
Giriş ve kayıt modülü (PLAN-PRO F3). Varsayılan MxStore: /api/public/uye/giris + /kayit (mx_uye çerezi, KVKK onayı, donus/nextUrl yönlendirmesi); üyelik kullanılamıyorsa bilgi kutusu. MxStore yüklenmezse eski desing apiBase (https://{{domain}}/api /user /newuser) yolu yedek.

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/body/login` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: back/sifre-sifirlama.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
