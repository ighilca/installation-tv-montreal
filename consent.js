/**
 * Consentement publicité / pixel Meta — Loi 25
 */
(function () {
  "use strict";

  var KEY = "rc_loi25_consent";
  var PIXEL_ID = "1434401558131877";

  function readConsent() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "null");
    } catch (e) {
      return null;
    }
  }

  function writeConsent(marketing) {
    localStorage.setItem(
      KEY,
      JSON.stringify({ marketing: !!marketing, ts: Date.now() })
    );
  }

  function loadPixel() {
    if (window.fbq) return;
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");
  }

  function hideBar() {
    var bar = document.getElementById("consent-bar");
    if (bar) bar.hidden = true;
  }

  function showBar() {
    var bar = document.getElementById("consent-bar");
    if (bar) bar.hidden = false;
  }

  window.rcConsent = {
    allowsMarketing: function () {
      var c = readConsent();
      return !!(c && c.marketing);
    },
    accept: function () {
      writeConsent(true);
      loadPixel();
      hideBar();
    },
    refuse: function () {
      writeConsent(false);
      hideBar();
    },
  };

  var existing = readConsent();
  if (existing && existing.marketing) {
    loadPixel();
  } else if (!existing) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", showBar);
    } else {
      showBar();
    }
  }

  document.addEventListener("click", function (e) {
    var accept = e.target.closest("[data-consent=accept]");
    var refuse = e.target.closest("[data-consent=refuse]");
    if (accept) {
      e.preventDefault();
      window.rcConsent.accept();
    }
    if (refuse) {
      e.preventDefault();
      window.rcConsent.refuse();
    }
  });
})();
