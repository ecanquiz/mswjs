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
    sidebar: [{
      text: 'Comenzar',   // required
      path: '/get-start/',      // optional, link of the title, which should be an absolute path and must exist        
      sidebarDepth: 1,    // optional, defaults to 1
      collapsible: true,
      collapsed: false, 
      items: [
        { text: 'Introducción', link: '/get-start/introdution' },   
        { text: 'Empezando', link: '/get-start/getting-started' }             
      ]
    }, {
      text: 'Guías y Conceptos',   
      path: '/guides-and-concepts/',
      sidebarDepth: 1,
      collapsible: true,
      collapsed: false, 
      items: [      
        { text: 'Valores Por-Defecto Importantes', link: '/guides-and-concepts/important-defaults' },
    
      ]
    }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/mswjs' }
    ]
  }
})


