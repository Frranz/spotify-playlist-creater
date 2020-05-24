import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)


// Store
import store from "./store"


// Routes
import Login from "./pages/Login";
import Start from "./pages/Start";
import LoginCallback from "./pages/LoginCallback";

const routes = [
  {path: '/', component: Start, name: 'start'},
  {path: '/login', component: Login, name: 'login'},
  {path: '/authCallback', component: LoginCallback, name: 'authCallback'}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
  } else if (to.name === 'authCallback' || to.name === 'login') {
    next()
  } else {
    next('/login')
  }
});

// Vue
new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
