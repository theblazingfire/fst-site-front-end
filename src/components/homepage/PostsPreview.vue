<template>

<section id="blog-section" class="offset-bottom-1">
      <div class="offset-top-1 default_body_padding">
        <div class="container-fluid">
          <div>
            <p class="text-h3 text-h2-lg text-center">Posts &amp; Videos</p>           
          </div>
          <div class="post-items ">

            <carousel v-bind="settings" :breakpoints="breakpoints">
              <slide :key="0">
                <div class="pi-container offset-top-half">
                  <div class="post-item">
                    <div class="pi-image-container">
                      <img src="../../assets/images/post-img.png" />
                      <button class="read_button text-body-bold">Read</button>
                    </div>
                    <div class="pi-contents-container">
                      <p class="text-14-regular">
                        Why wage a holy war against AI? AI isn&apos;t taking
                        your jobs, instead take advantage of AI, integrate it to
                        your workflow and deliver faster...
                      </p>
                      <div class="tags-container">
                        <p class="text-small-bold offset-top-quater">
                          #artificial-intelligence #aitech #machine-learning
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
              <slide :key="1">
                <div class="pi-container offset-top-half">
                  <div class="post-item">
                    <div class="pi-image-container">
                      <img src="../../assets/images/post-img.png" />
                      <button class="read_button text-body-bold">Read</button>
                    </div>
                    <div class="pi-contents-container">
                      <p class="text-14-regular">
                        Why wage a holy war against AI? AI isn&apos;t taking
                        your jobs, instead take advantage of AI, integrate it to
                        your workflow and deliver faster...
                      </p>
                      <div class="tags-container">
                        <p class="text-small-bold offset-top-quater">
                          #artificial-intelligence #aitech #machine-learning
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
              <slide :key="2">
                <div class="pi-container offset-top-half">
                  <div class="post-item">
                    <div class="pi-image-container">
                      <img src="../../assets/images/post-img.png" />
                      <button class="read_button text-body-bold">Read</button>
                    </div>
                    <div class="pi-contents-container">
                      <p class="text-14-regular">
                        Why wage a holy war against AI? AI isn&apos;t taking
                        your jobs, instead take advantage of AI, integrate it to
                        your workflow and deliver faster...
                      </p>
                      <div class="tags-container">
                        <p class="text-small-bold offset-top-quater">
                          #artificial-intelligence #aitech #machine-learning
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
              <slide :key="3">
                <div class="pi-container offset-top-half">
                  <div class="post-item">
                    <div class="pi-image-container">
                      <img src="../../assets/images/post-img.png" />
                      <button class="read_button text-body-bold">Read</button>
                    </div>
                    <div class="pi-contents-container">
                      <p class="text-14-regular">
                        Why wage a holy war against AI? AI isn&apos;t taking
                        your jobs, instead take advantage of AI, integrate it to
                        your workflow and deliver faster...
                      </p>
                      <div class="tags-container">
                        <p class="text-small-bold offset-top-quater">
                          #artificial-intelligence #aitech #machine-learning
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
              <template #addons>
                <navigation />
                <pagination />
              </template>
            </carousel>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";



  export default {
    data() {
      return {
        settings: {
        itemsToShow: 1,
        wrapAround: true,
        snapAlign: "start",
        autoplay: 2500
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        500: {
          itemsToShow: 1.3,
        },
        600: {
          itemsToShow: 1.5,
        },
        700: {
          itemsToShow: 1.7,
        },
        800: {
          itemsToShow: 2,
        },
        900: {
          itemsToShow: 2.2,
        },
        // 1024 and up
        1024: {
          itemsToShow: 2.4,
        },
        1100 : {
          itemsToShow: 2.7,
        },
        1200 : {
          itemsToShow: 3,
        },
        1350 : {
          itemsToShow: 3.4,
          snapAlign : "center"
        }
      }, 
      }
    },
    components : {
        Carousel,
    Slide,
    Pagination,
    Navigation,
    }
  };
  </script>