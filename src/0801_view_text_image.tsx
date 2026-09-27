// ============================================================================
// RETO 0801: View + Text + Image con StyleSheet.create
// Semana 08 - Programacion Movil (3.° BGU) - UETS
//
// INSTRUCCIONES:
// 1. Completa los datos de TARJETA (titulo, descripcion, imagen) y borra los
//    textos TODO de ejemplo.
// 2. Ajusta la hoja de estilos `estilos` (padding, borderWidth, borderRadius, color).
// 3. Verifica la estructura:  npm run check
// 4. Mira tu pantalla:        npm start  (escanea el QR con Expo Go)
//
// La paleta de color la entrega el resolutor puro src/0801_estilos.js.
// ============================================================================
import { Image, StyleSheet, Text, View } from "react-native";
import { resolverEstiloCard, resolverTextoCard } from "./0801_estilos.js";

// TODO: personaliza tu tarjeta con tus propios datos.
const TARJETA = {
  titulo: "TODO: TU TITULO",
  descripcion: "TODO: TU DESCRIPCION",
  imagen: "TODO: URL DE TU IMAGEN",
};

export default function TarjetaEstudiante() {
  return (
    <View style={estilos.pantalla}>
      <View style={estilos.tarjeta}>
        <Image
          accessibilityLabel="Imagen de la tarjeta"
          style={estilos.imagen}
          source={{ uri: TARJETA.imagen }}
        />
        <Text style={estilos.titulo}>{TARJETA.titulo}</Text>
        <Text style={estilos.descripcion}>{TARJETA.descripcion}</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    padding: 16,
  },
  tarjeta: {
    ...resolverEstiloCard("info"),
    padding: 16,
    borderWidth: 2,
    borderRadius: 12,
  },
  imagen: {
    width: "100%",
    height: 160,
    borderRadius: 8,
  },
  titulo: {
    ...resolverTextoCard("info"),
    marginTop: 12,
    fontSize: 20,
    fontWeight: "700",
  },
  descripcion: {
    marginTop: 4,
    fontSize: 14,
    color: "#475569",
  },
});
