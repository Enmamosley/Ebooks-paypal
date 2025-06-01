// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
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
  adapter: vercel({ edge: true }) // 👈 Solución aquí
});
