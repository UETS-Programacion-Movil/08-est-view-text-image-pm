#!/usr/bin/env node
// File Guard - Semana 08 (View, Text, Image + Flexbox).
// Uso: node scripts/check-componentes.mjs   (tambien: npm run check)
//
// No hay renderer de React Native en el pipeline, asi que este guard revisa
// el TEXTO de los componentes .tsx: que usen los primitivos y las propiedades
// flexbox exigidas por la semana, y que no queden textos placeholder "TODO:".
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
let faltas = 0;

function ok(condicion, etiqueta) {
  if (condicion) {
    console.log(`  [OK] ${etiqueta}`);
  } else {
    console.log(`  [FALTA] ${etiqueta}`);
    faltas++;
  }
}

function leer(relativo) {
  const abs = path.join(root, relativo);
  return existsSync(abs) ? readFileSync(abs, "utf-8") : null;
}

function revisarComponente(relativo, tokens) {
  const codigo = leer(relativo);
  ok(codigo !== null, `existe ${relativo}`);
  if (codigo === null) {
    return;
  }
  for (const token of tokens) {
    ok(codigo.includes(token), `${relativo} usa ${token}`);
  }
  ok(!/"TODO:/.test(codigo), `${relativo} sin textos placeholder "TODO:"`);
}

console.log("== Semana 08 · File Guard de componentes ==");

revisarComponente("src/0801_view_text_image.tsx", [
  "<View",
  "<Text",
  "<Image",
  "StyleSheet.create",
  "resolverEstiloCard",
  "padding",
  "borderWidth",
  "borderRadius",
  "color",
]);

revisarComponente("src/0802_flexbox_layout.tsx", [
  "<View",
  "<Text",
  "StyleSheet.create",
  "resolverEstiloFila",
  "flexDirection",
  "justifyContent",
  "alignItems",
  "gap",
]);

console.log("------------------------------------------");
if (faltas === 0) {
  console.log("Componentes completos. Siguiente paso: npm test");
  process.exit(0);
} else {
  console.log(`Te faltan ${faltas} verificacion(es). Completa los TODO y vuelve a ejecutar.`);
  process.exit(1);
}
