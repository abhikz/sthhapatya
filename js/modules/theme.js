/* ============ THEME TOGGLE ============ */
  var root = document.documentElement;
  var themeToggle = document.getElementById('themeToggle');
  var storedTheme;
  try { storedTheme = window.localStorage.getItem('sthhapatya-theme'); } catch(err) { storedTheme = null; }
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initialTheme);
  themeToggle.setAttribute('aria-pressed', String(initialTheme === 'dark'));
  themeToggle.addEventListener('click', function(){
    var isDark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.setAttribute('aria-pressed', String(!isDark));
    try { window.localStorage.setItem('sthhapatya-theme', isDark ? 'light' : 'dark'); } catch(err){}
  });
