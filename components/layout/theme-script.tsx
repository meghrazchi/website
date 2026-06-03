const themeScript = `
(function () {
  try {
    var storedTheme = window.localStorage.getItem("portfolio-theme");
    var shouldUseDark = storedTheme !== "light";
    document.documentElement.classList.toggle("dark", shouldUseDark);
  } catch (_) {}
})();
`;

export function ThemeScript() {
  return (
    <script
      id="portfolio-theme"
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}
