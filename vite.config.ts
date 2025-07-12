// import path from 'path';
// import { defineConfig, loadEnv } from 'vite';

// export default defineConfig(({ mode }) => {
//     const env = loadEnv(mode, '.', '');
//     return {
//       define: {
//         'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
//         'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
//       },
//       resolve: {
//         alias: {
//           '@': path.resolve(__dirname, '.'),
//         }
//       }
//     };
// });



import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'; // <- Needed for React apps

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
