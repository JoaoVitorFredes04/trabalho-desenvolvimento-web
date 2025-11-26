//calculadora

function calcular() {
  const consumo = parseFloat(document.getElementById('consumo').value);
  const custo = parseFloat(document.getElementById('custo').value);

  if (!consumo || !custo) {
    document.getElementById('resultado').innerText = 'Preencha todos os campos!';
    return;
  }

  const economia = consumo * custo * 0.69;
  document.getElementById('resultado').innerText = `Economia estimada: R$ ${economia.toFixed(2)} por mês.`;
}

//slides

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

//carrinho

let cart = [];

const updateCartUI = () => {
  const cartList = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  cartList.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name}</span>
      <button onclick="removeItem(${index})" style="
        background:red;border:none;color:white;padding:5px 8px;
        border-radius:6px;cursor:pointer;font-weight:bold;
      ">X</button>
    `;
    cartList.appendChild(li);
  });

  totalEl.innerText = total.toFixed(2).replace(".", ",");
};

const addToCart = (name, price) => {
  cart.push({ name, price: parseFloat(price) });
  updateCartUI();
};

const removeItem = (index) => {
  cart.splice(index, 1);
  updateCartUI();
};

// adiciona eventos nos botões
document.querySelectorAll(".buyBtn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".productCard");
    const name = card.getAttribute("data-name");
    const price = card.getAttribute("data-price");
    addToCart(name, price);
  });
});

// finalizar compra
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio! 😢");
    return;
  }
  alert("Compra finalizada com sucesso! ⚡💚");
  cart = [];
  updateCartUI();
});

