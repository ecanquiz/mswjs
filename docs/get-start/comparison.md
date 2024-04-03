# Comparación

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://mswjs.io/docs/comparison)
:::


Comparación de Mock Service Worker con herramientas similares.

Elegir la herramienta adecuada para el trabajo es crucial. Hicimos todo lo posible para proporcionar una comparación completa e imparcial entre Mock Service Worker y otras bibliotecas simuladas de API de código abierto a continuación.

:::warning Advertencia
El propósito de esta página no es razonar sobre qué tecnología es mejor o peor. Todas las bibliotecas enumeradas aquí tienen un lugar para estar, y calificarlas no sólo es subjetivo, sino también una falta de respeto hacia las personas que realmente deberían usar una sobre otra.
:::

## Criterios de Comparación

Cualquier buena comparación comienza con un conjunto de criterios claramente definidos. Estos son los criterios que utilizamos al comparar MSW con alternativas (escritos desde la perspectiva de un desarrollador):

- Tipos de API admitidos. ¿Qué tipos de API puedo simular con la biblioteca?
- Ambiente. ¿En qué entornos puedo utilizar la biblioteca?
- Implementación. ¿Cómo implementa la biblioteca la interceptación de solicitudes?
- Integración. ¿Cuánto esfuerzo se necesita para integrarlo en mi proyecto?
- Definición. ¿Cómo defino las burlas?

## Nock

