import Home from '@/views/home/Home'

import homeRouter from './home-router'

const Login = () => import('@/views/login/Login')

// 除了需要新开的登录页其余的都在home路由下
const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/about',
      },
      ...homeRouter,
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

export default routes
