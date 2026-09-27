// RETO 0801: pruebas del resolutor puro de estilos.
// Uso: node --test tests/0801_estilos.test.mjs  (o: npm run test:0801)
// No requiere renderer de React Native: prueba JavaScript puro.
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  VARIANTES_CARD,
  resolverEstiloCard,
  resolverTextoCard,
} from "../src/0801_estilos.js";

describe("RETO 0801 - Resolutor de estilo de tarjeta (puro)", () => {
  it("declara las variantes soportadas", () => {
    assert.deepEqual(VARIANTES_CARD, ["info", "success", "warning"]);
  });

  it("usa la variante info por defecto", () => {
    assert.deepEqual(resolverEstiloCard(), {
      backgroundColor: "#EFF6FF",
      borderColor: "#1D4ED8",
    });
  });

  it("resuelve fondo y borde por variante", () => {
    assert.equal(resolverEstiloCard("info").backgroundColor, "#EFF6FF");
    assert.equal(resolverEstiloCard("info").borderColor, "#1D4ED8");
    assert.equal(resolverEstiloCard("success").backgroundColor, "#ECFDF5");
    assert.equal(resolverEstiloCard("success").borderColor, "#047857");
    assert.equal(resolverEstiloCard("warning").backgroundColor, "#FFFBEB");
    assert.equal(resolverEstiloCard("warning").borderColor, "#B45309");
  });

  it("lanza Error con una variante desconocida", () => {
    assert.throws(
      () => resolverEstiloCard("peligro"),
      /Variante de card no soportada: peligro/
    );
  });

  it("resolverTextoCard entrega el color de texto de la variante", () => {
    assert.equal(resolverTextoCard("info").color, "#1E3A8A");
    assert.equal(resolverTextoCard("success").color, "#065F46");
    assert.equal(resolverTextoCard("warning").color, "#78350F");
    assert.throws(
      () => resolverTextoCard("x"),
      /Variante de card no soportada: x/
    );
  });
});
