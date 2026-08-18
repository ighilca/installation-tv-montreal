(function () {
  "use strict";

  var buttons = document.querySelectorAll(".lang-btn");

  function apply(lang, persist) {
    if (window.rcLang) {
      lang = persist ? window.rcLang.save(lang) : window.rcLang.paint(lang);
    } else {
      document.documentElement.lang = lang;
      document.documentElement.classList.remove("lang-fr", "lang-en");
      document.documentElement.classList.add("lang-" + lang);
    }
    buttons.forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.getAttribute("data-lang"), true);
    });
  });

  apply(window.rcLang ? window.rcLang.detect() : "fr", false);
})();
