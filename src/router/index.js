import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import TeacherInfo from '@/components/TeacherInfo'
import query from '@/components/teacherOption/query'
import Info from '@/components/teacherOption/Info'
import add from '@/components/teacherOption/add'
import update from '@/components/teacherOption/update'
import deleteStu from '@/components/teacherOption/deleteStu'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
   
    {
      path:'/',
      name:'login',
      component:Login
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/teacherInfo',
      name:'teacherInfo',
      component:TeacherInfo,
      children:[
        {
          path:"/info",
          name:'info',
          component:Info
        },
        {
          path:"/query",
          name:'query',
          component:query
        },
        {
          path:'/add',
          name:'add',
          component:add
        },
        {
          path:'/update',
          name:'update',
          component:update 
        },
        {
          path:'/deleteStu',
          name:'deleteStu',
          component:deleteStu
        }
      ]
    }
  ]
})
