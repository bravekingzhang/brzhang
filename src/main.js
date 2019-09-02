import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.config.productionTip = false;
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});
new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app');
