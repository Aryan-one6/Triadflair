// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from 'tailwindcss'
// import autoprefixer from 'autoprefixer'
// import path from 'path';


// export default defineConfig({

//   plugins: [react()],
//   resolve: {
//     alias: {
//       // Force Vite to use the ESM version of Swiper that has the proper named exports.
//       swiper: path.resolve(__dirname, 'node_modules/swiper/swiper-bundle.esm.js'),
//     },
//     // Ensure that only one copy of Swiper is used
//     dedupe: ['swiper']
//   },
//   optimizeDeps: {
//     include: ['swiper', 'swiper/react'],
//     esbuildOptions: {
//       target: 'es2020'
//     }
//   },
//   ssr: {
//     noExternal: ['swiper']
//   },
//   css: {
//     postcss: {
//       plugins: [tailwindcss(), autoprefixer()],
//     },
//   },
//   server: {
//     proxy: {
//       '/api': { 
//         target: 'http://localhost:3001',
//         changeOrigin: true,
//       },
//     },
//   },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
// import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    
    dedupe: ['swiper']
  },
  optimizeDeps: {
    include: ['swiper', 'swiper/react'],
    esbuildOptions: {
      target: 'es2020'
    }
  },
  ssr: {
    noExternal: ['swiper']
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  server: {
    proxy: {
      '/api': { 
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
