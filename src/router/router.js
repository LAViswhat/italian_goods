import { createWebHistory, createRouter } from "vue-router";
import IgHome from "@/views/Home/IgHome.vue";
import IgAbout from "@/views/IgAbout.vue";
import IgProductCatalog from "@/views/IgProductCatalog.vue";
import IgPrivacyPolicy from "@/views/IgPrivacyPolicy.vue";
import IgNotFound from "@/views/IgNotFound.vue";
import IgProductPage from "@/views/IgProductPage.vue";
import IgCheckout from "@/views/Checkout/IgCheckout.vue";
import IgSuccesfullOrder from "@/views/IgSuccesfullOrder.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: IgHome,
    meta: { showHeader: true },
  },
  {
    path: "/about",
    name: "about",
    component: IgAbout,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: IgProductCatalog,
  },
  {
    path: "/catalog/:productname",
    name: "product",
    component: IgProductPage,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: IgCheckout,
  },
  {
    path: "/checkout/success/order_:orderId",
    name: "succesfullOrder",
    component: IgSuccesfullOrder,
  },
  {
    path: "/privacy",
    name: "privacy",
    component: IgPrivacyPolicy,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: IgNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: "smooth" });
      }, 300);
    });
  },
});

export default router;
