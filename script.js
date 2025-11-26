function calcular() {
  const consumo = parseFloat(document.getElementById('consumo').value);
  const custo = parseFloat(document.getElementById('custo').value);

  if (!consumo || !custo) {
    document.getElementById('resultado').innerText = 'Preencha todos os campos!';
    return;
  }

  const economia = consumo * custo * 0.6; // estimativa de 60% de economia
  document.getElementById('resultado').innerText = `Economia estimada: R$ ${economia.toFixed(2)} por mês.`;
}

document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  function avancarSlide() {
    index++;
    if (index >= totalSlides) index = 0;
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  setInterval(avancarSlide, 6000);
});
