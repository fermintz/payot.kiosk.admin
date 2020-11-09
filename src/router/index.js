import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/login.vue'

import KioskLayout from '../views/kiosk/layout.vue'
import KioskSalesDay from '../views/kiosk/sales-days.vue'
import KioskOption from '../views/kiosk/option.vue'
import KioskProduct from '../views/kiosk/product.vue'
import KioskControl from '../views/kiosk/control.vue'
import KioskEvent from '../views/kiosk/event.vue'
import MemberList from '../views/kiosk/member-list.vue'
import PointPlusList from '../views/kiosk/point-plus-list.vue'
import PointMinusList from '../views/kiosk/point-minus-list.vue'
import snsMarketing from '../views/kiosk/snsMarketing.vue'
import snsMarketingList from '../views/kiosk/snsMarketing-list.vue'
import PointChageList from '../views/kiosk/point-chage-list.vue'
import PointUseList from '../views/kiosk/point-use-list.vue'

import ShopLayout from '../views/shop/layout.vue'
import SalesList from '../views/shop/sales-list.vue'
import SalesDays from '../views/shop/sales-days.vue'
import SalesTimes from '../views/shop/sales-times.vue'
import SalesWeek from '../views/shop/sales-week.vue'
import SalesMonth from '../views/shop/sales-month.vue'
import MachineRemote from '../views/shop/machine-remote.vue'
import MachineRemoteList from '../views/shop/machine-remote-list.vue'
import MachineList from '../views/shop/machine-list.vue'
import ShopInfo from '../views/shop/shop-info.vue'

import PoinLayout from '../views/poin/layout.vue'
import PoinSales from '../views/poin/sales.vue'
import PoinSalesDay from '../views/poin/sales-days.vue'
import PoinCalc from '../views/poin/calc.vue'

import DailyLayout from '../views/daily/layout.vue'
import DailySales from '../views/daily/sales.vue'
import DailyCalc from '../views/daily/calc.vue'
import DailySalesDay from '../views/daily/sales-days.vue'

import SalesLayout from '../views/sales/layout.vue'
import Time from '../views/sales/time.vue'
import Week from '../views/sales/week.vue'
import Days from '../views/sales/days.vue'
import Month from '../views/sales/month.vue'
import ShopRank from '../views/sales/shopRank.vue'
import CostList from '../views/sales/costList.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopLayout,
    children:[
      {
        path: '/shop/salse-days',
        name: 'sales-days',
        component: SalesDays,
      },
      {
        path: '/shop/salse-list',
        name: 'sales-list',
        component: SalesList,
      },
      {
        path: '/shop/salse-times',
        name: 'sales-times',
        component: SalesTimes,
      },
      {
        path: '/shop/salse-week',
        name: 'sales-week',
        component: SalesWeek,
      },
      {
        path: '/shop/salse-month',
        name: 'sales-month',
        component: SalesMonth,
      },
      {
        path: '/shop/machine-remote',
        name: 'machine-remote',
        component: MachineRemote
      },
      {
        path: '/shop/machine-remote-list',
        name: 'machine-remote-list',
        component: MachineRemoteList
      },
      {
        path: '/shop/machine-list',
        name: 'machine-list',
        component: MachineList
      },
      {
        path: '/shop/shop-info',
        name: 'shop-info',
        component: ShopInfo
      },
     
    ]
  },
  {
    path: '/kiosk',
    name: 'kiosk',
    component: KioskLayout,
    children: [
      {
        path: '/kiosk/sales-days',
        name: 'kiosk-sales-days',
        component: KioskSalesDay,
      },
      {
        path: '/kiosk/option',
        name: 'kiosk-option',
        component: KioskOption
      },
      {
        path: '/kiosk/product',
        name: 'kiosk-product',
        component: KioskProduct
      },
      {
        path: '/kiosk/event',
        name: 'kiosk-event',
        component: KioskEvent
      },
      {
        path: '/kiosk/control',
        name: 'kiosk-control',
        component: KioskControl
      },
      {
        path: '/kiosk/member-list',
        name: 'member-list',
        component: MemberList
      },
      {
        path: '/kiosk/point-plus-list',
        name: 'point-plus-list',
        component: PointPlusList
      },
      {
        path: '/kiosk/point-minus-list',
        name: 'point-minus-list',
        component: PointMinusList
      },
      {
        path: '/kiosk/snsMarketing.vue',
        name: 'snsMarketing',
        component: snsMarketing
      },
      {
        path: '/kiosk/snsMarketing-list.vue',
        name: 'snsMarketing-list',
        component: snsMarketingList
      },
      {
        path: '/kiosk/point-chage-list',
        name: 'point-chage-list',
        component: PointChageList
      },
      {
        path: '/kiosk/point-use-list',
        name: 'point-use-list',
        component: PointUseList
      },
    ]
  },
  {
    path: '/poin',
    name: 'poin',
    component: PoinLayout,
    children: [
      {
        path: '/poin/sales',
        name: 'poin-sales',
        component: PoinSales,
      },
      {
        path: '/poin/sales-days',
        name: 'poin-sales-days',
        component: PoinSalesDay,
      },
      {
        path: '/poin/calc',
        name: 'poin-calc',
        component: PoinCalc,
      },
    ]
  },
  {
    path: '/daily',
    name: 'daily',
    component: DailyLayout,
    children: [
      {
        path: '/daily/sales',
        name: 'daily-sales',
        component: DailySales,
      },
      {
        path: '/daily/sales-days',
        name: 'daily-sales-days',
        component: DailySalesDay,
      },
      {
        path: '/daily/calc',
        name: 'daily-calc',
        component: DailyCalc,
      },
    ]
  },
  {
    path: '/sales',
    name: 'sales',
    component: SalesLayout,
    children: [
      {
        path: '/sales/time',
        name: 'time',
        component: Time,
      },
      {
        path: '/sales/week',
        name: 'week',
        component: Week,
      },
      {
        path: '/sales/days',
        name: 'days',
        component: Days,
      },
      {
        path: '/sales/month',
        name: 'month',
        component: Month,
      },
      {
        path: '/sales/shopRank',
        name: 'shopRank',
        component: ShopRank,
      },
      {
        path: '/sales/costList',
        name: 'costList',
        component: CostList,
      },
    ]
  }   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
