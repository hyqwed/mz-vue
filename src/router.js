import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({

routes:[
    {path:'/films',component:() => import('./views/Film.vue')},
    {path:'/cinemas', component:() => import('./views/Cinema.vue')},
    {path:'/center', component:() => import('./views/Center.vue')},
]
    
})