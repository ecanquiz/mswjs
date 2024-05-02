import{_ as e,c as a,o,V as i}from"./chunks/framework.-lsX7DWn.js";const b=JSON.parse('{"title":"Introducción","description":"","frontmatter":{},"headers":[],"relativePath":"get-start/introduction.md","filePath":"get-start/introduction.md"}'),t={name:"get-start/introduction.md"},r=i('<h1 id="introduccion" tabindex="-1">Introducción <a class="header-anchor" href="#introduccion" aria-label="Permalink to &quot;Introducción&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>La fuente original (en ingles) de este tutorial se encuentra <a href="https://mswjs.io/docs/" target="_blank" rel="noreferrer">aquí</a></p></div><p>¡Bienvenido a la documentación del Trabajador de Servicio Simulado!</p><p>Mock Service Worker (MSW) es una biblioteca simulada de API para navegador y Node.js. Con MSW, puede interceptar solicitudes salientes, observarlas y responderlas mediante respuestas simuladas.</p><p>Lo que distingue a MSW es que aboga firmemente por una capa de simulación de API independiente, creando una única fuente de verdad para el comportamiento de su red e integrándola en cualquier herramienta que esté utilizando. Esto conduce a una configuración más resistente y, junto con otras funciones de la biblioteca, crea una experiencia de simulación de API verdaderamente perfecta.</p><h2 id="caracteristicas" tabindex="-1">Características <a class="header-anchor" href="#caracteristicas" aria-label="Permalink to &quot;Características&quot;">​</a></h2><h2 id="agnostico" tabindex="-1">Agnóstico <a class="header-anchor" href="#agnostico" aria-label="Permalink to &quot;Agnóstico&quot;">​</a></h2><p>MSW está diseñado para ser totalmente independiente del entorno, el marco y las herramientas. Puede usarlo en cualquier navegador o proceso Node.js sin configuraciones, adaptadores o complementos adicionales. Funciona con todos los clientes de solicitudes, ya sea un <code>window.fetch()</code> nativo o bibliotecas de terceros como Axios, Vue Query o Apollo.</p><h2 id="sin-costura" tabindex="-1">Sin costura <a class="header-anchor" href="#sin-costura" aria-label="Permalink to &quot;Sin costura&quot;">​</a></h2><p>MSW utiliza la API Service Worker para interceptar solicitudes de producción reales a nivel de red. En lugar de parchear <code>fetch</code> y entrometerse en la integridad de su aplicación, MSW apuesta por la plataforma, utilizando la API del navegador estándar para implementar una lógica revolucionaria de interceptación de solicitudes.</p><p>Incluso en Node.js, donde no existen medios estándar para interceptar solicitudes, MSW usa extensión de clase en lugar de parches de módulo para garantizar que sus pruebas se ejecuten en el entorno lo más cerca posible de producción.</p><h2 id="reutilizable" tabindex="-1">Reutilizable <a class="header-anchor" href="#reutilizable" aria-label="Permalink to &quot;Reutilizable&quot;">​</a></h2><p>Al tratar la simulación de API como una capa independiente, MSW puede integrarse en toda su pila, lo que le permite reutilizar y personalizar el comportamiento de la red según demanda. Imagine utilizar las mismas simulaciones de API durante el desarrollo, la integración y las pruebas de un extremo a otro, y luego en su Storybook o durante una demostración en vivo. Bueno, con RSU puedes hacerlo.</p><h2 id="empieza-aqui" tabindex="-1">Empieza aqui <a class="header-anchor" href="#empieza-aqui" aria-label="Permalink to &quot;Empieza aqui&quot;">​</a></h2><p>Si nunca antes ha probado MSW o no está seguro de por dónde empezar, no busque más que el tutorial de introducción:</p><div class="info custom-block"><p class="custom-block-title">Empezando</p><p><a href="./getting-started.html">Tres pasos para comenzar con Mock Service Worker.</a></p></div>',16),n=[r];function s(c,d,l,u,p,m){return o(),a("div",null,n)}const g=e(t,[["render",s]]);export{b as __pageData,g as default};