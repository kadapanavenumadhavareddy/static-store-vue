import { createRouter, createWebHashHistory } from "vue-router";
import SignUp from "./Pages/SignUp.vue";
import Login from "./Pages/LoginPage.vue";
import HomePage from "./Pages/HomePage.vue";
import ProductDetails from "./components/ProductDetails.vue";
import Checkoutpage from "./Pages/CheckoutPage.vue";
import PageNotFound from "./Pages/PageNotFound.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/signup",
      component: SignUp,
    },
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/productdetails",
      name: "productdetail",
      component: ProductDetails,
      props: true,
    },
    {
      path: "/checkoutpage",
      component: Checkoutpage,
    },
    {
      path: "/:pathMatch(.*)",
      component: PageNotFound,
    },
  ],
});
export default router;
