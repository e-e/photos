import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/Test'
import Album from '@/components/Album'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path: '/test',
    	name: 'test',
    	component: Test
    },
    {
    	path: "/album/:albumId",
    	name: "album",
    	component: Album
    }
  ]
})
