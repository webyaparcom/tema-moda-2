// Find the page with `modulestatus.page` set to true
var pagesettingjson = webmakerdata.pagesetting.data.find(
  function(item) { return item.modulestatus && item.modulestatus.page; },
);
var modulexmenulistactive = true;
var backhtml = "";
if (pagesettingjson) {
  // Iterate over the relevant data to create HTML content
  for (var iterator of webmakerdata[pagesettingjson.path].data) {
    if (iterator.status == "play" && iterator.category == "") {
      if (page.path == iterator.path) {
        backhtml += `<li><a class="modulex-menu-list-active" href="${wxLangInternalHref(
          iterator.path,
        )}">${iterator.name[json.lang]}</a></li>`;
        modulexmenulistactive = false;
      } else {
        backhtml += `<li><a href="${wxLangInternalHref(iterator.pathnext || iterator.path)}">${
          iterator.name[json.lang]
        }</a></li>`;
      }
    }
  }
  if (modulexmenulistactive == true) {
    backhtml =
      `<li><a class="modulex-menulistactive" href="${wxLangInternalHref('')}">@home@ </a></li>` +
      backhtml;
  } else {
    backhtml = `<li><a href="${wxLangInternalHref('')}">@home@ </a></li>` + backhtml;
  }
  html = html.replace(new RegExp("{{html}}", "g"), backhtml);
}
// Dil linkleri: bulunulan sayfada kalsın (ana sayfa değilse aynı path ile dil değişsin)
langhtml = "";
var currentPagePath = (page && typeof page === "object" && page.path !== undefined) ? page.path : "";
for (var key in webmakerdata.setting.langs) {
  if (webmakerdata.setting.langs[key] == true) {
    var langUrl = wxLangHref(key, currentPagePath || "");
    langhtml += `<li><a href="${langUrl}"><img height="25" src="/src/lang/${key}.png" alt="${key}" loading="lazy"></a></li>`;
  }
}
html = html.replace(new RegExp("{{langhtml}}", "g"), langhtml);
/* G3: statik demo — desing.uyelik === false ise üye giriş / hesap / çıkış öğeleri çizilmez (API yok, üyelik sayfaları kapalı). */
if (json.desing && json.desing.uyelik === false) {
  html = html.replace(/<a [^>]*data-mx-uye-goster[\s\S]*?<\/a>/g, "").replace(/<button [^>]*data-mx-uye-goster[\s\S]*?<\/button>/g, "");
}
