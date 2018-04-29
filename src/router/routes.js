

export default [
  {
    path: '/',
    name:'home',
    component: () => import('@/components/home/Home')
  },
  {
    path: '/busin/lll',
    name:'busin',
    component: () => import('@/components/busin/Busin')
  }
]
