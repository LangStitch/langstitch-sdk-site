(function () {
  var SITE_ORIGIN = "https://sdk.langstitch.com";
  var SITE_NAME = "LangStitch SDK";
  var TWITTER = "@LangStitch";
  var AUTHOR = "LangStitch";
  var EMAIL = "connect@langstitch.com";
  var PYPI_URL = "https://pypi.org/project/langstitch-sdk/";
  var MAVEN_SPRING_AI_URL = "https://central.sonatype.com/artifact/com.langstitch/langstitch-spring-ai/0.2.0";
  var GITHUB_SPRING_AI = "https://github.com/LangStitch/langstitch-spring-ai";
  var LANGTAILOR_URL = "https://langtailor.langstitch.com/";
  var PRODUCT_URL = "https://langstitch.com/";
  var MARKETPLACE_URL = "https://marketplace.langstitch.com/";
  var GITHUB_SDK = "https://github.com/LangStitch/langstitch-sdk";
  var GITHUB_SPEC = "https://github.com/LangStitch/langstitch-spec";
  var OPEN_VSX_URL = "https://open-vsx.org/extension/langstitch/langtailor-canvas";
  var OG_IMAGE = "https://langstitch.com/assets/og-card.svg";
  var VERSION = "0.3.0";
  var SPRING_AI_VERSION = "0.2.0";

  var TITLE =
    "LangStitch SDK — Python + Spring AI IR Compilers · Go & Rust Expanding";
  var DESCRIPTION =
    "LangStitch multi-language SDK — IR v2 compilers for Python (PyPI: langstitch-sdk) and Spring AI (Maven Central: com.langstitch:langstitch-spring-ai:0.2.0). Same canvas export, same project contracts. Go and Rust expanding.";
  var KEYWORDS =
    "LangStitch SDK, langstitch-sdk, langstitch-spring-ai, IR v2, Maven Central, Spring AI, Python LangGraph, langstitch compile, RunEvents, multi-language export, PyPI, agent engineering, LangTailor";

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
      blocks.length === 1 ? blocks[0] : { "@context": "https://schema.org", "@graph": blocks }
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
  upsertMeta("og:image", OG_IMAGE, true);
  upsertMeta("og:image:secure_url", OG_IMAGE, true);
  upsertMeta("og:image:type", "image/svg+xml", true);
  upsertMeta("og:image:width", "1200", true);
  upsertMeta("og:image:height", "630", true);
  upsertMeta("og:image:alt", "LangStitch SDK — Python and Spring AI IR compilers", true);
  upsertMeta("twitter:card", "summary_large_image");
  upsertMeta("twitter:site", TWITTER);
  upsertMeta("twitter:title", TITLE);
  upsertMeta("twitter:description", DESCRIPTION);
  upsertMeta("twitter:image", OG_IMAGE);
  upsertMeta("twitter:image:alt", "LangStitch SDK documentation");
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
        email: EMAIL,
        sameAs: [PYPI_URL, MAVEN_SPRING_AI_URL, GITHUB_SDK, GITHUB_SPRING_AI, GITHUB_SPEC, LANGTAILOR_URL, OPEN_VSX_URL, MARKETPLACE_URL]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "langstitch-sdk",
      alternateName: "LangStitch SDK (Python)",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Windows, macOS, Linux",
      description:
        "Python runtime of the LangStitch SDK — IR v2 compiler, langstitch compile CLI, dev RunEvents, decorators, YAML config, and LangGraph project scaffold. Spring AI IR compiler on Maven Central; Go and Rust runtimes share the same project structure.",
      url: SITE_ORIGIN + "/",
      downloadUrl: PYPI_URL,
      installUrl: PYPI_URL,
      softwareVersion: VERSION,
      programmingLanguage: ["Python", "Java", "Go", "Rust"],
      featureList: [
        "IR v2 compiler (langstitch compile)",
        "Dev RunEvents SSE stream",
        "LangGraph decorators and typed config",
        "CLI init, compile, run",
        "LangTailor canvas export compatibility",
        "Spring AI IR compiler on Maven Central"
      ],
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Organization", name: AUTHOR, email: EMAIL },
      license: "https://opensource.org/licenses/MIT"
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "langstitch-spring-ai",
      alternateName: "LangStitch Spring AI IR Compiler",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Windows, macOS, Linux",
      description:
        "Spring AI IR compiler for LangStitch — IR v2 to Spring Boot + Spring AI projects. Published on Maven Central as com.langstitch:langstitch-spring-ai.",
      url: MAVEN_SPRING_AI_URL,
      downloadUrl: MAVEN_SPRING_AI_URL,
      installUrl: MAVEN_SPRING_AI_URL,
      softwareVersion: SPRING_AI_VERSION,
      programmingLanguage: "Java",
      codeRepository: GITHUB_SPRING_AI,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Organization", name: AUTHOR, email: EMAIL },
      license: "https://opensource.org/licenses/MIT"
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: "langstitch-sdk",
      programmingLanguage: "Python",
      codeRepository: GITHUB_SDK,
      url: SITE_ORIGIN + "/",
      license: "https://opensource.org/licenses/MIT",
      author: { "@type": "Organization", name: AUTHOR, email: EMAIL }
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
              "Python is available now on PyPI as langstitch-sdk (v0.3.0). Spring AI IR compiler is available on Maven Central as com.langstitch:langstitch-spring-ai:0.2.0. Go and Rust runtimes share the same project structure and LangTailor canvas export format; those language packages are expanding on the roadmap."
          }
        },
        {
          "@type": "Question",
          name: "How does LangTailor relate to the SDK?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "LangTailor is the visual IDE that designs workflows on an IR v2 canvas and exports Python (langstitch-sdk) or Spring AI (langstitch-spring-ai) projects. Design once, compile with the matching IR compiler, and keep the same application.yaml contracts."
          }
        },
        {
          "@type": "Question",
          name: "What is langstitch compile?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "langstitch compile is the SDK CLI command that reads IR v2 documents (from LangTailor or langstitch-spec) and emits Python LangGraph project files. It is part of pip install langstitch-sdk and powers canvas-to-code export in LangTailor v0.3.1."
          }
        },
        {
          "@type": "Question",
          name: "What are RunEvents in LangStitch?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "RunEvents are dev-gated server-sent events emitted during local agent runs. They help debug graph execution, node transitions, and LLM calls when developing with langstitch-sdk — without exposing telemetry in production builds."
          }
        }
      ]
    }
  ]);
})();
