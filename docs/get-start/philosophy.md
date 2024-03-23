# Filosofía

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://mswjs.io/docs/philosophy)
:::

>Modelos mentales detrás del Trabajador de Servicio Simulado.

Esta página detalla los modelos mentales que MSW y, por extensión, usted adopta al abordar la burla de API. Esta es una gran página para compartir con personas que se preguntan qué hace que los MSW sean únicos a nivel conceptual, y para aquellos que anhelan una perspectiva más práctica, tenemos preparada la página de [Comparación](./comparison.html).

## Burlándose como una capa independiente

Mock Service Worker es similar y nada parecido a otras soluciones de simulación de API. Si bien le brinda la capacidad de interceptar solicitudes salientes y burlarse de sus respuestas, no se combina con ninguna herramienta de prueba o desarrollo en particular. Esta pequeña distinción permite la mayoría de los beneficios que brindan los MSW.

**Estamos convencidos de que la burla de API merece una capa propia en su aplicación.** Poder controlar la red en cualquier momento y en cualquier lugar puede resultar útil en diversas situaciones, como probar código relacionado con la red o reproducir y depurar un escenario de red particular. Tal nivel de control es simplemente imposible cuando se utiliza la simulación de API como característica de cualquier otra herramienta porque siempre estará limitado por esa herramienta. Con los MSW no hay límites.

## Comportamiento Simulado vs Red

Es posible que rara vez utilicemos el término "mocks" (simulacros, simular, burlarse) en esta documentación. Históricamente, ha habido una fuerte asociación negativa con este término a medida que los desarrolladores ven la burla como algo sucio, poco confiable y pirata. Bueno, porque así fue hasta que apareció MSW.


MSW utiliza un framework de intrusión mínimo cuando se trata de interceptar el tráfico de red saliente. Esto significa no tener ningún cambio en su código mediante el uso de un trabajador de servicio designado en el navegador o la implementación de algoritmos de interceptación de solicitudes personalizados en Node.js que se centren en la integridad de su código. Nos hemos esforzado mucho en respetar su solicitud y, como favor a cambio, estamos acuñando un nuevo término: _comportamiento de red_.

**El comportamiento de la red es una descripción similar a un contrato del estado esperado de la red.** "Cuando ocurra la solicitud X, responda con Y". Este es precisamente el nivel de abstracción con el que trabajará cuando utilice MSW, y es un nivel que lee, escala y mantiene bien.

## Usando la plataforma

Si ha utilizado alguna solución de simulación de API en el pasado, sabrá cuánto pueden variar en términos de sintaxis e implementación. Desde el encadenamiento de métodos hasta las definiciones de controladores, desde enumerar escenarios de red en un archivo JSON hasta adoptar un enrutamiento similar a un framework. Siempre hay muchos conocimientos específicos a tener en cuenta, conocimientos que no se extienden más allá de herramientas particulares y, a menudo, no le enseñan qué es lo que está haciendo cuando se burla de las API.

**Vemos la educación para desarrolladores como una parte inseparable de la experiencia del desarrollador.** Dedicamos un esfuerzo constante para minimizar la cantidad de conocimientos específicos de la biblioteca que necesita para utilizar MSW. En cambio, confiamos en las API estándar y las características de la plataforma para que realmente aprenda cómo trabajar con solicitudes y respuestas (y enviaremos menos código, ¡lo cual es bueno!).

Adoptamos la [especificación WHATWG Fetch API](https://fetch.spec.whatwg.org/), lo que significa que cada solicitud interceptada es una instancia de `Request` real y cada respuesta simulada es una instancia de `Response` real. Adoptamos la [API Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) para interceptar solicitudes en el nivel de red del navegador para que su aplicación y sus pruebas no sepan _nada_ sobre la burla en el lugar. Dependemos de la semántica y los estándares en lugar de idear API personalizadas para satisfacer casos de uso particulares. Y esta es una de las razones por las que tantos desarrolladores nos confían sus canales de CI/CD.

>Por ejemplo, así es como respondes con una redirección simulada en MSW:


```ts
http.get('/old', () => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/new',
    },
  })
})
```

## Perspectiva del servidor

Cuando trabaje con MSW, escribirá [manejadores de solicitudes](../concepts/request-handler) para interceptar y responder a las solicitudes. Es importante abordar esos controladores desde la perspectiva del servidor ya que, efectivamente, estás describiendo cómo debería comportarse el servidor en un escenario particular.



