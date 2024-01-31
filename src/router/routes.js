import HomePage from "../views/homepage/HomePage.vue";
import TestRoute from "../views/testRoute/TestRoute.vue";
import ServicePage from "../views/ServicesPage/ServicesPage.vue";
import ProductPage from "../views/ProductPage/ProductPage.vue";
import BlogPage from "../views/BlogPage/BlogPage.vue";
import ExhibitPage from "../views/ExhibitPage/ExhibitPage.vue";

let routes = [
  { path: "/", component: HomePage },
  { path: "/exhibits", component: ExhibitPage },
  { path: "/services", component: ServicePage },
  { path: "/products", component: ProductPage },
  { path: "/articles_and_blog", component: BlogPage },
  { path: "/test-route", component: TestRoute },
];

export default routes;
