const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

ScrollReveal({ reset: true });
ScrollReveal().reveal(".sobre-texto", { delay: 300 });
ScrollReveal().reveal(".myimg", { delay: 300 });
ScrollReveal().reveal(".projetos-box", { delay: 300 });
ScrollReveal().reveal(".conhecimentos-wrapper", { delay: 300 });
ScrollReveal().reveal(".introducao", { delay: 300 });

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 100 * i);
  });
}

const build = document.querySelector("#build");
typeWriter(build);
