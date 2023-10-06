/*
 * @Author: Joe.Chen
 * @Date: 2023-09-26 11:44:01
 * @LastEditors: Joe.Chen joe.chen@tracle-tw.com
 * @LastEditTime: 2023-09-26 12:10:34
 * @Description: 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/camera-test/' : '/',
})
