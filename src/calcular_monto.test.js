import calcular_cambio from "./caldulador_monto.js";

describe("Calcular", () => {
  it("deberia mostrar el cambio de la venta", () => {
    expect(calcular_cambio(20, 30)).toEqual(10);
  });
  it("deberia mostrar la cantidad de monedas a entregar de cambio", () => {
    expect(calculacalcular_monedas(13)).toEqual([5,5,2,1]);
  });
});
