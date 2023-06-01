import sumar from "./caldulador_monto";

const monto = document.querySelector("#monto_venta");
const form = document.querySelector("#venta_form");
const div = document.querySelector("#resultado_div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const monto_venta = Number.parseInt(monto.value);
  // const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + monto_venta + "</p>";
});
