# Runbook de depuración

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://mswjs.io/docs/runbook)
:::

Depurar problemas comunes con MSW.

A continuación puede encontrar los problemas más comunes que experimentan los desarrolladores al integrar Mock Service Worker en sus aplicaciones. Lea esta página antes de abrir un problema en GitHub, ya que existe una buena posibilidad de que haya una respuesta a su problema a continuación.

## Antes de que empieces

## Verifique la versión de Node.js

Verifique la versión de Node.js que está usando su proyecto:

```sh
node -v
```

Si es inferior a Node.js v18, [actualice a la última versión de Node.js](https://nodejs.org/en). No investigamos los problemas que ocurren en versiones no compatibles de Node.js.

## Verifique la versión de MSW

Primero, verifique qué versión del paquete `msw` tiene instalada:

```sh
npm ls msw
```

Luego, verifique la última versión de publicación:


```sh
npm view msw version
```


Si estos dos difieren, actualice la versión de `msw` en su proyecto y vea si el problema persiste.

## Runbook de depuración

Verificó el entorno y las versiones de MSW, pero el problema persiste. Es hora de hacer un poco de depuración. A continuación, puede encontrar un runbook de depuración paso a paso que debe seguir cuando experimente cualquier comportamiento inesperado con MSW.


## Paso 1: Verificar la configuración

Primero, verifique que MSW esté configurado correctamente. Tome la instancia `worker`/`server` y agréguele un nuevo detector de eventos de ciclo de vida `request:start`.


```js
server.events.on('request:start', ({ request }) => {
  console.log('Outgoing:', request.method, request.url)
})
```

Puede obtener más información sobre la [API de eventos del ciclo de vida](../api/life-cycle-events.html).

Con este oyente implementado, debería ver el mensaje de la consola _en cada solicitud saliente_ que intercepte MSW. El mensaje de la consola debería verse así:


```sh
Outgoing: GET https://api.example.com/some/request
Outgoing: POST http://localhost/post/abc-123
```

**Debe ver el método de solicitud y la URL de solicitud absoluta**. Si el método de solicitud es diferente, ajuste su controlador de solicitudes para reflejarlo. Si ve una _URL de solicitud relativa_, su cliente de solicitud o su entorno de prueba no están configurados correctamente. Debe configurar la opción de URL base de su cliente de solicitud para producir URL de solicitud absolutas y su entorno de prueba para tener configurado `document.baseURI`.

De lo contrario, **verifique que se imprima la solicitud problemática**. Si es así, continúe con el siguiente paso.

>Si la solicitud problemática es la única solicitud que realiza su aplicación, intente agregar una llamada de recuperación ficticia en cualquier lugar después de la configuración de MSW para confirmar este paso. Por ejemplo:
```js
fetch('https://example.com')
```

Si no se imprime ningún mensaje para la solicitud problemática (o cualquier solicitud), es probable que MSW no esté configurado correctamente y no pueda interceptar las solicitudes. Consulte las [instrucciones de integración](../get-start/getting-started.html#paso-3-integre-en-cualquier-lugar) y asegúrese de configurar la biblioteca como se ilustra allí.

## Paso 2: Verificar el manejador

Vaya al manejador de solicitudes que creó para la solicitud problemática y agregue una declaración de consola en su función de resolución.

```js
// src/mocks/handlers.js
import { http } from 'msw'
 
export const handlers = [
  http.get('/some/request', ({ request }) => {
    console.log('Handler', request.method, request.url)
 
    // The rest of the response resolver here.
  }),
]
```

Debería ver este mensaje de consola cuando ocurra la solicitud problemática en la page/tests. Si es así, continúe con el siguiente paso.

Si no hay ningún mensaje, MSW puede interceptar la solicitud pero _no puede compararla con este controlador_. Esto probablemente significa que el predicado de su controlador de solicitudes no coincide con la URL de solicitud real. **Verifique que el predicado sea correcto**. Algunos de los problemas comunes incluyen:

- Usar una variable de entorno en la ruta, que no está configurada en pruebas/CI (por ejemplo, `http.get(BASE_URL + '/path'))`). Inspeccione cualquier segmento dinámico de la ruta de solicitud y asegúrese de que tenga los valores esperados;
- Errores tipográficos en la ruta de la solicitud. Examine detenidamente la solicitud impresa en el paso anterior de este runbook y encuentre cualquier error tipográfico o error en ella.

Si no está seguro, lea la documentación sobre cómo interceptar solicitudes con MSW:

::: info Interceptando solicitudes
[Obtenga información sobre la interceptación de solicitudes y cómo capturar solicitudes REST y GraphQL.](../basics/intercepting-requests)
:::

## Paso 3: Verificar la respuesta

Si se invoca el controlador de solicitudes pero la solicitud aún no recibe la respuesta simulada, el siguiente lugar a verificar es la respuesta simulada en sí. En el controlador de solicitudes, salte a las respuestas simuladas que defina.

```js
// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('/some/request', ({ request }) => {
    console.log('Handler', request.method, request.url)
 
    return HttpResponse.json({ mocked: true })
  }),
]
```

**Verifique que está construyendo una respuesta válida**. Puede asignar la respuesta a una variable e imprimirla para inspeccionarla. También puede devolver anticipadamente una respuesta ficticia simulada y ver si su aplicación la recibe.

Si no está seguro, lea sobre las respuestas simuladas de MSW:

::: info Respuestas Simuladas
[Obtenga más información sobre los solucionadores de respuestas y las diferentes maneras de responder a una solicitud.](../basics/mocking-responses)
:::

Si no ha descubierto ningún problema con la respuesta simuladas, continúe con el siguiente paso.

## Paso 4: Verificar la aplicación

Si ninguno de los pasos anteriores ha resultado fructífero, es probable que el problema esté en la lógica de manejo de solicitud/respuesta de su aplicación. Vaya al código fuente que realiza la solicitud y maneja la respuesta, y verifique que sean correctos. Siga cuidadosamente las pautas de su framework de solicitudes para asegurarse de realizar las solicitudes según lo previsto.

Si el problema persiste, [abra una nueva edición en GitHub](https://github.com/mswjs/msw/issues/new/choose) y proporcione un repositorio de reproducción mínimo. Los problemas sin el repositorio de reproducción donde el problema pueda reproducirse de manera confiable se cerrarán automáticamente.
