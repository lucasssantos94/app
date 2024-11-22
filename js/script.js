const form = document.forms.crom;
let { moto, fp, cabo, result, troca } = form;

let risco = document.getElementById("risco");
let semRisco = document.getElementById("semRisco");
let outraRede = document.getElementById("outraRede");
let btnCopy = document.getElementById("copy");

// função para controlar o display dos inputs
function displayInput() {
  // remove o atributo required do input cabo
  if (fp.value != 'fp001' || fp.value != 'fp002') {
    cabo.removeAttribute("required");
  }

  if (fp.value != 'troca de ordem') {
    troca.style.display = 'none'
  }
  switch (fp.value) {
    case "fp001":
      risco.classList.toggle("inputSelected");
      semRisco.classList.remove("inputSelected");
      outraRede.classList.remove("inputSelected");
      cabo.setAttribute("required", "required");
      cabo.style.display = "inline";
      cabo.value = "";
      break;

    case "fp002":
      semRisco.classList.toggle("inputSelected");
      risco.classList.remove("inputSelected");
      outraRede.classList.remove("inputSelected");
      cabo.setAttribute("required", "required");
      cabo.style.display = "inline";
      cabo.value = "";
      break;

    case "fp003":
      outraRede.classList.toggle("inputSelected");
      semRisco.classList.remove("inputSelected");
      risco.classList.remove("inputSelected");
      cabo.setAttribute("required", "required");
      cabo.style.display = "inline";
      cabo.value = "";
      break;

    case "fp004":
      cabo.style.display = "none";
      cabo.value = "";

      break;

    case "religação":
      cabo.style.display = "none";
      cabo.value = "";
      break;

    case "defeito interno":
      cabo.style.display = "none";
      cabo.value = "";
      break;

    case "area de risco":
      cabo.style.display = "none";
      cabo.value = "";
      break;

    case "estrada de terra":
      cabo.removeAttribute("required");
      cabo.style.display = "none";
      cabo.value = "";
      break;

    case "troca de ordem":
      cabo.style.display = "none";
      cabo.value = "";
      troca.style.display = 'inline-block';
      troca.setAttribute("required", "required");
      cabo.removeAttribute("required");


      break;
  }

}

// função para gerar o texto
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const riskyDealings = {
    "poste abalroado": `#${fp.value} ${moto.value} informa ${cabo.value} com risco, moto isolando necessário equipe para reparo.`,

  }

  switch (fp.value) {
    case "fp001":
      if (cabo.value === "poste abalroado") {
        result.value = riskyDealings[cabo.value]
        break;
      } else if (cabo.value === "cruzeta danificada") {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} com risco, moto isolando necessário equipe para reparo.`;
        break;
      } else if (cabo.value === "capa do secundario") {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} partida no solo, moto isolando necessário equipe para reparo.`;
        break;
      } else {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} partido no solo, moto isolando necessário equipe para reparo.`;
        break;
      }

    case "fp002":
      if (cabo.value === "ramal barrigado") {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} sem risco no momento necessário equipe para reparo.`;
        break;
      } else if (cabo.value === "ramal em curto") {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} sem risco no momento necessário equipe para reparo.`;
        break;
      }
      else if (cabo.value === "galhos sobre a rede") {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} sem risco no momento necessário equipe de poda`;
        break;
      }
      else if (cabo.value === "capa do secundario") {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} partida no alto sem risco no momento necessário equipe para remoção`;
        break;
      } else if (cabo.value === "rede em curto") {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} sem risco no momento necessário equipe para reparo.`;
        break;
      } else if (cabo.value === "medidor em curto") {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} sem risco no momento necessário equipe para reparo.`;
        break;
      } else if (cabo.value === "bf atuada") {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} sem risco no momento necessário equipe para reparo.`;
        break;
      } else if (cabo.value === "poste abalroado sem risco") {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} de queda no momento, necessário equipe para reparo.`;
        break;
      } else if (cabo.value === "cruzeta danificada sem risco") {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} no momento necessário equipe para reparo.`;
        break;
      } else {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} partido no alto, sem risco no momento necessário equipe para reparo.`;
        break;
      }

    case "fp003":
      if (cabo.value === "ip") {
        result.value = `#${fp.value} ${moto.value} informa ${cabo.value} partido no alto, cliente com luz e orientado a entrar em contato com prefeitura.`;
      } else {
        result.value = `#${fp.value} ${moto.value} informa fio de ${cabo.value} cliente com luz e orientado.`;
      }
      break;

    case "fp004":
      result.value = `#${fp.value} ${moto.value} informa não há fio partido, encontrado em ordem.`;
      break;

    case "religação":
      result.value = `#fp004 ${moto.value} informa não há fio partido,cliente solicita religação do fornecimento orientado a entrar em contato com comercial.`;
      break;

    case "defeito interno":
      result.value = `#fp004 ${moto.value} informa cliente com defeito interno orientado a contratar eletricista particular, encontrado em ordem.`;
      break;

    case "area de risco":
      result.value = `${moto.value} informa ${fp.value} sem possibilidade de prosseguir, necessário equipe para averiguação.`;
      break;

    case "estrada de terra":
      result.value = `${moto.value} informa estrada de terra sem possibilidade de prosseguir, necessário equipe para averiguação.`;
      break;
    case "troca de ordem":
      result.value = `${moto.value} se deslocou para ordem de prioridade ${troca.value}`;
      break;
  }

  // exibe o botão copiar após o texto ser gerado
  btnCopy.style.display = "inline-block";
});

// função para copiar o texto
btnCopy.addEventListener("click", (e) => {
  e.preventDefault();
  result.select();
  document.execCommand("copy");
  myFunction();
});

// função para executar popup do texto copiado
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  setTimeout(() => {
    popup.classList.toggle("show");
  }, 2000);
}
