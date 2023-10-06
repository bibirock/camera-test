/*
 * @Author: Joe.Chen
 * @Date: 2023-09-26 11:44:01
 * @LastEditors: Joe.Chen joe.chen@tracle-tw.com
 * @LastEditTime: 2023-09-26 12:13:39
 * @Description: 
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/camera-test/' : '/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/CameraTest.vue')
    },
  ]
})

export default router
