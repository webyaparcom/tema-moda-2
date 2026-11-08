# Menü E-Ticaret — `e2mn01` (tema-moda-2)

## Amaç
E-ticaret özel header navigasyon menüsü. Logo, kategori linkleri ve sepet ikonu ile alışveriş odaklı menü sunar. 2 farklı e-ticaret projesinde kullanılır. Sepet sayacı göstergesi, hover efektli renkler, koyu tema tasarımı ve sepet sayfasına yönlendirme URL entegrasyonu içerir. PLAN-PRO F3: giriş linki data-mx-uye-goster="misafir", Hesabım + Çıkış data-mx-uye-goster="giris" (MxStore.uye), sepet ikonunda data-mx-sepet-sayi rozeti (MxStore.sepet; 0 iken gizli).

## Kaynak
Standart webmaker modülü: `mcp/webmaker/webmodules/header/menu-eticaret-1` (salt okunur; bu klasör onun site örneğidir — `site-module-add` ile açıldı, `site-module-patch` ile ayarlandı).

## Bu sitede
Kullanıldığı yer: anasayfa/ortak düzen.
Kurulum kaynağı: `projeler/webyapar/data/tema/tema-set/icerik/moda-2/spec.js` → `projeler/webyapar/web/tema-set/araclar/demo-kur.js` (elle düzenlenmez; değişiklik spec'te yapılıp yeniden kurulur).

## Dosyalar
- `index.html` — şablon
- `back.js` — sunucu tarafı çizim
- `index.json` — ayar (`desing`) ve veri (`data`)
- `README.md` — bu belge
