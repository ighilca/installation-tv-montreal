/**
 * Langue : l’URL du formulaire (/ vs /en/) prime.
 * Pages légales : choix enregistré, sinon langue du navigateur.
 */
(function (w) {
  "use strict";

  var KEY = "rc_lang";

  function pathLang() {
    var path = String(w.location.pathname || "/").toLowerCase();
    if (path.length > 1 && path.charAt(path.length - 1) === "/") {
      path = path.slice(0, -1);
    }
    if (path === "/en" || path.indexOf("/en/") === 0) return "en";
    if (path === "" || path === "/" || path === "/index.html") return "fr";
    return null;
  }

  function fromBrowser() {
    var list = w.navigator.languages || [w.navigator.language || "fr"];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i] || "").toLowerCase();
      if (code.indexOf("en") === 0) return "en";
      if (code.indexOf("fr") === 0) return "fr";
    }
    return "fr";
  }

  function detect() {
    var fromUrl = pathLang();
    if (fromUrl) return fromUrl;
    try {
      var saved = w.localStorage.getItem(KEY);
      if (saved === "en" || saved === "fr") return saved;
    } catch (e) {}
    return fromBrowser();
  }

  function paint(lang) {
    if (lang !== "en" && lang !== "fr") lang = "fr";
    var html = document.documentElement;
    html.lang = lang;
    html.classList.remove("lang-fr", "lang-en");
    html.classList.add("lang-" + lang);
    return lang;
  }

  function save(lang) {
    if (lang !== "en" && lang !== "fr") lang = "fr";
    try {
      w.localStorage.setItem(KEY, lang);
    } catch (e) {}
    return paint(lang);
  }

  w.rcLang = {
    detect: detect,
    paint: paint,
    save: save,
    pathLang: pathLang,
  };

  paint(detect());
})(window);
