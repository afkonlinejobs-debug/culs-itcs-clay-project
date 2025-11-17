// seo.js - inject SEO tags into <head>

function addMeta(property, content, attr = "name") {
    const meta = document.createElement("meta");
    meta.setAttribute(attr, property);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
}

/* --- Robots --- */
addMeta("robots", "index, follow");

/* --- OpenGraph --- */
addMeta("og:title", "Dhamrai Clay Heritage", "property");
addMeta("og:description", "Traditional pottery heritage of Bangladesh.", "property");
addMeta("og:image", "https://placehold.co/1200x630", "property");
addMeta("og:type", "website", "property");

/* --- Twitter Card --- */
addMeta("twitter:card", "summary_large_image");
addMeta("twitter:title", "Dhamrai Clay Heritage");
addMeta("twitter:description", "Explore the pottery heritage of Dhamrai.");
addMeta("twitter:image", "https://placehold.co/1200x630");
