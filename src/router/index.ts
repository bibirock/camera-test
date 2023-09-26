/*
 * @Author: Joe.Chen
 * @Date: 2023-09-26 11:44:01
 * @LastEditors: Joe.Chen joe.chen@tracle-tw.com
 * @LastEditTime: 2023-09-26 11:49:21
 * @Description: 
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/CameraTest.vue')
    },
  ]
})

export default router
