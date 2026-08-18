/**
 * Installation TV Montréal
 * Language toggle, live total, email submit (FormSubmit), confirmation
 */

(function () {
  "use strict";

  const MAIL_TO = "rideconstruction1@gmail.com";
  const MAIL_CC = "ighildjam@gmail.com";
  const SUBMIT_URL = "https://formsubmit.co/ajax/" + MAIL_TO;

  const i18n = {
    fr: {
      brandName: "Installation TV",
      title: "Montréal",
      tagline: "Composez votre pose en quelques gestes. Total clair, sans surprise.",
      brandQuote: "Pose soignée · Câbles nets · Chez vous",
      kicker: "Votre estimation",
      lead: "Répondez étape par étape. Le total se met à jour tout de suite.",
      phoneLabel: "Téléphone",
      phoneHint: "On vous contacte pour confirmer le créneau.",
      phoneError: "Veuillez entrer un numéro de téléphone.",
      sizeLabel: "Grandeur de votre TV",
      sizeHint: "Le prix affiché est celui de la pose.",
      sizeError: "Veuillez choisir la taille de votre TV.",
      mountLabel: "Support mural",
      mountHint: "Un seul choix. Les limites sont indiquées clairement.",
      mountNone: "J'ai déjà le support mural",
      mountFixed: "Support fixe",
      mountFixedMax: "Max 80\"",
      mountMobile: "Support articulé",
      mountMobileMax: "Max 55\"",
      extrasLabel: "Options",
      extrasHint: "Ajoutez seulement ce dont vous avez besoin.",
      cableLabel: "Cache-câbles",
      cableDesc: "Goulotte discrète pour cacher les fils",
      ledLabel: "Lumière derrière la TV",
      ledDesc: "Bande LED contrôlable (ambiance)",
      standLabel: "Meuble TV 75\"",
      standHint: "Meuble flottant large — blanc ou noir.",
      standNone: "Aucun",
      standWhite: "Meuble blanc",
      standBlack: "Meuble noir",
      totalLabel: "Total estimé",
      submit: "Envoyer",
      submitting: "Envoi…",
      submitError: "L’envoi a échoué. Réessayez dans un instant.",
      activateEmail: "Activez d’abord FormSubmit : ouvrez rideconstruction1@gmail.com (et les indésirables), cliquez « Activate Form », puis renvoyez.",
      confirmTitle: "Demande envoyée",
      confirmIntro: "Un courriel a été transmis à notre équipe. Voici votre récapitulatif.",
      edit: "Modifier",
      warnFixed: "Le support fixe est prévu pour les TV jusqu’à 80\". Votre taille sélectionnée dépasse cette limite.",
      warnMobile: "Le support articulé est prévu pour les TV jusqu’à 55\". Votre taille sélectionnée dépasse cette limite.",
      summaryPhone: "Téléphone",
      summarySize: "Taille TV",
      summaryMount: "Support",
      summaryCable: "Cache-câbles",
      summaryLed: "Lumière LED",
      summaryStand: "Meuble",
      yes: "Oui",
      no: "Non",
      collectNotice: "Numéro et choix d’installation : pour vous rappeler au sujet de cette estimation. Envoi par courriel (hors Québec). Accès ou correction : rideconstruction1@gmail.com.",
      privacyConsent: "J’accepte d’être contacté au sujet de cette estimation.",
      privacyLink: "Politique de confidentialité",
      navPrivacy: "Confidentialité",
      navCookies: "Témoins",
      navLegal: "Mentions",
      cookieBanner: "On charge Google Analytics et un pixel Meta seulement si vous acceptez, pour mesurer les visites et les pubs. Essentiel : mémoriser ce choix.",
      cookieMore: "Politique de témoins",
      cookieRefuse: "Refuser",
      cookieAccept: "Accepter",
      privacyError: "Cochez la case pour envoyer la demande.",
      metaTitle: "Installation TV Montréal | Pose murale dès 50 $",
      metaDescription: "Pose de TV au mur à Montréal dès 50 $. Support, cache-câbles, LED et meuble. Le prix s’affiche tout de suite. On vous rappelle pour confirmer.",
      seoHeading: "Pose de TV murale à Montréal",
      seoBody: "Ride Construction installe votre téléviseur au mur à Montréal et dans les environs. Support fixe ou articulé, cache-câbles, bande LED, meuble. Le total s’affiche tout de suite. On vous rappelle pour confirmer le créneau.",
      altFixed: "Support mural fixe pour téléviseur",
      altMobile: "Support mural articulé pour téléviseur",
      altCable: "Goulotte cache-câbles pour fils de télévision",
      altLed: "Bande LED derrière un téléviseur mural",
      altStandWhite: "Meuble TV flottant blanc 75 pouces",
      altStandBlack: "Meuble TV flottant noir 75 pouces",
      sizeLabels: {
        "42": "< 42\" (50 $)",
        "43-54": "43–54\" (60 $)",
        "55-65": "55–65\" (80 $)",
        "66-75": "66–75\" (100 $)",
        "76-85": "76–85\" (120 $)",
        "86+": "86\"+ (150 $)",
      },
      mountLabels: {
        none: "J'ai déjà le support mural",
        fixed: "Support fixe (+40 $)",
        mobile: "Support articulé (+60 $)",
      },
      standLabels: {
        none: "Aucun",
        white: "Blanc (+300 $)",
        black: "Noir (+300 $)",
      },
    },
    en: {
      brandName: "TV Installation",
      title: "Montreal",
      tagline: "Build your install in a few taps. Clear total, no surprises.",
      brandQuote: "Clean mount · Hidden cables · At home",
      kicker: "Your estimate",
      lead: "Answer step by step. The total updates instantly.",
      phoneLabel: "Phone",
      phoneHint: "We’ll call to confirm your time slot.",
      phoneError: "Please enter a phone number.",
      sizeLabel: "Size of your TV",
      sizeHint: "The price shown is for the install.",
      sizeError: "Please choose your TV size.",
      mountLabel: "Wall mount",
      mountHint: "One choice only. Limits are clearly marked.",
      mountNone: "I already have a wall mount",
      mountFixed: "Fixed mount",
      mountFixedMax: "Max 80\"",
      mountMobile: "Full-motion mount",
      mountMobileMax: "Max 55\"",
      extrasLabel: "Add-ons",
      extrasHint: "Add only what you need.",
      cableLabel: "Cable cover",
      cableDesc: "Discrete raceway to hide wires",
      ledLabel: "Light behind the TV",
      ledDesc: "Controllable LED strip (ambiance)",
      standLabel: "TV stand 75\"",
      standHint: "Wide floating stand — white or black.",
      standNone: "None",
      standWhite: "White stand",
      standBlack: "Black stand",
      totalLabel: "Estimated total",
      submit: "Submit",
      submitting: "Sending…",
      submitError: "Sending failed. Please try again shortly.",
      activateEmail: "Activate FormSubmit first: open rideconstruction1@gmail.com (and spam), click “Activate Form”, then submit again.",
      confirmTitle: "Request sent",
      confirmIntro: "An email was sent to our team. Here’s your summary.",
      edit: "Edit",
      warnFixed: "The fixed mount is rated for TVs up to 80\". Your selected size exceeds that limit.",
      warnMobile: "The full-motion mount is rated for TVs up to 55\". Your selected size exceeds that limit.",
      summaryPhone: "Phone",
      summarySize: "TV size",
      summaryMount: "Mount",
      summaryCable: "Cable cover",
      summaryLed: "LED light",
      summaryStand: "Stand",
      yes: "Yes",
      no: "No",
      collectNotice: "Phone and install choices: to call you back about this estimate. Sent by email (outside Quebec). Access or correction: rideconstruction1@gmail.com.",
      privacyConsent: "I agree to be contacted about this estimate.",
      privacyLink: "Privacy policy",
      navPrivacy: "Privacy",
      navCookies: "Cookies",
      navLegal: "Legal",
      cookieBanner: "We load Google Analytics and a Meta pixel only if you accept, to measure visits and ads. Essential: remember this choice.",
      cookieMore: "Cookie policy",
      cookieRefuse: "Refuse",
      cookieAccept: "Accept",
      privacyError: "Check the box to send the request.",
      metaTitle: "TV Installation Montreal | Wall mount from $50",
      metaDescription: "TV wall mounting in Montreal from $50. Mounts, cable cover, LED and stand. The price updates as you choose. We’ll call to confirm.",
      seoHeading: "TV wall mounting in Montreal",
      seoBody: "Ride Construction mounts your TV on the wall in Montreal and nearby. Fixed or full-motion mount, cable cover, LED strip, stand. The total updates as you choose. We’ll call to confirm your time slot.",
      altFixed: "Fixed wall mount for a television",
      altMobile: "Full-motion wall mount for a television",
      altCable: "Cable cover raceway for TV wires",
      altLed: "LED strip behind a wall-mounted TV",
      altStandWhite: "White floating 75-inch TV stand",
      altStandBlack: "Black floating 75-inch TV stand",
      sizeLabels: {
        "42": "< 42\" ($50)",
        "43-54": "43–54\" ($60)",
        "55-65": "55–65\" ($80)",
        "66-75": "66–75\" ($100)",
        "76-85": "76–85\" ($120)",
        "86+": "86\"+ ($150)",
      },
      mountLabels: {
        none: "I already have a wall mount",
        fixed: "Fixed mount (+$40)",
        mobile: "Full-motion mount (+$60)",
      },
      standLabels: {
        none: "None",
        white: "White (+$300)",
        black: "Black (+$300)",
      },
    },
  };

  let lang = "fr";

  const form = document.getElementById("tv-form");
  const totalEl = document.getElementById("total-amount");
  const warningEl = document.getElementById("size-warning");
  const confirmScreen = document.getElementById("confirm-screen");
  const confirmList = document.getElementById("confirm-list");
  const confirmTotal = document.getElementById("confirm-total");
  const editBtn = document.getElementById("edit-btn");
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phone-error");
  const sizeError = document.getElementById("size-error");
  const submitBtn = document.getElementById("submit-btn");
  const submitError = document.getElementById("submit-error");
  const langButtons = document.querySelectorAll(".lang-btn");
  const privacyConsent = document.getElementById("privacy-consent");
  const privacyBox = document.getElementById("privacy-box");
  const privacyError = document.getElementById("privacy-error");
  let sending = false;

  function t(key) {
    return i18n[lang][key];
  }

  function applyLanguage(next) {
    lang = next;
    if (window.rcLang) {
      window.rcLang.save(next);
    } else {
      document.documentElement.lang = next;
      document.documentElement.classList.remove("lang-fr", "lang-en");
      document.documentElement.classList.add("lang-" + next);
    }

    langButtons.forEach(function (btn) {
      const active = btn.getAttribute("data-lang") === next;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang][key] != null) {
        el.textContent = i18n[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-alt");
      if (i18n[lang][key] != null) {
        el.setAttribute("alt", i18n[lang][key]);
      }
    });

    document.title = t("metaTitle");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("metaDescription"));
    updateWarning();
  }

  function selectedRadio(name) {
    return form.querySelector('input[name="' + name + '"]:checked');
  }

  function priceOf(el) {
    return el ? Number(el.getAttribute("data-price") || 0) : 0;
  }

  function formatMoney(n) {
    return n + " $";
  }

  function computeTotal() {
    let total = 0;
    total += priceOf(selectedRadio("size"));
    total += priceOf(selectedRadio("mount"));
    total += priceOf(selectedRadio("stand"));

    form.querySelectorAll('input[type="checkbox"]:checked').forEach(function (cb) {
      total += priceOf(cb);
    });

    return total;
  }

  function updateTotal() {
    totalEl.textContent = formatMoney(computeTotal());
    totalEl.classList.remove("is-bump");
    void totalEl.offsetWidth;
    totalEl.classList.add("is-bump");
    updateWarning();
  }

  function sizeMaxInches() {
    const size = selectedRadio("size");
    return size ? Number(size.getAttribute("data-max-inches") || 0) : 0;
  }

  function updateWarning() {
    const mount = selectedRadio("mount");
    const maxTv = mount ? Number(mount.getAttribute("data-max-tv") || 999) : 999;
    const sizeMax = sizeMaxInches();
    const mountVal = mount ? mount.value : "none";

    if (mountVal === "none" || !sizeMax || sizeMax <= maxTv) {
      warningEl.hidden = true;
      warningEl.textContent = "";
      return;
    }

    warningEl.hidden = false;
    warningEl.textContent = mountVal === "mobile" ? t("warnMobile") : t("warnFixed");
  }

  function validate() {
    let ok = true;

    if (!phoneInput.value.trim()) {
      phoneError.hidden = false;
      phoneInput.classList.add("is-invalid");
      ok = false;
    } else {
      phoneError.hidden = true;
      phoneInput.classList.remove("is-invalid");
    }

    if (!selectedRadio("size")) {
      sizeError.hidden = false;
      ok = false;
    } else {
      sizeError.hidden = true;
    }

    if (privacyConsent && !privacyConsent.checked) {
      if (privacyBox) privacyBox.classList.add("is-invalid");
      if (privacyError) privacyError.hidden = false;
      ok = false;
    } else {
      if (privacyBox) privacyBox.classList.remove("is-invalid");
      if (privacyError) privacyError.hidden = true;
    }

    return ok;
  }

  function buildSummary() {
    const dict = i18n[lang];
    const size = selectedRadio("size");
    const mount = selectedRadio("mount");
    const stand = selectedRadio("stand");
    const cable = form.querySelector('input[name="cable"]').checked;
    const led = form.querySelector('input[name="led"]').checked;

    const rows = [
      { label: dict.summaryPhone, value: phoneInput.value.trim() },
      {
        label: dict.summarySize,
        value: size ? dict.sizeLabels[size.value] : "—",
      },
      {
        label: dict.summaryMount,
        value: mount ? dict.mountLabels[mount.value] : "—",
      },
      {
        label: dict.summaryCable,
        value: cable ? dict.yes + " (+30 $)" : dict.no,
      },
      {
        label: dict.summaryLed,
        value: led ? dict.yes + " (+60 $)" : dict.no,
      },
      {
        label: dict.summaryStand,
        value: stand ? dict.standLabels[stand.value] : "—",
      },
    ];

    confirmList.innerHTML = rows
      .map(function (row) {
        return (
          "<li><span class=\"item-label\">" +
          escapeHtml(row.label) +
          "</span><span class=\"item-value\">" +
          escapeHtml(row.value) +
          "</span></li>"
        );
      })
      .join("");

    confirmTotal.textContent = formatMoney(computeTotal());
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function collectPayload() {
    const dict = i18n[lang];
    const size = selectedRadio("size");
    const mount = selectedRadio("mount");
    const stand = selectedRadio("stand");
    const cable = form.querySelector('input[name="cable"]').checked;
    const led = form.querySelector('input[name="led"]').checked;
    const total = formatMoney(computeTotal());

    return {
      _subject: "Nouvelle demande — Installation TV Montréal",
      _template: "table",
      _cc: MAIL_CC,
      _captcha: "false",
      "Téléphone / Phone": phoneInput.value.trim(),
      "Taille TV / Size": size ? dict.sizeLabels[size.value] : "—",
      "Support / Mount": mount ? dict.mountLabels[mount.value] : "—",
      "Cache-câbles / Cable cover": cable ? dict.yes + " (+30 $)" : dict.no,
      "Lumière LED / LED light": led ? dict.yes + " (+60 $)" : dict.no,
      "Meuble / Stand": stand ? dict.standLabels[stand.value] : "—",
      "Total estimé / Estimated total": total,
      Langue: lang.toUpperCase(),
    };
  }

  function setSending(isSending) {
    sending = isSending;
    submitBtn.disabled = isSending;
    submitBtn.textContent = isSending ? t("submitting") : t("submit");
  }

  function sendRequest() {
    const payload = collectPayload();
    payload._url = window.location.href;

    return fetch(SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    }).then(function (res) {
      return res.json().then(function (data) {
        if (!res.ok) {
          throw new Error("HTTP " + res.status);
        }
        if (data && (data.success === true || data.success === "true")) {
          return data;
        }
        const msg = (data && data.message) || "";
        if (/activat/i.test(msg)) {
          const err = new Error("ACTIVATE");
          throw err;
        }
        throw new Error(msg || "send failed");
      });
    });
  }

  function showConfirm() {
    buildSummary();
    if (submitError) submitError.hidden = true;
    confirmScreen.hidden = false;
    document.body.classList.add("is-confirming");
    window.scrollTo(0, 0);

    if (window.rcConsent && window.rcConsent.allowsMarketing()) {
      if (typeof fbq === "function") {
        fbq("track", "Lead", {
          content_name: "Installation TV Montreal",
          currency: "CAD",
          value: computeTotal(),
        });
      }
      if (typeof gtag === "function") {
        gtag("event", "generate_lead", {
          currency: "CAD",
          value: computeTotal(),
        });
      }
    }
  }

  function hideConfirm() {
    confirmScreen.hidden = true;
    document.body.classList.remove("is-confirming");
  }

  langButtons.forEach(function (btn) {
    if (btn.tagName === "A") return;
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang"));
      if (!sending) submitBtn.textContent = t("submit");
    });
  });

  form.addEventListener("change", updateTotal);
  form.addEventListener("input", function (e) {
    if (e.target === phoneInput && phoneInput.value.trim()) {
      phoneError.hidden = true;
      phoneInput.classList.remove("is-invalid");
    }
    if (e.target === privacyConsent) {
      if (privacyBox) privacyBox.classList.toggle("is-invalid", !privacyConsent.checked);
      if (privacyError) privacyError.hidden = privacyConsent.checked;
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (sending) return;

    if (!validate()) {
      if (phoneInput.classList.contains("is-invalid")) {
        phoneInput.focus();
      } else if (!selectedRadio("size")) {
        const firstSize = form.querySelector('input[name="size"]');
        if (firstSize) firstSize.focus();
      } else if (privacyConsent && !privacyConsent.checked) {
        privacyConsent.focus();
      }
      return;
    }

    if (submitError) submitError.hidden = true;
    setSending(true);

    sendRequest()
      .then(function () {
        showConfirm();
      })
      .catch(function (err) {
        if (submitError) {
          submitError.hidden = false;
          submitError.textContent =
            err && err.message === "ACTIVATE" ? t("activateEmail") : t("submitError");
        }
      })
      .finally(function () {
        setSending(false);
      });
  });

  editBtn.addEventListener("click", hideConfirm);

  applyLanguage(window.rcLang ? window.rcLang.detect() : "fr");
  updateTotal();
})();
