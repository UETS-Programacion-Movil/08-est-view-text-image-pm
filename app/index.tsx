// Pantalla raiz de la Semana 08: monta los dos retos para verlos en Expo Go.
// No necesitas editar este archivo: tu trabajo vive en src/.
import { ScrollView, StyleSheet } from "react-native";
import TarjetaEstudiante from "../src/0801_view_text_image";
import LayoutFlex from "../src/0802_flexbox_layout";

export default function App() {
  return (
    <ScrollView contentContainerStyle={estilos.contenido}>
      <TarjetaEstudiante />
      <LayoutFlex />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenido: {
    gap: 24,
    paddingVertical: 32,
  },
});
