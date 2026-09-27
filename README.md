# Semana 08: View, Text e Image + Flexbox

### Programación Móvil · 3.° Bachillerato Técnico (2026–2027)

Armas tus primeros componentes visuales con los primitivos `View`, `Text` e `Image`, los estilizas con `StyleSheet.create` y ordenas el layout con Flexbox (`flexDirection`, `justifyContent`, `alignItems`, `gap`).

## Material de la semana

- **[Abrir material interactivo /play/#08](https://uets-pm-portal.vgmiltonisaac.workers.dev/play/#08)**

## Retos

```text
Reto 0801: View + Text + Image y StyleSheet  (src/0801_view_text_image.tsx)
Reto 0802: Layout con Flexbox                (src/0802_flexbox_layout.tsx)
```

## Comandos

```bash
npm install
npm test          # pruebas node --test de los resolutores puros de estilo
npm run check     # File Guard: primitivos y flexbox presentes en los .tsx
npm start         # expo start --tunnel (escanea el QR con Expo Go)
```

Necesitas Node 20+ LTS, Git y la app **Expo Go** en tu teléfono.

## Cómo se evalúa (y por qué es honesto)

Este taller no incluye un renderer de React Native. Para que tus pruebas corran en cualquier máquina y en Codespaces sin emulador, la lógica de estilos vive en resolutores puros:

- `src/0801_estilos.js` -> `resolverEstiloCard()` / `resolverTextoCard()`
- `src/0802_layout.js` -> `resolverEstiloFila()`

`npm test` prueba esos resolutores con `node --test`. Como esos tests no pueden "renderizar" el componente, la parte visual de los `.tsx` se cubre de dos formas:

1. **File Guard** (`npm run check`): verifica que `src/0801_view_text_image.tsx` usa `<View>`, `<Text>`, `<Image>` y `StyleSheet.create`, que `src/0802_flexbox_layout.tsx` usa `flexDirection`, `justifyContent`, `alignItems` y `gap`, y que no queden textos `TODO:`.
2. **Expo Go** (`npm start`): la validación real del layout es verlo en tu teléfono.

## Entrega en Pull Request

1. Haz **Fork**, clona tu fork e instala dependencias.
2. Crea tu rama `entrega/nombre-apellido`, resuelve los TODO y haz commits semánticos.
3. Verifica con `npm test` y `npm run check`.
4. Abre el PR contra `UETS-Programacion-Movil/08-est-view-text-image-pm:main` y pega el enlace de tu video.

*Módulo Formativo: Aplicaciones Web y Móviles (Programación Móvil) — UETS 2026–2027.*
