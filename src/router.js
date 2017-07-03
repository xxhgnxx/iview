import test1 from './views/test1.vue'
import test2 from './views/test2.vue'
const routers = [
    {
    path: '/',
    meta: {
        title: '首页'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},
{
    path: '/test1',
    meta: {
        title: 'test1'
    },
    component: test1
},
{
    path: '/test2',
    meta: {
        title: 'test2'
    },
    component:test2
},
];

export default routers;