import calcular_cambio from "./caldulador_monto.js";

describe("Calcular", () => {
  it("deberia mostrar el cambio de la venta", () => {
    expect(calcular_cambio(20, 30)).toEqual(10);
  });
});
