import { DetailComponent } from "./detail.js"

Vue.use(VueRouter);

const routes = [
    {path: '/detail/:id', component: DetailComponent }
];

const router = new VueRouter({routes});

export default router