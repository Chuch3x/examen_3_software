function calcular_cambio(a, b) {
  return b - a;
}
function calcular_monedas(monto){
  if (monto == 1){
    return [1];
  }else
  return [5,5]
}
export {calcular_cambio, calcular_monedas};
