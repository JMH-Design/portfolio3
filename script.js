document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("hero-title");
  if (!title) return;

  const text = title.textContent; 
  title.textContent = "";

  const tokens = text.split(/(\s+)/);

  const line = document.createElement("span");
  line.classList.add("split-line");

  tokens.forEach((token) => {
    if (!token) return;

    if (/^\s+$/.test(token)) {
      line.appendChild(document.createTextNode(token));
    } else {
      const wordSpan = document.createElement("span");
      wordSpan.classList.add("split-word");
      wordSpan.textContent = token;
      line.appendChild(wordSpan);
    }
  });

  title.appendChild(line);

  if (window.gsap) {
    // Animate hero title words
    gsap.from(".split-word", {
      yPercent: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1.0,
      ease: "power3.out",
      delay: 0.2,
    });

    // Animate banner video/image in on page load
    const bannerMedia = document.querySelector(".banner-image");
    if (bannerMedia) {
      gsap.from(bannerMedia, {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: "power3.out",
        delay: 1.0,
      });
    }
  }
});
