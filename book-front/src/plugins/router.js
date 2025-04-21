import {createRouter , createWebHistory} from "vue-router";

const  routes = [
    
    {
        path: '/',
        // component: HomePage,
        component: () => import('@/Pages/HomePage.vue')
    },
    {
        path: '/book-info',
        component: () =>  import('@/Pages/BookInfoPage.vue')
    }
   
]

export default  createRouter(
    {
        history: createWebHistory(),
        routes
    }
)