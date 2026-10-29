const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const links = document.querySelector(".links");
const cartCount = document.querySelector(".cart b");


/* Ouverture du menu hamburger */
burger.addEventListener("click", () => {
    links.classList.toggle("open");
});

/* Fermeture du menu hamburger */

links.addEventListener("click", () => {
    links.classList.remove("open");
});


document.querySelectorAll(".add").forEach(btn => {
    btn.addEventListener("click", () => {
        const count = Number(cartCount.textContent);
        cartCount.textContent = count + 1;
        btn.textContent = "Added";
        btn.classList.add("done");
    });
});

/* Quand l'email est tapé et validé -> "Consultez votre boîte de réception" */
const form = document.querySelector(".subscribe");

form.addEventListener("submit", e => {
    e.preventDefault();
    form.innerHTML = "<p>Thanks ! Check your inbox."
})



/* Reveal */
const sections = document.querySelectorAll("section, footer");

function reveal() {
    sections.forEach(s => {
        const top = s.getBoundingClientRect().top;
        if (top < innerHeight - 120) s.classList.add("show");
    });
    header.classList.toggle("scrolled", scrollY > 40);
}

sections.forEach(s => s.classList.add("reveal"));
window.addEventListener("scroll", reveal);
reveal();

/* Détection du bas de page pour les remerciements au concepteur */
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;
  const footer = document.getElementById('thank-you-footer');

  if (scrollPosition >= pageHeight - 50) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
});
