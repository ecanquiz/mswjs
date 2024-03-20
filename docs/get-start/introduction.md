# Introducción

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://mswjs.io/docs/)
:::


¡Bienvenido a la documentación del Trabajador de Servicio Simulado!

Mock Service Worker (MSW) es una biblioteca simulada de API para navegador y Node.js. Con MSW, puede interceptar solicitudes salientes, observarlas y responderlas mediante respuestas simuladas.

Lo que distingue a MSW es que aboga firmemente por una capa de simulación de API independiente, creando una única fuente de verdad para el comportamiento de su red e integrándola en cualquier herramienta que esté utilizando. Esto conduce a una configuración más resistente y, junto con otras funciones de la biblioteca, crea una experiencia de simulación de API verdaderamente perfecta.

## Características

## Agnóstico

MSW está diseñado para ser totalmente independiente del entorno, el marco y las herramientas. Puede usarlo en cualquier navegador o proceso Node.js sin configuraciones, adaptadores o complementos adicionales. Funciona con todos los clientes de solicitudes, ya sea un `window.fetch()` nativo o bibliotecas de terceros como Axios, Vue Query o Apollo.

## Sin costura

MSW utiliza la API Service Worker para interceptar solicitudes de producción reales a nivel de red. En lugar de parchear `fetch` y entrometerse en la integridad de su aplicación, MSW apuesta por la plataforma, utilizando la API del navegador estándar para implementar una lógica revolucionaria de interceptación de solicitudes.

Incluso en Node.js, donde no existen medios estándar para interceptar solicitudes, MSW usa extensión de clase en lugar de parches de módulo para garantizar que sus pruebas se ejecuten en el entorno lo más cerca posible de producción.


## Reutilizable

Al tratar la simulación de API como una capa independiente, MSW puede integrarse en toda su pila, lo que le permite reutilizar y personalizar el comportamiento de la red según demanda. Imagine utilizar las mismas simulaciones de API durante el desarrollo, la integración y las pruebas de un extremo a otro, y luego en su Storybook o durante una demostración en vivo. Bueno, con RSU puedes hacerlo.

## Empieza aqui

Si nunca antes ha probado MSW o no está seguro de por dónde empezar, no busque más que el tutorial de introducción:

:::info Empezando
[Tres pasos para comenzar con Mock Service Worker.](./getting-started)
:::
