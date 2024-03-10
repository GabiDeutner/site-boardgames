const navbar = document.querySelector('.navbar');
const icon = document.querySelector('.menu-icon');


icon.addEventListener('click', function(){
    navbar.classList.toggle('show');
}
);

// carrossel
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".destaque-jogo");
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    // Inicialização
    showSlide(currentSlide);
  
    // Adicionando eventos aos botões de navegação
    document.getElementById("prevBtn").addEventListener("click", prevSlide);
    document.getElementById("nextBtn").addEventListener("click", nextSlide);
  });