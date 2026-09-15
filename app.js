/**
 * Installation TV Montréal
 * Language toggle, live total, email submit (FormSubmit), confirmation
 */

(function () {
  "use strict";

  const MAIL_TO = "rideconstruction1@gmail.com";
  const MAIL_CC = "ighildjam@gmail.com,oplopl20260710@gmail.com";
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
      addressLabel: "Adresse complète",
      addressHint: "Rue, appartement, ville et code postal — pour se rendre chez vous.",
      addressError: "Veuillez entrer votre adresse complète.",
      addressPlaceholder: "123 rue Example, apt. 4, Montréal, QC H2X 1Y2",
      contactTitle: "Dernière étape",
      contactHint: "Indiquez votre téléphone et votre adresse. On prépare la pose et on vous rappelle pour confirmer le créneau.",
      contactCancel: "Retour",
      contactConfirm: "Envoyer ma demande",
      sizeLabel: "Grandeur de votre TV",
      sizeHint: "Une ou plusieurs grandeurs. Quantité 1 par défaut — le prix est celui de la pose.",
      sizeError: "Choisissez au moins une taille de TV.",
      qtyLabel: "Quantité",
      qtyMinus: "Diminuer",
      qtyPlus: "Augmenter",
      mountLabel: "Support mural",
      mountHint: "Un ou plusieurs supports. Quantité 1 par défaut. Laissez vide si vous avez déjà le vôtre.",
      mountNone: "J'ai déjà le support mural",
      mountFixed: "Support fixe",
      mountFixedMax: "Max 80\"",
      mountMobile: "Support articulé",
      mountMobileMax: "Max 55\"",
      extrasLabel: "Options",
      extrasHint: "Ajoutez ce dont vous avez besoin. Quantité 1 par défaut.",
      cableLabel: "Cache-câbles",
      cableDesc: "Goulotte discrète pour cacher les fils",
      ledLabel: "Lumière derrière la TV",
      ledDesc: "Bande LED contrôlable (ambiance)",
      standLabel: "Meuble TV 75\"",
      standHint: "Un ou plusieurs meubles flottants — blanc ou noir. Quantité 1 par défaut.",
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
      summaryAddress: "Adresse",
      summarySize: "Taille TV",
      summaryMount: "Support",
      summaryCable: "Cache-câbles",
      summaryLed: "Lumière LED",
      summaryStand: "Meuble",
      yes: "Oui",
      no: "Non",
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
        "42": "< 42\"",
        "43-54": "43–54\"",
        "55-65": "55–65\"",
        "66-75": "66–75\"",
        "76-85": "76–85\"",
        "86+": "86\"+",
      },
      mountLabels: {
        none: "J'ai déjà le support mural",
        fixed: "Support fixe",
        mobile: "Support articulé",
      },
      standLabels: {
        none: "Aucun",
        white: "Meuble blanc",
        black: "Meuble noir",
      },
      extraLabels: {
        cable: "Cache-câbles",
        led: "Lumière LED",
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
      addressLabel: "Full address",
      addressHint: "Street, unit, city and postal code — so we can come to you.",
      addressError: "Please enter your full address.",
      addressPlaceholder: "123 Example St, apt. 4, Montreal, QC H2X 1Y2",
      contactTitle: "Last step",
      contactHint: "Enter your phone and full address. We’ll prepare the install and call to confirm your time slot.",
      contactCancel: "Back",
      contactConfirm: "Send my request",
      sizeLabel: "Size of your TV",
      sizeHint: "One or more sizes. Quantity defaults to 1 — price is for the install.",
      sizeError: "Please choose at least one TV size.",
      qtyLabel: "Quantity",
      qtyMinus: "Decrease",
      qtyPlus: "Increase",
      mountLabel: "Wall mount",
      mountHint: "One or more mounts. Quantity defaults to 1. Leave empty if you already have yours.",
      mountNone: "I already have a wall mount",
      mountFixed: "Fixed mount",
      mountFixedMax: "Max 80\"",
      mountMobile: "Full-motion mount",
      mountMobileMax: "Max 55\"",
      extrasLabel: "Add-ons",
      extrasHint: "Add what you need. Quantity defaults to 1.",
      cableLabel: "Cable cover",
      cableDesc: "Discrete raceway to hide wires",
      ledLabel: "Light behind the TV",
      ledDesc: "Controllable LED strip (ambiance)",
      standLabel: "TV stand 75\"",
      standHint: "One or more floating stands — white or black. Quantity defaults to 1.",
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
      summaryAddress: "Address",
      summarySize: "TV size",
      summaryMount: "Mount",
      summaryCable: "Cable cover",
      summaryLed: "LED light",
      summaryStand: "Stand",
      yes: "Yes",
      no: "No",
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
        "42": "< 42\"",
        "43-54": "43–54\"",
        "55-65": "55–65\"",
        "66-75": "66–75\"",
        "76-85": "76–85\"",
        "86+": "86\"+",
      },
      mountLabels: {
        none: "I already have a wall mount",
        fixed: "Fixed mount",
        mobile: "Full-motion mount",
      },
      standLabels: {
        none: "None",
        white: "White stand",
        black: "Black stand",
      },
      extraLabels: {
        cable: "Cable cover",
        led: "LED light",
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
  const addressInput = document.getElementById("address");
  const addressError = document.getElementById("address-error");
  const contactModal = document.getElementById("contact-modal");
  const contactCancel = document.getElementById("contact-cancel");
  const contactConfirm = document.getElementById("contact-confirm");
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

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (i18n[lang][key] != null) {
        el.setAttribute("placeholder", i18n[lang][key]);
      }
    });

    form.querySelectorAll(".qty-btn[data-qty='-1'], .size-tile__qty-btn[data-qty='-1']").forEach(function (btn) {
      btn.setAttribute("aria-label", t("qtyMinus"));
    });
    form.querySelectorAll(".qty-btn[data-qty='1'], .size-tile__qty-btn[data-qty='1']").forEach(function (btn) {
      btn.setAttribute("aria-label", t("qtyPlus"));
    });
    form.querySelectorAll(".qty-input, .size-tile__qty-input").forEach(function (input) {
      input.setAttribute("aria-label", t("qtyLabel"));
    });

    document.title = t("metaTitle");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("metaDescription"));
    updateWarning();
  }

  function selectedCheckboxes(name) {
    return Array.prototype.slice.call(
      form.querySelectorAll('input[name="' + name + '"]:checked')
    );
  }

  function priceOf(el) {
    return el ? Number(el.getAttribute("data-price") || 0) : 0;
  }

  function formatMoney(n) {
    return n + " $";
  }

  function selectedSizes() {
    return selectedCheckboxes("size");
  }

  function qtyTileFor(input) {
    return input.closest("[data-qty-tile], .size-tile");
  }

  function qtyEls(tile) {
    if (!tile) return { wrap: null, input: null };
    return {
      wrap: tile.querySelector(".qty-controls, .size-tile__qty"),
      input: tile.querySelector(".qty-input, .size-tile__qty-input"),
    };
  }

  function clampQty(n) {
    if (!n || n < 1) return 1;
    if (n > 20) return 20;
    return n;
  }

  function qtyFor(input) {
    const els = qtyEls(qtyTileFor(input));
    const n = els.input ? parseInt(els.input.value, 10) : 1;
    return clampQty(n);
  }

  function syncQty(input) {
    const tile = qtyTileFor(input);
    const els = qtyEls(tile);
    if (!els.wrap || !els.input) return;
    if (input.checked) {
      els.wrap.hidden = false;
      if (!els.input.value || parseInt(els.input.value, 10) < 1) {
        els.input.value = "1";
      }
    } else {
      els.wrap.hidden = true;
      els.input.value = "1";
    }
  }

  function setItemQty(itemInput, next) {
    const els = qtyEls(qtyTileFor(itemInput));
    if (!els.input) return;
    if (next < 1) {
      itemInput.checked = false;
      syncQty(itemInput);
      return;
    }
    els.input.value = String(clampQty(next));
  }

  function totalTvCount() {
    return selectedSizes().reduce(function (sum, input) {
      return sum + qtyFor(input);
    }, 0);
  }

  function formatPricedLine(label, qty, unit) {
    const line = qty * unit;
    if (qty > 1) {
      return qty + " × " + label + " (" + formatMoney(line) + ")";
    }
    return label + " (" + formatMoney(line) + ")";
  }

  function formatSizeLine(input) {
    const dict = i18n[lang];
    return formatPricedLine(
      dict.sizeLabels[input.value] || input.value,
      qtyFor(input),
      priceOf(input)
    );
  }

  function formatNamedLines(name, labels) {
    const items = selectedCheckboxes(name);
    if (!items.length) return "—";
    return items
      .map(function (input) {
        return formatPricedLine(
          labels[input.value] || input.value,
          qtyFor(input),
          priceOf(input)
        );
      })
      .join(" · ");
  }

  function sizesSummary() {
    const sizes = selectedSizes();
    if (!sizes.length) return "—";
    return sizes.map(formatSizeLine).join(" · ");
  }

  function mountsSummary() {
    return formatNamedLines("mount", i18n[lang].mountLabels);
  }

  function standsSummary() {
    return formatNamedLines("stand", i18n[lang].standLabels);
  }

  function extrasSummary() {
    return formatNamedLines("extra", i18n[lang].extraLabels);
  }

  function sumPriced(name) {
    return selectedCheckboxes(name).reduce(function (sum, input) {
      return sum + priceOf(input) * qtyFor(input);
    }, 0);
  }

  function computeTotal() {
    return (
      sumPriced("size") +
      sumPriced("mount") +
      sumPriced("extra") +
      sumPriced("stand")
    );
  }

  function updateTotal() {
    totalEl.textContent = formatMoney(computeTotal());
    totalEl.classList.remove("is-bump");
    void totalEl.offsetWidth;
    totalEl.classList.add("is-bump");
    updateWarning();
  }

  function sizeMaxInches() {
    let max = 0;
    selectedSizes().forEach(function (input) {
      const n = Number(input.getAttribute("data-max-inches") || 0);
      if (n > max) max = n;
    });
    return max;
  }

  function updateWarning() {
    const mounts = selectedCheckboxes("mount");
    const sizeMax = sizeMaxInches();

    if (!mounts.length || !sizeMax) {
      warningEl.hidden = true;
      warningEl.textContent = "";
      return;
    }

    const messages = [];
    mounts.forEach(function (mount) {
      const maxTv = Number(mount.getAttribute("data-max-tv") || 999);
      if (sizeMax > maxTv) {
        const msg = mount.value === "mobile" ? t("warnMobile") : t("warnFixed");
        if (messages.indexOf(msg) === -1) messages.push(msg);
      }
    });

    if (!messages.length) {
      warningEl.hidden = true;
      warningEl.textContent = "";
      return;
    }

    warningEl.hidden = false;
    warningEl.textContent = messages.join(" ");
  }

  function validate() {
    let ok = true;

    if (!selectedSizes().length) {
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

  function validateContact() {
    let ok = true;

    if (!phoneInput || !phoneInput.value.trim()) {
      if (phoneError) phoneError.hidden = false;
      if (phoneInput) phoneInput.classList.add("is-invalid");
      ok = false;
    } else {
      if (phoneError) phoneError.hidden = true;
      phoneInput.classList.remove("is-invalid");
    }

    if (!addressInput || !addressInput.value.trim()) {
      if (addressError) addressError.hidden = false;
      if (addressInput) addressInput.classList.add("is-invalid");
      ok = false;
    } else {
      if (addressError) addressError.hidden = true;
      addressInput.classList.remove("is-invalid");
    }

    return ok;
  }

  function showContactModal() {
    if (!contactModal) return;
    contactModal.hidden = false;
    document.body.classList.add("is-asking-contact");
    if (phoneError) phoneError.hidden = true;
    if (addressError) addressError.hidden = true;
    if (phoneInput) {
      phoneInput.classList.remove("is-invalid");
      phoneInput.focus();
    }
    if (addressInput) addressInput.classList.remove("is-invalid");
  }

  function hideContactModal() {
    if (!contactModal) return;
    contactModal.hidden = true;
    document.body.classList.remove("is-asking-contact");
  }

  function submitLead() {
    if (submitError) submitError.hidden = true;
    setSending(true);
    if (contactConfirm) contactConfirm.disabled = true;

    sendRequest()
      .then(function () {
        hideContactModal();
        showConfirm();
      })
      .catch(function (err) {
        hideContactModal();
        if (submitError) {
          submitError.hidden = false;
          submitError.textContent =
            err && err.message === "ACTIVATE" ? t("activateEmail") : t("submitError");
        }
      })
      .finally(function () {
        setSending(false);
        if (contactConfirm) {
          contactConfirm.disabled = false;
          contactConfirm.textContent = t("contactConfirm");
        }
      });
  }

  function buildSummary() {
    const dict = i18n[lang];
    const extras = selectedCheckboxes("extra");
    const cable = extras.some(function (el) {
      return el.value === "cable";
    });
    const led = extras.some(function (el) {
      return el.value === "led";
    });
    const cableInput = form.querySelector('input[name="extra"][value="cable"]');
    const ledInput = form.querySelector('input[name="extra"][value="led"]');

    const rows = [
      { label: dict.summaryPhone, value: phoneInput.value.trim() },
      {
        label: dict.summaryAddress,
        value: addressInput ? addressInput.value.trim() : "—",
      },
      {
        label: dict.summarySize,
        value: sizesSummary(),
      },
      {
        label: dict.summaryMount,
        value: mountsSummary(),
      },
      {
        label: dict.summaryCable,
        value: cable
          ? formatPricedLine(dict.extraLabels.cable, qtyFor(cableInput), priceOf(cableInput))
          : dict.no,
      },
      {
        label: dict.summaryLed,
        value: led
          ? formatPricedLine(dict.extraLabels.led, qtyFor(ledInput), priceOf(ledInput))
          : dict.no,
      },
      {
        label: dict.summaryStand,
        value: standsSummary(),
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
    const extras = selectedCheckboxes("extra");
    const cable = extras.some(function (el) {
      return el.value === "cable";
    });
    const led = extras.some(function (el) {
      return el.value === "led";
    });
    const cableInput = form.querySelector('input[name="extra"][value="cable"]');
    const ledInput = form.querySelector('input[name="extra"][value="led"]');
    const tvCount = totalTvCount();
    const total = formatMoney(computeTotal());

    return {
      _subject: "Nouvelle demande — Installation TV Montréal",
      _template: "table",
      _cc: MAIL_CC,
      _captcha: "false",
      "Téléphone / Phone": phoneInput.value.trim(),
      "Adresse / Address": addressInput ? addressInput.value.trim() : "—",
      "Taille TV / Size": sizesSummary(),
      "Nombre de TV / TV count": String(tvCount || 0),
      "Support / Mount": mountsSummary(),
      "Cache-câbles / Cable cover": cable
        ? formatPricedLine(dict.extraLabels.cable, qtyFor(cableInput), priceOf(cableInput))
        : dict.no,
      "Lumière LED / LED light": led
        ? formatPricedLine(dict.extraLabels.led, qtyFor(ledInput), priceOf(ledInput))
        : dict.no,
      "Meuble / Stand": standsSummary(),
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

  form.addEventListener("change", function (e) {
    if (
      e.target &&
      e.target.matches(
        'input[type="checkbox"][name="size"], input[type="checkbox"][name="mount"], input[type="checkbox"][name="extra"], input[type="checkbox"][name="stand"]'
      )
    ) {
      syncQty(e.target);
      if (e.target.name === "size" && selectedSizes().length) sizeError.hidden = true;
    }
    updateTotal();
  });

  form.addEventListener("click", function (e) {
    const btn = e.target.closest(".qty-btn, .size-tile__qty-btn");
    if (!btn) return;
    e.preventDefault();
    const tile = btn.closest("[data-qty-tile], .size-tile");
    if (!tile) return;
    const els = qtyEls(tile);
    const itemInput = tile.querySelector(
      'input[name="size"], input[name="mount"], input[name="extra"], input[name="stand"]'
    );
    if (!els.input || !itemInput || !itemInput.checked) return;
    const delta = Number(btn.getAttribute("data-qty") || 0);
    setItemQty(itemInput, qtyFor(itemInput) + delta);
    updateTotal();
  });

  form.addEventListener("input", function (e) {
    if (
      e.target &&
      (e.target.classList.contains("qty-input") ||
        e.target.classList.contains("size-tile__qty-input"))
    ) {
      const tile = e.target.closest("[data-qty-tile], .size-tile");
      const itemInput = tile
        ? tile.querySelector(
            'input[name="size"], input[name="mount"], input[name="extra"], input[name="stand"]'
          )
        : null;
      if (itemInput && itemInput.checked) {
        const raw = parseInt(e.target.value, 10);
        if (!raw || raw < 1) {
          setItemQty(itemInput, 0);
        } else {
          setItemQty(itemInput, raw);
        }
        updateTotal();
      }
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
      if (!selectedSizes().length) {
        const firstSize = form.querySelector('input[name="size"]');
        if (firstSize) firstSize.focus();
      } else if (privacyConsent && !privacyConsent.checked) {
        privacyConsent.focus();
      }
      return;
    }

    if (submitError) submitError.hidden = true;
    showContactModal();
  });

  if (contactCancel) {
    contactCancel.addEventListener("click", function () {
      if (sending) return;
      hideContactModal();
    });
  }

  if (contactConfirm) {
    contactConfirm.addEventListener("click", function () {
      if (sending) return;
      if (!validateContact()) {
        if (phoneInput && phoneInput.classList.contains("is-invalid")) {
          phoneInput.focus();
        } else if (addressInput) {
          addressInput.focus();
        }
        return;
      }
      submitLead();
    });
  }

  if (contactModal) {
    contactModal.addEventListener("click", function (e) {
      if (e.target === contactModal && !sending) hideContactModal();
    });
    contactModal.addEventListener("input", function (e) {
      if (e.target === phoneInput && phoneInput.value.trim()) {
        if (phoneError) phoneError.hidden = true;
        phoneInput.classList.remove("is-invalid");
      }
      if (e.target === addressInput && addressInput.value.trim()) {
        if (addressError) addressError.hidden = true;
        addressInput.classList.remove("is-invalid");
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (contactModal && !contactModal.hidden && !sending) hideContactModal();
  });

  editBtn.addEventListener("click", hideConfirm);

  applyLanguage(window.rcLang ? window.rcLang.detect() : "fr");
  updateTotal();
})();
