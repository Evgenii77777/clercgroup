const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".text--right, .text--left");
  elements.forEach((element) => observer.observe(element));
});
