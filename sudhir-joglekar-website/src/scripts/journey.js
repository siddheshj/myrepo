const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const timeline = document.querySelector("[data-timeline]");
const progress = document.querySelector("[data-progress]");

if (timeline && progress) {
  const update = () => {
    const rect = timeline.getBoundingClientRect();
    const start = window.scrollY + rect.top - window.innerHeight * 0.65;
    const end = window.scrollY + rect.bottom - window.innerHeight * 0.25;
    const span = Math.max(end - start, 1);
    const value = reduce ? 1 : Math.min(1, Math.max(0, (window.scrollY - start) / span));
    progress.style.height = `${value * 100}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}
