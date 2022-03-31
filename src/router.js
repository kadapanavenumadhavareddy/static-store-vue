import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      component: () => import("./Pages/LoginPage.vue"),
    },
    {
      path: "/signup",
      component: () => import("./Pages/SignUp.vue"),
    },
    {
      path: "/",
      component: () => import("./Pages/HomePage.vue"),
    },
    {
      path: "/productdetails",
      name: "productdetail",
      component: () => import("./components/ProductDetails.vue"),
      props: true,
    },
    {
      path: "/checkoutpage",
      component: () => import("./Pages/CheckoutPage.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("./Pages/PageNotFound.vue"),
    },
  ],
});
export default router;
