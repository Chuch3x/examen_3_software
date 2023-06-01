import { calcular_cambio, calcular_monedas } from "./caldulador_monto";

describe("Calcular", () => {
  it("deberia mostrar el cambio de la venta", () => {
    expect(calcular_cambio(20, 30)).toEqual(10);
  });
  it("deberia mostrar la cantidad de monedas a entregar de cambio", () => {
    expect(calcular_monedas(10)).toEqual([5,5]);
  });
  it("deberia mostrar 1 como la cantidad de monedas a entregar de cambio", () => {
    expect(calcular_monedas(1)).toEqual([1]);
  });
  it("deberia mostrar 1,1 como la cantidad de monedas a entregar de cambio", () => {
    expect(calcular_monedas(2)).toEqual([1,1]);
  });
});
