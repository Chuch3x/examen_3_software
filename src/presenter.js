import calcular_cambio from "./caldulador_monto";

const monto = document.querySelector("#monto_venta");
const efectivo = document.querySelector("#efectivo_venta");
const form = document.querySelector("#venta_form");
const div = document.querySelector("#resultado_div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const monto_venta = Number.parseInt(monto.value);
  const efectivo_venta = Number.parseInt(efectivo.value);

  div.innerHTML = "<p>" + "Cambio: " + calcular_cambio(monto_venta, efectivo_venta) + " Bs."+"</p>";
});
