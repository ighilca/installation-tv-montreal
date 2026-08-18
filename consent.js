/**
 * Consentement mesure / pub (GA4 + pixel Meta) — Loi 25
 */
(function () {
  "use strict";

  var KEY = "rc_loi25_consent";
  var VERSION = 2;
  var PIXEL_ID = "1434401558131877";
  var GA_ID = "G-C8WK5FSGHN";
  var gaReady = false;

  function readConsent() {
    try {
      var c = JSON.parse(localStorage.getItem(KEY) || "null");
      if (!c || c.v !== VERSION) return null;
      return c;
    } catch (e) {
      return null;
    }
  }

  function writeConsent(marketing) {
    localStorage.setItem(
      KEY,
      JSON.stringify({ v: VERSION, marketing: !!marketing, ts: Date.now() })
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

  function loadGA() {
    if (gaReady) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };

    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "granted",
      functionality_storage: "granted",
      personalization_storage: "denied",
      security_storage: "granted",
    });

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(script);

    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    gaReady = true;
  }

  function pauseGA() {
    if (typeof window.gtag !== "function") return;
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
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
      loadGA();
      loadPixel();
      hideBar();
    },
    refuse: function () {
      writeConsent(false);
      pauseGA();
      hideBar();
    },
  };

  var existing = readConsent();
  if (existing && existing.marketing) {
    loadGA();
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
