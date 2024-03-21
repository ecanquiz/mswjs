# Empezando

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://mswjs.io/docs/getting-started)
:::

**Tres pasos para comenzar con Mock Service Worker.**

Los desarrolladores acuden a MSW por varias razones: para establecer límites de prueba adecuados, crear prototipos de aplicaciones, depurar problemas relacionados con la red o monitorear el tráfico de producción. Esto hace que sea aún más difícil escribir un único tutorial que satisfaga todas esas necesidades al mismo tiempo. Al final, usted elige cómo utilizar las capacidades de la biblioteca y creemos que debe ser usted quien decida cuál es el camino correcto a seguir en este tutorial.

## Paso 1: Instalar

Instale MSW como una dependencia ejecutando el siguiente comando en su proyecto:

```sh
npm install msw@latest --save-dev
```

Si es necesario, también puedes [instalar MSW desde un CDN](../recipes/using-cdn.html).

## Paso 2: Escribir el comportamiento de la red

Para describir el comportamiento de la red que necesita, debe comprender cómo interceptar solicitudes y cómo burlarse de sus respuestas.

::: info Interceptando solicitudes
[Obtenga información sobre la interceptación de solicitudes y cómo capturar solicitudes REST y GraphQL.](../basics/intercepting-requests)
:::

::: info Respuestas Burladas
[Obtenga más información sobre los solucionadores de respuestas y las diferentes maneras de responder a una solicitud.](../basics/mocking-responses)
:::

Una vez que se sienta cómodo con esos conceptos, obtenga más información sobre los espacios de nombres `http` y `graphql` que utilizará para describir los recursos para las API REST y GraphQL, respectivamente.

::: info Describiendo la API REST
[Aprenda a describir las API RESTful.](../network-behavior/rest)
:::

::: info Describiendo la API GraphQL
[Aprenda a describir las API GraphQL.](../network-behavior/graphql)
:::

MSW es totalmente compatible con la simulación de [API con seguridad de tipos con TypeScript](../best-practices/typescript).

## Paso 3: Integre en cualquier lugar

Existen muchos marcos, bibliotecas y herramientas, pero todos se ejecutan en el navegador o en Node.js (hablando del ecosistema JavaScript). No encontrará instrucciones específicas sobre cómo integrar MSW con esas herramientas porque no las hay. En su lugar, creará puntos de integración basados en el entorno que funcionen con cualquier herramienta que haya utilizado, esté utilizando ahora o utilizará en el futuro.

**Siga las guías de integración para los entornos que necesita:**

::: info Browser
[Integre MSW en un entorno de navegador, como una aplicación Vue o Storybook.](../integrations/browser)
:::

::: info Node
[Integre MSW en Node.js, como una aplicación Express o un ejecutor de pruebas.](../integrations/node)
:::

>Es posible y recomendable tener ambos puntos de integración en su proyecto para poder obtener un control consistente sobre la red en toda la pila.

## Ejemplos

En el repositorio a continuación, puede encontrar ejemplos funcionales, completos y minimalistas de cómo usar Mock Service Worker con herramientas como Jest, Vitest, Cypress, Playwright, Angular, Svelte, Remix y otras. Utilícelos como referencia siempre que integre MSW con esas herramientas.

::: info Ejemplos de utilización
[Ejemplos de utilización de Mock Service Worker con varios marcos y bibliotecas.](https://github.com/mswjs/examples)
:::

>¡Convierta cada ejemplo de uso en un repositorio de reproducción si encuentra algún problema!

## ¿Necesitas ayuda?

Comenzar con una nueva herramienta puede ser difícil, pero no es necesario que lo pases solo. Siempre que encuentre un problema, el mejor lugar al que acudir es nuestro runbook de depuración:

::: info Manual de ejecución de depuración
[Paso para depurar problemas comunes con la biblioteca.](./runbook)
:::

Siempre se estará encantado de ayudarle con cualquier pregunta que pueda tener. Hay varias formas de comunicarse con miembros de la comunidad para obtener ayuda:

- [Únete a MSW Discord](https://discord.com/invite/z29WbnfDC5)
- [Iniciar una discusión en GitHub](https://github.com/mswjs/msw/discussions)

Y recuerda, siempre hay una persona que tiene un problema detrás de ti. Sea amable y ofrezca ayuda cuando pueda.


