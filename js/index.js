const routes = [
  {
    path: "/costosdirectos",
    component: CostosDirectos,
  },
  {
    path: "/costosindirectos",
    component: CostosIndirectos,
  },
  {
    path: "/costosfijos",
    component: CostosFijos,
  },
  {
    path: "/costosproduccion",
    component: CostosProduccion,
  },
];

const router = new VueRouter({
  routes,
});

const vue = new Vue({
  el: "#app",
  data: {
    sidebar: false,
    notifacion: false,
    datos:[
      
    ]
  },
  methods: {},
  router,
}).$mount("#app");
