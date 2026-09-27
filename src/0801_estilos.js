// ============================================================================
// RETO 0801 - Resolutor puro de estilos de tarjeta (Semana 08).
// Programacion Movil - 3.° Bachillerato Tecnico - UETS
//
// Este archivo es JavaScript puro (sin JSX) a proposito: asi `node --test`
// puede probarlo en cualquier maquina, sin renderer de React Native. El
// componente src/0801_view_text_image.tsx lo importa para calcular la paleta
// de color de la tarjeta.
//
// Verifica con:  npm run test:0801
// ============================================================================

export const VARIANTES_CARD = ["info", "success", "warning"];

// Paleta de referencia: fondo, borde y color de texto de cada variante.
const PALETAS = {
  info: { fondo: "#EFF6FF", borde: "#1D4ED8", texto: "#1E3A8A" },
  success: { fondo: "#ECFDF5", borde: "#047857", texto: "#065F46" },
  warning: { fondo: "#FFFBEB", borde: "#B45309", texto: "#78350F" },
};

/**
 * TODO (Reto 0801): implementa el resolutor de estilo de la tarjeta.
 *
 * Reglas:
 *  - Recibe una `variante` ("info" | "success" | "warning"); sin argumentos usa "info".
 *  - Si la variante existe, retorna { backgroundColor, borderColor } tomando
 *    `fondo` y `borde` de PALETAS.
 *  - Si la variante no existe, lanza un Error con el mensaje exacto:
 *      `Variante de card no soportada: ${variante}`
 */
export function resolverEstiloCard(variante = "info") {
  // TODO: reemplaza este stub por tu implementacion.
  return {};
}

/**
 * TODO (Reto 0801): implementa el resolutor del color de texto de la tarjeta.
 *
 * Reglas:
 *  - Igual que resolverEstiloCard, pero retorna { color } usando `texto` de PALETAS.
 *  - Sin argumentos usa "info"; con una variante desconocida lanza el mismo Error.
 */
export function resolverTextoCard(variante = "info") {
  // TODO: reemplaza este stub por tu implementacion.
  return {};
}
