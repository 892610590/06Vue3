import Vue from 'vue'
import VueRouter from 'vue-router'
import page1 from '../components/page1'
import page2 from '../components/page2'
import page3 from '../components/page3'
import page4 from '../components/page4'


Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'page1',
        component: page1
    },{
        path: '/page2',
        name: 'page2',
        component: page2
    },{
        path: '/page3',
        name: 'page3',
        component: page3
    },{
        path: '/page4',
        name: 'page4',
        component: page4
    }
]
const router = new VueRouter({
    routes,mode: 'history'
})
export default router