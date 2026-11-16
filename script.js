const gridLojas = document.getElementById("grid-lojas");
console.log(gridLojas);

async function carregarLojas() {
  const json = await fetch("./data.json");
  const data = await json.json();
  console.log(data);

  data.lojas.forEach((element) => {
    gridLojas.innerHTML += `<div class="loja-element">
          <img src=${element.logo} alt="" />
          <button>Entre em contato pelo WhatsApp</button>
        </div>`;
  });
}

carregarLojas();
