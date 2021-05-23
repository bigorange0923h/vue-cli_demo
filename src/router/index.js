import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import Student from '@/components/Student'
import UserAdd from '@/components/UserAdd'
import UserEdit from '@/components/UserEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: 'add', name: 'UserAdd', component: UserAdd  //添加用户
        },
        {
          path: 'edit', name: 'UserEdit', component: UserEdit  //编辑用户
        }
      ]
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    },


  ]
})
