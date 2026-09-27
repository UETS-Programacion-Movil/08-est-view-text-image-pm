// ============================================================================
// RETO 0802: Layout con Flexbox (flexDirection, justifyContent, alignItems, gap)
// Semana 08 - Programacion Movil (3.° BGU) - UETS
//
// INSTRUCCIONES:
// 1. Cambia el encabezado TODO por el tuyo.
// 2. Observa la columna: ahi esta el flexbox escrito a mano.
// 3. La fila usa el resolutor puro src/0802_layout.js.
// 4. Verifica:  npm run check      Mira tu pantalla:  npm start
// ============================================================================
import { StyleSheet, Text, View } from "react-native";
import { resolverEstiloFila } from "./0802_layout.js";

// TODO: personaliza el encabezado de tu layout.
const ENCABEZADO = "TODO: TU ENCABEZADO";

export default function LayoutFlex() {
  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.encabezado}>{ENCABEZADO}</Text>

      {/* Fila: el reparto lo calcula el resolutor puro. */}
      <View style={estilos.fila}>
        <View style={estilos.caja}>
          <Text style={estilos.numero}>1</Text>
        </View>
        <View style={estilos.caja}>
          <Text style={estilos.numero}>2</Text>
        </View>
        <View style={estilos.caja}>
          <Text style={estilos.numero}>3</Text>
        </View>
      </View>

      {/* Columna: flexbox escrito a mano en StyleSheet.create. */}
      <View style={estilos.columna}>
        <Text style={estilos.textoColumna}>Arriba</Text>
        <Text style={estilos.textoColumna}>Centro</Text>
        <Text style={estilos.textoColumna}>Abajo</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    padding: 16,
    gap: 24,
  },
  encabezado: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
  },
  fila: {
    ...resolverEstiloFila("row", "between"),
  },
  columna: {
    height: 220,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: "#CBD5E1",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },
  caja: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: "#1D4ED8",
    justifyContent: "center",
    alignItems: "center",
  },
  numero: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },
  textoColumna: {
    color: "#334155",
    fontSize: 16,
  },
});
