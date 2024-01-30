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
import Hero from "./Hero.vue"
import Services from "./Services.vue"
import Exhibits from "./Exhibits.vue"
import PostsPreview from "./PostsPreview.vue";
import Contact from "./Contact.vue";
import "./homepage.css";
import "./cta-services.css";
import "./homepage-animation.css";
import "./exhibits.css";
import "./contact-footer.css";
import "./floatingAnimation.css";
import "vue3-carousel/dist/carousel.css";



export default {
  name: "Homepage",
  components: {

    Hero, Services, Exhibits, PostsPreview, Contact
  },
  data() {
    return {
    };
  },
  mounted() {
    /*
    let tl1 = this.$gsap.timeline()
    tl1.to('.line1',{delay: 0, repeat: -1, yoyo: true , duration : 1.5, width: '70%'})
    let tl4 = this.$gsap.timeline()
    tl4.to(".line4",{delay : 3, repeat: -1, yoyo: true , duration : 1.5, width: '70%'})
    let tl2 = this.$gsap.timeline()
    tl2.to(".line2",{delay: 1, repeat: -1, yoyo: true, duration : 1.5, width: '100%'})    
    let tl3 = this.$gsap.timeline()
    tl3.to(".line3",{delay: 0, repeat: -1, yoyo: true , duration : 2, width: '125%', ease: 'elastic'})    
    */

    let tl5 = this.$gsap.timeline();
    tl5.to(".hanging-content", {
      rotation: 7,
      yoyo: true,
      duration: 3,
      repeat: -1,
    });
  },
  methods : {
    scrollToContact (){
    console.log("scrolling")
    this.$scrollTo("#contact-section", {
    offset: -60,
    ease: 'in-out-quad',
    duration: 1500
  });
    }
  },
};
</script>

<style></style>
