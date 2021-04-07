import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '../components/catalog'
import Cart from '../components/cart'

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: Catalog
        },
        {
            path: 'cart',
            name: 'cart',
            component: Cart,
            props: true
        }

    ]
});

export default router;