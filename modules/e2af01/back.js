/* altin-fiyat-bandi — statik, bilgilendirme amacli gram altin / ayar fiyat bandi (G2, 30 Eki 2026).
   Degerler ELLE girilir (canli API yok); tum metin sunucuda render dilinde cozulur. Band icerigi CEVRILMEZ/KOPYALANMAZ
   (tek kopya; kayma yalniz CSS ile). Fiyat tr-TR ayracli + <bdi dir="ltr">; tarih Intl ile (Europe/Istanbul, 24 saat). */
var afLang = json.lang || "tr";
var afD = json.desing || {};
var afData = json.data && typeof json.data === "object" && !Array.isArray(json.data) ? json.data : {};
var afRows = Array.isArray(afData.rows) ? afData.rows : (Array.isArray(json.data) ? json.data : []);

function afEsc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/\{\{/g, "&#123;&#123;");
}
function afL(key) { return wmPickLang(afD[key], afLang); }
function afFmt(key, n) { return afL(key).replace(/\{n\}/g, String(n)); }

var afMoney = new Intl.NumberFormat("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
var afGramNum = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 3 });

var afItems = "";
for (var i = 0; i < afRows.length; i++) {
  var r = afRows[i];
  if (!r || typeof r !== "object") { continue; }
  var price = Number(r.price);
  if (!isFinite(price)) { continue; }
  var gram = Number(r.gram);
  var ayar = Number(r.ayar);
  afItems += '<li class="modulex-af-item"><span class="modulex-af-name">' + afEsc(wmPickLang(r.name, afLang)) + "</span>";
  if (isFinite(ayar) && ayar > 0) { afItems += '<span class="modulex-af-meta">' + afEsc(afFmt("karatFmt", afGramNum.format(ayar))) + "</span>"; }
  if (isFinite(gram) && gram > 0) { afItems += '<span class="modulex-af-meta">' + afEsc(afFmt("gramFmt", afGramNum.format(gram))) + "</span>"; }
  afItems += '<strong class="modulex-af-price"><bdi dir="ltr">' + afMoney.format(price) + " ₺</bdi></strong></li>";
}

var afUpdated = "";
if (afData.updatedAt) {
  var afDt = new Date(String(afData.updatedAt));
  if (!isNaN(afDt.getTime())) {
    var afTxt = "";
    try {
      afTxt = new Intl.DateTimeFormat(afLang + "-u-nu-latn-ca-gregory", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone: "Europe/Istanbul" }).format(afDt);
    } catch (e) { afTxt = String(afData.updatedAt); }
    afUpdated = afEsc(afL("updatedLabel")) + ': <time datetime="' + afEsc(afDt.toISOString()) + '"><bdi>' + afEsc(afTxt) + "</bdi></time>";
  }
}
function afSet(re, val) { html = html.replace(re, function () { return val; }); }
afSet(/\{\{afItems\}\}/g, afItems);
afSet(/\{\{afUpdated\}\}/g, afUpdated);
