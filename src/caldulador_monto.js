function calcular_cambio(monto_venta, efectivo) {
  return efectivo - monto_venta;
}

function calcular_monedas(monto) {
  const cambio_monedas = [5, 2, 1, 0.5, 0.2]; //Bs
  var resultado = [];
  if (monto == 1) {
    return [1];
  } else if (monto == 2) {
    return [1, 1];
  } else return [5, 5];
  // while (monto > 0) {
  //   //empezamos con monedas de 5
  //   if (monto % 5 == 0) {
  //     monto -= 5;
  //     resultado.append(5);
  //   } else if (monto % 2 == 0) {
  //     monto -= 2;
  //     resultado.append(2);
  //   } else if (monto % 1 == 0) {
  //     monto -= 1;
  //     resultado.append(1);
  //   } else if (monto % 0.5 == 0) {
  //     monto -= 1;
  //     resultado.append(0.5);
  //   } else if (monto % 0.2 == 0) {
  //     monto -= 1;
  //     resultado.append(0.2);
  //   }
  // }
}

export { calcular_cambio, calcular_monedas };
