<template>
  <section>
    <div class="default_body_padding header-wrapper" :class="{ down }">
      <header role="header" class="app-header">
        <div aria-baller="true" class="container-fluid">
          <div class="hha row height-2 align-items-center">
            <div
              id="logo"
              class="col-6 col-sm-3 col-md-4 col-lg-2 order-sm-1 order-lg-1 no-gutter"
            >
              <div class="height-fit">
                <img src="../../assets/images/logo/logo_main.svg" alt="Five and Six Technologies - Company Logo"/>
              </div>
            </div>

            <div
              id="nav-desktop"
              class="col-8 order-sm-4 col-lg-8 order-lg-2 d-none d-lg-block no-gutter"
            >
              <div class="height-fit">
                <nav>
                  <ul class="width-fit center">
                    <li>
                      <router-link
                        to="/"
                        :class="{ homeActive }"
                        class="text-body-bold text-no-decoration"
                        >Home</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/products"
                        :class="{}"
                        class="text-body-regular text-no-decoration"
                        >Products</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/services"
                        :class="{}"
                        class="text-body-regular text-no-decoration"
                        >Services</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/exhibits"
                        :class="{}"
                        class="text-body-regular text-no-decoration"
                        >Exhibits</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/articles_and_blog"
                        :class="{}"
                        class="text-body-regular text-no-decoration"
                        >Articles & Videos</router-link
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div
              id="nav-mobile"
              class="col-6 col-sm-1 order-sm-3 order-lg-4 d-lg-none no-gutter"
            >
              <div class="ham-box">
                <Hamburger @open="openMobileMenu"></Hamburger>
              </div>
            </div>
            <div
              id="get-in-touch"
              class="col-2 col-sm-8 col-md-7 col-lg-2 order-sm-2 order-lg-3 d-none d-sm-block no-gutter"
            >
              <div class="height-fit class">
                <div class="justify-content-right">
                  <button class="fst-contact-button-header text-small-bold">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div
      id="mobile-menu"
      :class="{ open: mobileMenuOpen, down }"
      class="default_body_padding mobile-nav"
      role="mobile_menu"
    >
      <div>
        <h2 class="text-subheading-bold">Menu</h2>
      </div>
      <nav>
        <ul>
          <li>
            <router-link
              to="/"
              :class="{ homeActive }"
              class="text-body-bold text-no-decoration"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/products"
              :class="{}"
              class="text-body-regular text-no-decoration"
              >Products</router-link
            >
          </li>
          <li>
            <router-link
              to="/services"
              :class="{}"
              class="text-body-regular text-no-decoration"
              >Services</router-link
            >
          </li>
          <li>
            <router-link
              to="/exhibits"
              :class="{}"
              class="text-body-regular text-no-decoration"
              >Exhibits</router-link
            >
          </li>
          <li>
            <router-link
              to="/articles_and_blog"
              :class="{}"
              class="text-body-regular text-no-decoration"
              >Articles & Videos</router-link
            >
          </li>
        </ul>
      </nav>
    </div>

    <button @click="down = !down">Toggle Down</button>
  </section>
</template>

<script>
import "./header.css";
import Hamburger from "../hamburger/Hamburger.vue";
export default {
  components: { Hamburger },
  data() {
    return {
      homeActive: true,
      down: false,
      mobileMenuOpen: false
    };
  },
  computed: {

  },
  methods: {
    openMobileMenu(open) {
      this.mobileMenuOpen = open;
    },
  },
};
</script>
