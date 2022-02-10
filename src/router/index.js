import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // แก้ไข Meta ในหน้า Html
    meta: {
      title: "IP Address Tracker"
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
// ส่งค่า meta ที่แก้ไข
router.beforeEach((to, from, next) => {
  // กำหนดใน title ใน document = meta title ที่เรากำหนด
  document.title = `${to.meta.title}`
  next();
})

export default router
