const date = new Date();
let period = document.querySelector(".period");
let day = document.querySelector(".day");
const form = document.querySelector("#employee-form");

const addButton = document.getElementById("add-button");
const employeeInput = document.getElementById("employee");
const tableBody = document.querySelector("#schedule-table tbody");
const employeeForm = document.querySelector("#employee-form");

day.innerHTML = `${new Intl.DateTimeFormat("pt-br").format(date)}`;

if (date.getHours() < 12) {
  period.innerHTML = "MANHÃ";
} else {
  period.innerHTML = "TARDE";
}

function insertData() {
  const employeeName = employeeInput.value.toUpperCase();

  if (employeeName) {
    const newRow = document.createElement("tr");

    fetch("../motos.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let dadosMotos = data;

        const { codigo, nome, br, base, ativacao, desativacao } =
          dadosMotos[employeeName];
        newRow.innerHTML = `
                    <td contenteditable="true">${codigo}</td>
                    <td contenteditable="true">${nome}</td>
                    <td contenteditable="true">${br}</td>
                    <td contenteditable="true">${base}</td>
                    <td contenteditable="true">${ativacao}</td>
                    <td contenteditable="true">${desativacao}</td>
                `;
        tableBody.appendChild(newRow);
        employeeInput.value = ""; // Limpar o campo de entrada
      });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  addButton.addEventListener("click", insertData);

  employeeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    insertData();
  });
});
