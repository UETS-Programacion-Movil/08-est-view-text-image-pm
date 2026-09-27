// ============================================================================
// RETO 0802 - Resolutor puro de layout flex (Semana 08).
// Programacion Movil - 3.° Bachillerato Tecnico - UETS
//
// JavaScript puro (sin JSX) para poder probarlo con `node --test` sin renderer.
// El componente src/0802_flexbox_layout.tsx lo importa para armar su fila.
//
// Verifica con:  npm run test:0802
// ============================================================================

// Mapa de repartos legibles -> valores de justifyContent de Flexbox.
export const REPARTOS = {
  start: "flex-start",
  center: "center",
  between: "space-between",
  around: "space-around",
  end: "flex-end",
};

// Direcciones validas de flexDirection.
export const DIRECCIONES = ["row", "row-reverse", "column", "column-reverse"];

/**
 * TODO (Reto 0802): implementa el resolutor de una fila flex.
 *
 * Reglas:
 *  - Uso: resolverEstiloFila(direccion = "row", reparto = "between", separacion = 12)
 *  - Si `direccion` no esta en DIRECCIONES, lanza un Error con el mensaje exacto:
 *      `Direccion no soportada: ${direccion}`
 *  - Si `reparto` no existe en REPARTOS, lanza un Error con el mensaje exacto:
 *      `Reparto no soportado: ${reparto}`
 *  - Si todo es valido, retorna:
 *      { flexDirection: direccion, justifyContent: REPARTOS[reparto], alignItems: "center", gap: separacion }
 */
export function resolverEstiloFila(direccion = "row", reparto = "between", separacion = 12) {
  // TODO: reemplaza este stub por tu implementacion.
  return {};
}
