const gridLojas = document.getElementById("grid-lojas");
const iframe = document.getElementById("mapa");
const infoEvento = document.getElementById("info-evento");

async function carregarLojas() {
  const json = await fetch("./data.json");
  const data = await json.json();

  data.lojas.forEach((element) => {
    gridLojas.innerHTML += `<div class="loja-element">
          <img src=${element.logo} alt="" />
          <div class="produto-meta">
          <h3>${element.nome}</h3>
          <p>${element.descricao}</p>
          <div class="botoes-meta">
          <button class="whatsapp">WhatsApp da loja</button>
          ${element.redes_sociais.instagram ? "<button class='instagram'>instagram da loja</button>" : ""}
          ${element.redes_sociais.facebook ? "<button class='facebook'>facebook da loja</button>" : ""}
          ${element.redes_sociais.tiktok ? "<button class='tiktok'>tiktok da loja</button>" : ""}
          </div>
          </div>
        </div>`;
  });
}

async function carregarEventos() {
  const json = await fetch("./data.json");
  const data = await json.json();

  console.log(data.evento.endereco.split(" ").join("+"));

  iframe.innerHTML = `
          <p>${data.evento.descricao}</p>
          <iframe
            src= 'https://maps.google.com/maps?q=${data.evento.endereco},+Bel%C3%A9m,+PA&output=embed'
            width="100%"
            height="350px"
            allowfullscreen=""
            loading="lazy"
          >
          </iframe>
  `;
}

carregarLojas();
carregarEventos();
