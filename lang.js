/**
 * Langue : choix enregistré, sinon langue du navigateur.
 */
(function (w) {
  "use strict";

  var KEY = "rc_lang";

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
  };

  paint(detect());
})(window);
