import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import UserManagement from '@/pages/UserManagement'
import ConfigurationManagement from '@/pages/ConfigurationManagement'
import RoleManagement from '@/pages/RoleManagement'
import TimingTaskCompensation from '@/pages/TimingTaskCompensation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/UserManagement',
          name: 'UserManagement',
          component: UserManagement
        },
        {
          path: '/ConfigurationManagement',
          name: 'ConfigurationManagement',
          component: ConfigurationManagement
        },
        {
          path: '/TimingTaskCompensation',
          name: 'TimingTaskCompensation',
          component: TimingTaskCompensation
        },
        {
          path: '/RoleManagement',
          name: 'RoleManagement',
          component: RoleManagement
        }
      ]
    }
  ]
})
