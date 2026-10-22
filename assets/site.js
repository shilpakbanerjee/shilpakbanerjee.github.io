// Small progressive enhancements. The site works without JavaScript.

// 1. Turn obfuscated e-mail addresses into mailto links
//    (<span class="email" data-user="name" data-domain="example.org">).
document.querySelectorAll(".email[data-user][data-domain]").forEach(function (el) {
  var addr = el.dataset.user + "@" + el.dataset.domain;
  var a = document.createElement("a");
  a.href = "mailto:" + addr;
  a.textContent = addr;
  el.replaceWith(a);
});

// 2. Expand collapsed sections before printing so nothing is left out.
window.addEventListener("beforeprint", function () {
  document.querySelectorAll("details").forEach(function (d) {
    if (!d.open) { d.dataset.wasClosed = "1"; d.open = true; }
  });
});
window.addEventListener("afterprint", function () {
  document.querySelectorAll("details[data-was-closed]").forEach(function (d) {
    d.open = false; delete d.dataset.wasClosed;
  });
});
