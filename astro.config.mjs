// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',  // Usar la salida serverless para Vercel
  integrations: [tailwind()],  // Integración de Tailwind

  env: {
    schema: {
      SHOW_BUY_BUTTON: {
        default: true,
        type: 'boolean',
        context: 'server',
        access: 'public'
      },
      SCORE_API_ENDPOINT: {
        type: 'string',
        context: 'server',
        access: 'public'
      }
    }
  },

  adapter: vercel()  // Configuración para usar el adaptador serverless de Vercel
});
