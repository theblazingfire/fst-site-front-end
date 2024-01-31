<template>
  <div data-testid="home">
    <!--hero , cta, services, exhibits, posts, contact, footer-->
    <Hero></Hero>
    <Services></Services>
    <Exhibits></Exhibits>
    <PostsPreview></PostsPreview>
    <Contact></Contact>
  </div>
</template>

<script>
import Hero from "./Hero.home.vue";
import Services from "./Services.home.vue";
import Exhibits from "./Exhibits.home.vue";
import PostsPreview from "./PostsPreview.home.vue";
import Contact from "./Contact.home.vue";
import "./style.homepage.css";
import "./style.cta.css";
import "./style.services.css";
import "./style.exhibits.css";
import "./style.contact.css";
import "./style.homepage-animation.css";
import "./style.floatingAnimation.css";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "Homepage",
  components: {
    Hero,
    Services,
    Exhibits,
    PostsPreview,
    Contact,
  },
  mounted() {
    let tl5 = this.$gsap.timeline();
    tl5.to(".hanging-content", {
      rotation: 7,
      yoyo: true,
      duration: 3,
      repeat: -1,
    });
  },
};
</script>

<style></style>
