import Vue from 'vue'
import Router from 'vue-router'
import Campaigns from 'components/Campaigns'
import Campaign from 'components/Campaign'
import Encounter from 'components/Encounter'
import Login from 'components/Login'
import Register from 'components/Register'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/encounters/:id',
      name: 'Encounter',
      component: Encounter
    },
    {
      path: '/campaigns',
      name: 'Campaigns',
      component: Campaigns
    },{
      path: '/campaigns/:id',
      name: 'Campaign',
      component: Campaign
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
