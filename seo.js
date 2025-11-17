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

/*Slider autoplay*/
<script>
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slide");
  if (!slider || !slides.length) return;

  let index = 0;
  let auto = setInterval(autoSlide, 4000);

  function autoSlide() {
    index = (index + 1) % slides.length;
    slider.scrollTo({ left: slides[index].offsetLeft, behavior: "smooth" });
  }

  /* Pause on hover / touch for accessibility */
  slider.addEventListener("mouseenter", () => clearInterval(auto));
  slider.addEventListener("mouseleave", () => auto = setInterval(autoSlide, 4000));
  slider.addEventListener("touchstart", () => clearInterval(auto), {passive:true});
  slider.addEventListener("touchend", () => auto = setInterval(autoSlide, 4000), {passive:true});
});

<script>
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".menu-toggle");
  const nav = document.getElementById("main-menu-list");
  if (!btn || !nav) return;

  btn.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("active");
  });
});
</script>


</script>

