var hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener("click", function() {
document.querySelector('.sidebar').classList.toggle('show-menu');
hamburguer.classList.toggle('show-menu')

})