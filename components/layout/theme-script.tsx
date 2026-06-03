import Script from "next/script";

const themeScript = `
(function () {
  try {
    var storedTheme = window.localStorage.getItem("portfolio-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var shouldUseDark = storedTheme === "dark" || (!storedTheme && prefersDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  } catch (_) {}
})();
`;

export function ThemeScript() {
  return (
    <Script
      id="portfolio-theme"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}
