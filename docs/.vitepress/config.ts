import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Mock Service Worker',
  description: 'TDD con Vue 3.',
  base: '/mswjs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/me.jpg',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/get-start/introduction' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' },     
    ],
    sidebar: [
      {
        text: 'Comenzar',   // required
        path: '/get-start/',      // optional, link of the title, which should be an absolute path and must exist        
        sidebarDepth: 1,    // optional, defaults to 1
        collapsible: true,
        collapsed: false, 
        items: [
          { text: 'Introducción', link: '/get-start/introduction' },   
          { text: 'Empezando', link: '/get-start/getting-started' },
          { text: 'Filosofía', link: '/get-start/philosophy' },          
          { text: 'Comparación', link: '/get-start/comparison' },
          { text: 'Limitaciones', link: '/get-start/limitations' },
          { text: 'Manual de ejecución de depuración', link: '/get-start/runbook' },
        ]
      }, 
      {
        text: 'Basicos',   
        path: '/basics/',
        sidebarDepth: 1,
        collapsible: true,
        collapsed: true, 
        items: [      
          { text: 'Interceptando Solicitudes', link: '/basics/intercepting-requests' }, 
          { text: 'Respuestas Burladas', link: '/basics/mocking-responses' }          
        ]
      }, 
      {
        text: 'Conceptos',   
        path: '/concepts/',
        sidebarDepth: 1,
        collapsible: true,
        collapsed: true, 
        items: [      
          { text: 'Manejador de solicitudes', link: '/concepts/request-handler' },                    
        ]
      }, 
      {
        text: 'Comportamiento de la Red',   
        path: '/network-behavior/',
        sidebarDepth: 1,
        collapsible: true,
        collapsed: true, 
        items: [      
          { text: 'Describiendo la API REST', link: '/network-behavior/rest' }, 
          { text: 'Describiendo la API GraphQL', link: '/network-behavior/graphql' }
        ]
      },
      {
        text: 'Integración',   
        path: '/integrations/',
        sidebarDepth: 1,
        collapsible: true,
        collapsed: true, 
        items: [      
          { text: 'Integración del Navegador', link: '/integrations/browser' }, 
          { text: 'Integración de Node.js', link: '/integrations/node' }
        ]
      },
      {
        text: 'API',   
        path: '/api/',
        sidebarDepth: 1,
        collapsible: true,
        collapsed: true, 
        items: [      
          { text: 'bypass', link: '/api/bypass' },         
        ]
      },
      {
        text: 'Mejores Prácticas',   
        path: '/best-practices/',
        sidebarDepth: 1,
        collapsible: true,
        collapsed: true, 
        items: [      
          { text: 'Usando con TypeScript', link: '/best-practices/typescript' },    
        ]
      }, 
      {
        text: 'Recetas',   
        path: '/recipes/',
        sidebarDepth: 1,
        collapsible: true,
        collapsed: true, 
        items: [      
          { text: 'Usando CDN', link: '/recipes/using-cdn' },    
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/mswjs' }
    ]
  }
})

