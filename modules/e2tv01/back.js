/* eticaret-tab-vitrin — Journal 3 tab vitrin + grid kart.
   Her sekme farkli urun dilimi/rozet filtresi; client-side tab gecisi. */

function t3vLang(val) {
  if (val == null) return "";
  if (typeof val === "object") {
    if (val[json.lang] != null) return val[json.lang];
    if (val.tr != null) return val.tr;
    var keys = Object.keys(val);
    return keys.length ? (val[keys[0]] || "") : "";
  }
  return String(val);
}

function t3vEnrich(p) {
  if (!p || !p.id || p.price != null) return p;
  try {
    var detailPath = "/public/data/proje/" + projePath + "/web/page/" + p.id + "/index.json";
    if (fsSync.existsSync(detailPath)) {
      var detail = JSON.parse(fsSync.readFileSync(detailPath, "utf8"));
      var merged = {};
      var k;
      for (k in p) { merged[k] = p[k]; }
      var fields = ["price", "oldPrice", "image", "stock_status", "badges", "url", "rating"];
      for (var fi = 0; fi < fields.length; fi++) {
        if (merged[fields[fi]] == null && detail[fields[fi]] != null) {
          merged[fields[fi]] = detail[fields[fi]];
        }
      }
      return merged;
    }
  } catch (e) {}
  return p;
}

function t3vMoney(value) {
  return (Number(value) || 0).toFixed(2);
}

function t3vStars(rating) {
  var r = Math.min(5, Math.max(0, Number(rating) || 4));
  var full = Math.floor(r);
  var html = '<div class="t3vStars" aria-label="' + r + '/5">';
  var si;
  for (si = 0; si < 5; si++) {
    html += '<span class="material-symbols-outlined t3vStar' + (si < full ? " t3vStarOn" : "") + '">star</span>';
  }
  html += "</div>";
  return html;
}

function t3vCard(p, tabIdx) {
  var pName = t3vLang(p.name);
  if (!pName) return "";
  var badges = p.badges || [];
  var isSoldOut = p.stock_status === "out_of_stock";
  var priceNum = Number(p.price);
  var hasPrice = isFinite(priceNum) && priceNum > 0;
  var oldPriceNum = Number(p.oldPrice);
  var hasOldPrice = hasPrice && isFinite(oldPriceNum) && oldPriceNum > priceNum;
  var pImg = p.image || "";
  var pUrl = p.url || wxLangInternalHref(p.pathnext || p.path || "");
  var card = "";

  var mxAttrs = ' data-mx-id="' + p.id + '"' +
    ' data-mx-name="' + String(pName).replace(/"/g, "&quot;") + '"' +
    ' data-mx-price="' + (hasPrice ? priceNum : 0) + '"' +
    ' data-mx-img="' + pImg + '"' +
    ' data-mx-url="' + pUrl + '"';
  card += '<div class="t3vCard" data-tab="' + tabIdx + '"' + mxAttrs + '>';
  card += '<a href="' + pUrl + '" class="t3vImgLink" aria-label="' + String(pName).replace(/"/g, "&quot;") + '">';
  card += '<div class="t3vImgWrap">';
  if (pImg) {
    card += '<img src="' + pImg + '" alt="' + pName + '" loading="lazy" decoding="async" />';
  } else {
    card += '<div class="t3vNoImg"><span class="material-symbols-outlined">image</span></div>';
  }
  card += '<div class="t3vBadges">';
  if (badges.indexOf("new") > -1) card += '<span class="t3vBadge t3vBadgeNew">{{newText}}</span>';
  if (badges.indexOf("sale") > -1 && hasOldPrice) card += '<span class="t3vBadge t3vBadgeSale">{{saleText}}</span>';
  card += "</div>";
  if (isSoldOut) card += '<div class="t3vSoldout">{{soldOutText}}</div>';
  card += "</div></a>";
  card += '<div class="t3vInfo">';
  card += t3vStars(p.rating);
  card += '<a href="' + pUrl + '" class="t3vName">' + pName + "</a>";
  if (hasPrice) {
    card += '<div class="t3vPriceRow">';
    if (hasOldPrice) card += '<span class="t3vOld">' + t3vMoney(oldPriceNum) + " &#8378;</span>";
    card += '<span class="t3vPrice">' + t3vMoney(priceNum) + " &#8378;</span>";
    card += "</div>";
  }
  card += '<button class="t3vCart" onclick="addToCart(\'' + p.id + '\')"' + (isSoldOut ? " disabled" : "") + mxAttrs + ">";
  card += '<span class="material-symbols-outlined">add_shopping_cart</span>';
  card += isSoldOut ? "{{soldOutText}}" : "{{addToCart}}";
  card += "</button></div></div>";
  return card;
}

var products = [];
try {
  if (webmakerdata["products"] && Array.isArray(webmakerdata["products"].data) && webmakerdata["products"].data.length > 0) {
    products = webmakerdata["products"].data;
  } else if (json.data && json.data.products) {
    products = json.data.products;
  }
} catch (e) { products = []; }

var active = [];
var i;
for (i = 0; i < products.length; i++) {
  var ep = t3vEnrich(products[i]);
  if (ep && ep.status !== "stop") active.push(ep);
}

var maxPerTab = parseInt(json.desing && json.desing.showCount, 10) || 8;
var tabFilters = [
  function(p) { return (p.badges || []).indexOf("new") > -1; },
  function(p, idx) { return true; },
  function(p) { return (p.badges || []).indexOf("bestseller") > -1 || (p.badges || []).indexOf("sale") > -1; },
  function(p, idx) { return idx % 2 === 0; }
];

var tabHtml = ["", "", "", ""];
var tabIdx;
for (tabIdx = 0; tabIdx < 4; tabIdx++) {
  var count = 0;
  var pi;
  for (pi = 0; pi < active.length && count < maxPerTab; pi++) {
    var prod = active[pi];
    var match = tabFilters[tabIdx](prod, pi);
    if (tabIdx === 1) {
      match = pi >= tabIdx * 2 && pi < tabIdx * 2 + maxPerTab + 4;
    }
    if (tabIdx === 0 && !match) continue;
    if (tabIdx === 2 && !match) continue;
    if (tabIdx === 3 && pi % 3 !== 0) continue;
    if (tabIdx === 1 || match) {
      tabHtml[tabIdx] += t3vCard(prod, tabIdx);
      count++;
    }
  }
  if (count === 0) {
    for (pi = 0; pi < active.length && count < maxPerTab; pi++) {
      tabHtml[tabIdx] += t3vCard(active[pi], tabIdx);
      count++;
    }
  }
}

var allCards = tabHtml.join("");
html = html.replace(/\{\{html\}\}/g, allCards);
html = html.replace(/\{\{tab1\}\}/g, tabHtml[0]);
html = html.replace(/\{\{tab2\}\}/g, tabHtml[1]);
html = html.replace(/\{\{tab3\}\}/g, tabHtml[2]);
html = html.replace(/\{\{tab4\}\}/g, tabHtml[3]);
