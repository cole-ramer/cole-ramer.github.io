// --- Live clock (Central time — tweak if you like) ---
(function clock() {
  const el = document.getElementById("clock");
  if (!el) return;
  const tick = () => {
    const now = new Date();
    const opts = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Chicago",
    };
    el.textContent = new Intl.DateTimeFormat("en-GB", opts).format(now) + " CT";
  };
  tick();
  setInterval(tick, 30_000);
})();

// --- Year in footer ---
(function year() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

// --- Staggered reveal via IntersectionObserver ---
(function reveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((e) => io.observe(e));
})();

// --- Soft cursor accent (desktop only) ---
(function cursor() {
  const dot = document.getElementById("cursor-dot");
  if (!dot || window.matchMedia("(pointer: coarse)").matches) return;
  let x = 0, y = 0, tx = 0, ty = 0;
  window.addEventListener("mousemove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
  });
  const loop = () => {
    x += (tx - x) * 0.15;
    y += (ty - y) * 0.15;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  };
  loop();

  // Grow on interactive hover
  document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      dot.style.width = "42px";
      dot.style.height = "42px";
      dot.style.opacity = "0.35";
    });
    el.addEventListener("mouseleave", () => {
      dot.style.width = "24px";
      dot.style.height = "24px";
      dot.style.opacity = "0.5";
    });
  });
})();
