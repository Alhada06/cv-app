// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target:'static',
  router:{
        base:'/cv-app/'
      },

    css:["assets/css/main.css"],

    postcss:{
        plugins:{
            tailwindcss:{},
            autoprefixer:{},
        }
    },
    modules: [
        '@vueuse/nuxt',
      ],
    
      // ssr:false,

      
      
    

})
