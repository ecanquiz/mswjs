# Limitaciones

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://mswjs.io/docs/limitations)
:::

## Limitaciones del navegador

Esta biblioteca utiliza la API Service Worker para interceptar solicitudes en el navegador. Cualquier limitación que puedan tener los navegadores al implementar o ejecutar dicha API se convierte automáticamente en limitación de la biblioteca Mock Service Worker. No podemos abordar estos comportamientos ya que están presentes en el navegador y no pueden evitarse mediante JavaScript.

## Firefox no emite el evento "fetch" en `XMLHttpRequest`

Mock Service Worker se posiciona como una herramienta de desarrollo, lo que significa que no podemos garantizar el 100% de compatibilidad con todos los navegadores modernos. Al final, cada navegador puede tener sus discrepancias en cómo se implementa la API de Service Worker, que tampoco podemos tener en cuenta.

