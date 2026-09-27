// RETO 0802: pruebas del resolutor puro de layout flex.
// Uso: node --test tests/0802_layout.test.mjs  (o: npm run test:0802)
// No requiere renderer de React Native: prueba JavaScript puro.
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { REPARTOS, resolverEstiloFila } from "../src/0802_layout.js";

describe("RETO 0802 - Resolutor de layout flex (puro)", () => {
  it("declara los repartos soportados", () => {
    assert.equal(REPARTOS.between, "space-between");
    assert.equal(REPARTOS.center, "center");
    assert.equal(REPARTOS.end, "flex-end");
  });

  it("usa fila y space-between por defecto", () => {
    assert.deepEqual(resolverEstiloFila(), {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
    });
  });

  it("respeta direccion, reparto y separacion", () => {
    const columna = resolverEstiloFila("column", "center", 20);
    assert.equal(columna.flexDirection, "column");
    assert.equal(columna.justifyContent, "center");
    assert.equal(columna.alignItems, "center");
    assert.equal(columna.gap, 20);
  });

  it("lanza Error con un reparto desconocido", () => {
    assert.throws(
      () => resolverEstiloFila("row", "arriba"),
      /Reparto no soportado: arriba/
    );
  });

  it("lanza Error con una direccion desconocida", () => {
    assert.throws(
      () => resolverEstiloFila("diagonal"),
      /Direccion no soportada: diagonal/
    );
  });
});