[Nock](https://github.com/nock/nock) es una biblioteca de expectativas y burlas del servidor HTTP para Node.js.

>Nock es una gran biblioteca para combinar simulaciones de API y afirmaciones en Node.js. Si bien Mock Service Worker no viene con capacidades de aserción integradas, le permite reutilizar sin problemas los mismos simulacros en el navegador y en Node.js, además de brindar soporte GraphQL de primera clase y manejo de solicitudes/respuestas basado en estándares.

### Soporte API

|Tipo de API|Nock|Mock Service Worker|
|-|-|-|
|REST API|✅|✅|
|GraphQL API|❌|✅|
|WebSocket API|❌|❌|

### Entorno soportado

|Entorno|Nock|Mock Service Worker|
|-|-|-|
|Node.js|✅|✅|
|Navegador|❌|✅|

### Integración

|Nock|Mock Service Worker|
|-|-|
|No requiere ningún cambio en el código.|No requiere ningún cambio en el código.|
|Requiere adaptadores adicionales para interceptar solicitudes de clientes específicos (por ejemplo, `axios`)|Funciona con cualquier cliente de solicitud sin configuración adicional.|

### Definición

Nock

Nock usa _encadenamiento de métodos_ para interceptar solicitudes y declarar respuestas simuladas:

```ts
nock('https://api.example.com')
  .get('/user')
  .reply(200, { id: 1, name: 'John' })
```

Mock Service Worker

MSW modela su API de interceptación después del enrutamiento del lado del servidor y maneja solicitudes y respuestas de acuerdo con la especificación Fetch API, usando las mismas clases que usaría normalmente en JavaScript:


```ts
http.get('https://api.example.com/user', async ({ request }) => {
  const payload = await request.json()
  return HttpResponse.json({ id: 1, name: 'John' })
})
```

## JSON Server

[JSON Server](https://github.com/typicode/json-server) le permite crear un servidor HTTP real basado en un archivo JSON.


>JSON Server es un servidor HTTP real que utiliza un formato de definición de respuesta abstracta. Esto significa un servidor que debes ejecutar y mantener. Mock Service Worker no genera ningún servidor, por lo que su costo de inicialización es gratuito. Mock Service Worker también le permite tener definiciones simuladas más a prueba de errores mediante el uso de lenguajes como TypeScript y generando simulaciones a partir de la implementación real del backend.

### Soporte API

|Tipo de API|JSON Server|Mock Service Worker|
|-|-|-|
|REST API|✅|✅|
|GraphQL API|❌|✅|
|WebSocket API|❌|❌|

### Entorno soportado

|Entorno|JSON Server|Mock Service Worker|
|-|-|-|
|Node.js|✅|✅|
|Navegador|✅<sup>1</sup>|✅|

><sup>1</sup>—JSON Server en realidad no se ejecuta en el navegador. Dado que es un servidor independiente, se puede solicitar desde cualquier lugar de su sistema.

### Integración

|JSON Server|Mock Service Worker|
|-|-|
|Requiere cambiar el código para solicitar recursos del servidor simulado.|No requiere ningún cambio en el código.|
|Funciona con cualquier cliente de solicitud sin configuración adicional.|Funciona con cualquier cliente de solicitud sin configuración adicional.|

### Definición

JSON Server

JSON Server utiliza un formato de rutas de recursos primero que genera implícitamente rutas de solicitud y describe respuestas simuladas.

```ts
{
  "posts": [
    { "id": 1, "title": "json-server" },
    { "id": 2, "title": "mock-service-worker" }
  ]
}
```

>Esto generará automáticamente rutas del lado del servidor como `GET /posts` y `DELETE /posts/:index` en función de los recursos descritos. La naturaleza de dichas rutas es estática y requiere abstracciones adicionales para lograr comportamientos de red más complejos.


### Mock Service Worker

MSW modela su API de intercepción después del enrutamiento del lado del servidor y maneja solicitudes y respuestas de acuerdo con la especificación _Fetch API_, usando las mismas clases que usaría normalmente en _JavaScript_:


```ts
http.get('/posts', () => {
  return HttpResponse.json([
    { id: 1, title: 'json-server' },
    { id: 2, title: 'mock-service-worker' },
  ])
})
```

>Con MSW, debe definir explícitamente operaciones del lado del servidor como `http.get('/posts')` o `http.delete('/posts/:index')`. MSW dio prioridad a la claridad, aprovechando la resolución de solicitudes programáticas, lo que permite comportamientos de red más complejos.

## Mirage

[Mirage](https://github.com/miragejs/miragejs) es una biblioteca simulada de API que le permite crear, probar y compartir una aplicación JavaScript completa y funcional sin tener que depender de ningún servicio backend.

>Mirage se centra en el modelado de datos para emular comportamientos de servidor más complejos. Mock Service Worker no viene con capacidades de modelado de datos integradas y, en cambio, las expone en un paquete separado llamado [`@mswjs/data`](https://github.com/mswjs/data). De esta manera puedes traer el modelado a la mesa cuando lo necesites.

### Soporte API

|Tipo de API|Mirage|Mock Service Worker|
|-|-|-|
|REST API|✅|✅|
|GraphQL API|❌|✅|
|WebSocket API|❌|❌|

### Entorno soportado

|Entorno|Mirage|Mock Service Worker|
|-|-|-|
|Node.js|❌|✅|
|Navegador|✅|✅|

### Implementación

|Entorno|Mirage|Mock Service Worker|
|-|-|-|
|Navegador|`fetch` de Monkey-patches y `XMLHttpRequest` (utiliza `pretender`).|Utiliza un Service Worker para interceptar solicitudes en el nivel del navegador.|

### Integración

|Mirage|Mock Service Worker|
|-|-|
|No requiere ningún cambio en el código.|No requiere ningún cambio en el código.|
|Funciona con cualquier cliente de solicitud sin configuración adicional.|Funciona con cualquier cliente de solicitud sin configuración adicional.|


### Definición

Mirage

Mirage utiliza el formato de controladores de rutas para definir rutas similares a las de un servidor y respuestas simuladas.


```ts
createServer({
  routes() {
    this.get('/movies', () => {
      return ['Interstellar', 'Inception', 'Dunkirk']
    })
  },
})
```

Mirage también viene con una base de datos en memoria para ayudarle a modelar relaciones de datos más complejas.


```ts
createServer({
  models: {
    movie: Model.extend({
      castMembers: hasMany(),
    }),
    castMember: Model.extend({
      movie: belongsTo(),
    }),
  },
  routes() {
    // Your route handlers responding with the data.
  },
})
```

### Mock Service Worker

MSW modela su API de intercepción después del enrutamiento del lado del servidor y maneja solicitudes y respuestas de acuerdo con la especificación Fetch API, usando las mismas clases que usaría normalmente en JavaScript:


```ts
http.get('/movies', () => {
  return HttpResponse.json(['Interstellar', 'Inception', 'Dunkirk'])
})
```

Aunque MSW no incluye capacidades de modelado de datos integradas, aprovecha los paquetes del ecosistema, como `@mswjs/data`, para brindarle un enfoque basado en los datos para la simulación de API, si así lo elige.


```ts
import { factory, primaryKey, oneOf, manyOf } from '@mswjs/data'
 
// Model the data.
const db = factory({
  movie: {
    id: primaryKey(randomUuid),
    title: String,
    castMembers: manyOf('castMember'),
  },
  castMember: {
    id: primaryKey(randomUuid),
    name: String,
    movie: oneOf('movie'),
  },
})
 
// Generate request handlers based on the models.
// - GET /movies
// - GET /movies/:id
// - POST /movies
// - ...
db.toHandlers('rest')
 
// Including GraphQL queries!
// - query ListMovies
// - query GetMovie
// - mutation AddMovie
// - ...
db.toHandlers('graphql')
```

## Cypress - `cy.intercept()`

[Cypress](https://github.com/cypress-io/cypress) es un marco de pruebas de un extremo a otro que proporciona capacidades de simulación de API a través de su API cy.intercept().

### Soporte API

|Tipo de API|`cy.intercept()`|Mock Service Worker|
|-|-|-|
|REST API|✅|✅|
|GraphQL API|❌<sup>1</sup>|✅|
|WebSocket API|❌|❌|

><sup>1</sup>—Aunque es posible trabajar con solicitudes GraphQL mediante alias personalizados, aún requiere mucha configuración adicional. Cypress logra burlarse de la API GraphQL a través del manejo HTTP (ya que GraphQL se implementa más comúnmente a través de HTTP en la web) en lugar de un soporte GraphQL de primera clase.

### Entorno soportado 

|Tipo de API|`cy.intercept()`|Mock Service Worker|
|-|-|-|
|Node.js|❌<sup>1</sup>|✅|
|Navegador|✅|✅|

><sup>1</sup>—Cypress es un marco de pruebas de navegador, lo que significa que no puedes usar tus simulacros de `cy.intercept()` en un proceso de Node.js, como una prueba de integración o una aplicación backend.


### Implementación

|Entorno|`cy.intercept()`|Mock Service Worker|
|-|-|-|
|Navegador|Utiliza un proxy HTTP en todo el navegador para enrutar las solicitudes salientes a través del servidor personalizado que Cypress genera como parte de su tiempo de ejecución.|Utiliza un Service Worker para interceptar solicitudes en el nivel del navegador.|

### Integración

|`cy.intercept()`|Mock Service Worker|
|-|-|
|No requiere cambios en el código. Disponible de forma nativa con Cypress.|No requiere cambios en el código.|
|Funciona con cualquier cliente de solicitud sin configuración adicional.|Funciona con cualquier cliente de solicitud sin configuración adicional.|


### Definición

`cy.intercept()`

Cypress utiliza una firma de comparación personalizada y una función de controlador de ruta para interceptar y manejar solicitudes. Utiliza métodos personalizados como `req.reply()`, `req.continue()` o `req.redirect()` para un control de solicitudes más detallado.


```ts
cy.intercept('POST', '/users', {
  statusCode: 201,
  body: req.body,
  delay: 100,
})
```

### Mock Service Worker


MSW modela su API de interceptación después del enrutamiento del lado del servidor y maneja solicitudes y respuestas de acuerdo con la especificación Fetch API, usando las mismas clases que usaría normalmente en JavaScript:


```ts
import { http, delay } from 'msw'
 
http.post('/users', async ({ request }) => {
  // Read the request body as you would normally.
  const user = await request.json()
 
  // Control the response resolver execution flow
  // via Promises, like this "delay" Promise below.
  await delay(100)
 
  // Construct a response as you would normally.
  return HttpResponse.json(user, { status: 201 })
})
```

MSW le brinda un control más avanzado sobre las solicitudes a través de sus API `passthrough()` y `bypass()`, que aún generan respuestas HTTP semánticas bajo el capó.

## Playwright - `page.route()`

[Playwright](https://github.com/microsoft/playwright) es una herramienta de prueba de navegador que proporciona capacidades de simulación de API a través de su API `page.route()`.

### Soporte API

|Tipo de API|`page.route()`|Mock Service Worker|
|-|-|-|
|REST API|✅|✅|
|GraphQL API|❌<sup>1</sup>|✅|
|WebSocket API|❌|❌|

><sup>1</sup>—Puede manejar solicitudes GraphQL con `page.route()` ya que también son solicitudes HTTP, pero Playwright no proporciona soporte de primera clase para burlarse de las API GraphQL.

### Entorno soportado

|Tipo de API|`page.route()`|Mock Service Worker|
|-|-|-|
|Node.js|❌<sup>1</sup>|✅|
|Navegador|✅|✅|

><sup>1</sup>—Aunque con Playwright escribes tus pruebas en Node.js, el propio Playwright (y su `page.route()`) solo afecta el tráfico en el navegador generado, no el proceso de Node.js.

###  Implementación

|Entorno|`page.route()`|Mock Service Worker|
|-|-|-|
|Navegador|Utiliza el [Protocolo Chrome DevTools](https://chromedevtools.github.io/devtools-protocol/) para interceptar solicitudes a nivel del navegador.|Utiliza un Service Worker para interceptar solicitudes en el nivel del navegador.|

### Integración

|`page.route()`|Mock Service Worker|
|-|-|
|No requiere ningún cambio en el código. Disponible de forma nativa con Playwright.|No requiere ningún cambio en el código.|
|Funciona con cualquier cliente de solicitud sin configuración adicional.|Funciona con cualquier cliente de solicitud sin configuración adicional.|

### Definición

`page.route()`

La función `page.route()` en Playwright utiliza métodos personalizados como `route.fulfill()` y `route.continue()` para brindarle más control sobre la solicitud.


```ts
page.route('/fruits', async (route) => {
  const request = route.request()
 
  if (request.method === 'POST') {
    const response = await route.fetch()
    const json = await response.json()
    json.push({ name: 'Playwright' })
 
    return route.fulfill({ response, json })
  }
 
  route.continue()
})
```

### Mock Service Worker


```ts
import { bypass } from 'msw'
 
http.post('/fruits', async ({ request }) => {
  const response = await fetch(bypass(request))
  const json = await response.json()
  json.push({ name: 'Mock Service Worker' })
 
  return HttpResponse.json(json, response)
})
```

La alternativa para `route.continue()` en MSW es simplemente no devolver nada de un _response resolver_. Pero como podemos limitar la intercepción de solicitudes tanto al método (`POST`) como a la ruta (`/fruits`), nuestro controlador de solicitudes nunca se ocupa de otras solicitudes.

MSW utiliza la función [`bypass()`](../api/bypass.html) personalizada que envuelve cualquier instancia `Request` determinada para evitar que se vea afectada por otros controladores de solicitudes que de otro modo coincidirían.


