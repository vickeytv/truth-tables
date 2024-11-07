let A = false;
let B = false;

const variableStatus = document.querySelector("#trueorfalse");

function updateVariableDisplay() {
  variableStatus.innerHTML = `A: ${A}<br>B: ${B}`;
}

document.querySelector("#update-numbers").addEventListener("click", () => {
  let aValue = document.querySelector("#a-number").value;
  let bValue = document.querySelector("#b-number").value;
  
  if ((aValue === "0" || aValue === "1") && (bValue === "0" || bValue === "1")) {
    A = aValue === "1";
    B = bValue === "1";
    updateVariableDisplay();
  }
});

const operationResult = document.querySelector("#result");
function performOperation(operation) {
  let result;

  if (operation === "AND") {
    result = "A AND B is " + (A && B);
  } else if (operation === "OR") {
    result = "A OR B is " + (A || B);
  } else if (operation === "NOT A") {
    result = "NOT A is " + (!A);
  } else if (operation === "NOT B") {
    result = "NOT B is " + (!B);
  } else if (operation === "a-true") {
    A = true;
    updateVariableDisplay();
    return;
  } else if (operation === "a-false") {
    A = false;
    updateVariableDisplay();
    return;
  } else if (operation === "b-true") {
    B = true;
    updateVariableDisplay();
    return;
  } else if (operation === "b-false") {
    B = false;
    updateVariableDisplay();
    return;
  }
  
  operationResult.textContent = result;
}

const truthTableBody = document.querySelector("#truth-table-body");
document.querySelector("#generate-row").addEventListener("click", () => {
  const row = document.createElement("tr");
  
  const andAB = A && B;
  const orAB = A || B;
  const andANotB = A && !B;
  const orANotB = A || !B;
  const AorBandnotAandB = (A || B) && !(A && B);
  const AorBandorAandB = (A && B) || !(A || B);
  
  row.innerHTML = `
    <td>${A}</td>
    <td>${B}</td>
    <td>${andAB}</td>
    <td>${orAB}</td>
    <td>${andANotB}</td>
    <td>${orANotB}</td>
    <td>${AorBandnotAandB}</td>
    <td>${AorBandorAandB}</td>
  `;
  truthTableBody.appendChild(row);
});
