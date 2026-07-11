(function () {
  var SITE_ORIGIN = "https://sdk.langstitch.com";
  var SITE_NAME = "LangStitch SDK";
  var TWITTER = "@LangStitch";
  var AUTHOR = "LangStitch";
  var EMAIL = "connect@langstitch.com";
  var PYPI_URL = "https://pypi.org/project/langstitch-sdk/";
  var LANGTAILOR_URL = "https://langtailor.langstitch.com/";
  var PRODUCT_URL = "https://langstitch.com/";

  var TITLE =
    "LangStitch SDK — Multi-language Docs · Python, Spring AI, Go & Rust";
  var DESCRIPTION =
    "Multi-language LangStitch SDK documentation. Python runtime on PyPI today; Spring AI (Java), Go, and Rust expanding. Decorators, YAML config, CLI, and LangTailor canvas export.";
  var KEYWORDS =
    "LangStitch SDK, LangGraph SDK, Python SDK, Spring AI agents, Go agents, Rust agents, multi-language export, langstitch-sdk, PyPI, agent engineering, LangTailor export";

  function upsertMeta(name, content, property) {
    if (!content) return;
    var sel = property
      ? 'meta[property="' + name + '"]'
      : 'meta[name="' + name + '"]';
    var node = document.head.querySelector(sel);
    if (!node) {
      node = document.createElement("meta");
      if (property) node.setAttribute("property", name);
      else node.setAttribute("name", name);
      document.head.appendChild(node);
    }
    node.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    if (!href) return;
    var node = document.head.querySelector('link[rel="' + rel + '"]');
    if (!node) {
      node = document.createElement("link");
      node.setAttribute("rel", rel);
      document.head.appendChild(node);
    }
    node.setAttribute("href", href);
  }

  function injectJsonLd(blocks) {
    if (!blocks || !blocks.length) return;
    var existing = document.getElementById("langstitch-sdk-jsonld");
    if (existing) existing.remove();
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "langstitch-sdk-jsonld";
    script.textContent = JSON.stringify(
      blocks.length === 1 ? blocks[0] : blocks
    );
    document.head.appendChild(script);
  }

  document.title = TITLE;
  upsertMeta("description", DESCRIPTION);
  upsertMeta("keywords", KEYWORDS);
  upsertMeta("author", AUTHOR);
  upsertMeta(
    "robots",
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  );
  upsertMeta("googlebot", "index, follow, max-image-preview:large");
  upsertMeta("bingbot", "index, follow");
  upsertMeta("theme-color", "#00e5a0");
  upsertLink("canonical", SITE_ORIGIN + "/");
  upsertMeta("og:site_name", "LangStitch", true);
  upsertMeta("og:type", "website", true);
  upsertMeta("og:url", SITE_ORIGIN + "/", true);
  upsertMeta("og:title", TITLE, true);
  upsertMeta("og:description", DESCRIPTION, true);
  upsertMeta("og:locale", "en_US", true);
  upsertMeta("og:image", SITE_ORIGIN + "/assets/og-card.png", true);
  upsertMeta("og:image:type", "image/png", true);
  upsertMeta("twitter:card", "summary_large_image");
  upsertMeta("twitter:site", TWITTER);
  upsertMeta("twitter:title", TITLE);
  upsertMeta("twitter:description", DESCRIPTION);
  upsertMeta("twitter:image", SITE_ORIGIN + "/assets/og-card.png");
  upsertLink("sitemap", SITE_ORIGIN + "/sitemap.xml");

  injectJsonLd([
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_ORIGIN + "/",
      description: DESCRIPTION,
      inLanguage: "en-US",
      publisher: {
        "@type": "Organization",
        name: AUTHOR,
        url: PRODUCT_URL,
        email: EMAIL
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "LangStitch SDK (Python)",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Windows, macOS, Linux",
      description:
        "Python runtime of the LangStitch multi-language SDK — decorators, YAML config, and CLI for LangGraph applications. Spring AI, Go, and Rust runtimes share the same project structure.",
      url: SITE_ORIGIN + "/",
      downloadUrl: PYPI_URL,
      softwareVersion: "0.2.0",
      programmingLanguage: ["Python", "Java", "Go", "Rust"],
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Organization", name: AUTHOR, email: EMAIL },
      license: "https://opensource.org/licenses/MIT"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What languages does the LangStitch SDK support?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Python is available now on PyPI as langstitch-sdk. Spring AI (Java), Go, and Rust runtimes share the same project structure and LangTailor canvas export format; those language packages are expanding on the roadmap."
          }
        },
        {
          "@type": "Question",
          name: "How does LangTailor relate to the SDK?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "LangTailor is the visual IDE that designs LangGraph workflows on a canvas and exports projects using the same SDK conventions. Python ships today; Spring AI, Go, and Rust share the export tree and are expanding."
          }
        }
      ]
    }
  ]);
})();
