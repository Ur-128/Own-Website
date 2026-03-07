/**
 * Load the shared navbar component into #navbar-placeholder.
 * Path is relative to the current page (all pages are in site root).
 */
(function () {
  var placeholder = document.getElementById('navbar-placeholder');
  if (!placeholder) return;

  fetch('components/navbar.html')
    .then(function (res) { return res.text(); })
    .then(function (html) {
      placeholder.outerHTML = html.trim();
    })
    .catch(function () {
      placeholder.outerHTML = '<!-- Navbar failed to load -->';
    });
})();
