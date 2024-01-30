<template>
  <div data-testid="home">
    <div class="offset-top-main"></div>
    <section id="hero" data-testid="hero">
      <div class="default_body_padding hero-main">
        <div class="container-fluid">
          <div class="row hero-contents justify-content-center">
            <div class="col-12 col-md-6 col-xl-5 col-xxl-5">
              <div
                class="hero-text-box hero-height offset-top-half offset-bottom-quater"
              >
                <h1 class="text-h3 text-h2-lg">
                  We are <br />
                  Designers <br />
                  <span class="ht-dev-text">Developers</span> <br />
                  <span class="ht-artist-text">Artists </span>
                  <img
                    class="ht-extras-ring"
                    src="../../assets/images/extras/ring.svg"
                  />
                  <img
                    class="ht-extras-ring"
                    src="../../assets/images/extras/ring.svg"
                  />
                  <img
                    class="ht-extras-ring"
                    src="../../assets/images/extras/ring.svg"
                  />
                  <br />
                </h1>
                <div class="ht-anim-extras">
                  <span class="ht-dev-backgound"></span><br />
                  <span class="ht-line line1"></span><br />
                  <span class="ht-line line2"></span><br />
                  <span class="ht-line line3"></span><br />
                  <span class="ht-line line4"></span><br />
                </div>
              </div>
              <div class="hanging-about">
                <div class="hanging-bar-x center"></div>
                <div class="hanging-bar-y center"></div>
                <div class="hanging-pivot center"></div>
                <div
                  class="hanging-content center padding-quater offset-top-half"
                >
                  <p>
                    <span class="text-small-bold"
                      >BUILD THE POWERFUL AND PRODUCTIVE ONLINE PLATFORM FOR
                      YOUR BUSINESS</span
                    >
                    <br />
                    <span class="text-small-regular text-small-bold-md">
                      Five and Six Technologies is the loud voice your brand
                      needs. Our team of incredibly talented experts aim to give
                      you variety of tailor made digital solutions and strategy
                      for your businesses.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-7 col-xxl-6">
              <div class="hero-image-box hero-height">
                <img
                  class="hero-image-extra"
                  src="../../assets/images/tripple ring.svg"
                />
                <img
                  class="hero-image center"
                  src="../../assets/images/illustration-hero.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-backgrounds">
        <div style="" class="hero-bg-container">
          <div class="hero-background-box hero-height">
            <div class="bg-gray">
              <svg
                class="hb-img-mobile1"
                preserveAspectRatio="none"
                width="833"
                height="701"
                viewBox="0 0 833 701"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 162.579C112.239 190.578 165.328 97.4044 241.634 98.2199C350.507 99.3836 415.633 185.197 525.755 125.221C635.878 65.2449 684.436 -66.1455 833 40.2862C833 240.934 833 684.423 833 684.423C752.255 734.287 556.616 653.875 431.755 673.429C291.255 695.432 187.255 641.127 0 684.423V162.579Z"
                  fill="#E6E6E6"
                />
              </svg>
            </div>
            <div class="bg-papaya">
              <svg
                class="hb-img-mobile2"
                preserveAspectRatio="none"
                width="833"
                height="695"
                viewBox="0 0 833 695"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M833 626.493C714.5 694.12 660.5 525.69 578 544.37C472.796 568.192 506.5 671.463 374.5 654.033C248.615 637.41 234 516.254 0 640.488V5.00366C199 -29.9963 234.223 133.048 424 49.3295C613.777 -34.3892 723 287.829 833 5.00366V626.493Z"
                  fill="#FFBE5E"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="cta-top" data-testid="cta-top">
      <div class="cta-top-container default_body_padding">
        <div class="container-fluid">
          <div class="row offset-top-1 align-items-center offset-top-none-md">
            <div class="col-12 col-md-6">
              <div class="cta-top-texts">
                <h3 class="text-h6-regular">
                  Let us help you create a productive business experience.
                </h3>
                <p class="text-body-regular offset-top-quater">
                  Are you in need of winning solutions to boost your business
                  online performances? If so, then let&apos;s get started with
                  it already. We are ready to create a successful solution for
                  your business. There is no time to waste. Let&apos;s get
                  productive now.
                </p>
                <div class="cta-text-bg-1"></div>
                <div class="cta-text-bg-2"></div>
              </div>
              <div class="cta-buttons offset-top-half">
                <button @click="scrollToContact" class="box button_fill_1_round text-body-bold">
                  Get In Touch Now!
                </button>
              </div>
            </div>
            <div class="col-12 col-md-6 d-none d-md-block">
              <img
                class="cta-img offset-top-half center"
                src="../../assets/images/cta-top-img.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="offset-top-half" data-testid="services">
      <div class="services-container">
        <div class="services-main">
          <div class="default_body_padding">
            <div class="container-fluid">
              <div
                id="service-top-row"
                class="row offset-top-1 align-items-xl-center justify-content-xl-center"
              >
                <div class="col-12 lg-sbh">
                  <div class="service-box service-head center">
                    <h3 class="text-h5 text-h4-lg text-center">Our Services</h3>
                    <p class="text-body-regular text-center">
                      From art and designs, to systems and structures, Learn
                      about our array of In class digital services and tools
                      that we offer to clients.
                    </p>
                  </div>
                </div>

                <div
                  class="col-12 lg-sbs offset-top-half offset-top-1-md offset-top-none-xl"
                >
                  <div
                    class="service-box modern-webdesign center service-right"
                  >
                    <div class="container-fluid">
                      <div class="row align-items-center">
                        <div class="service-texts col-12">
                          <h3
                            class="text-subheading-bold text-center text-left-md"
                          >
                            Modern Web Design
                          </h3>
                          <p class="text-body-regular text-center text-left-md">
                            We create functional and astetically pleasing web
                            sites to cater for your business needs. Showcase
                            your services and business to your potential
                            customers with a beautiful website. Move your simple
                            business operations online and easy to access. Open
                            up your business to another vista of possibilities
                          </p>
                        </div>

                        <div
                          class="col-12 service-image-box offset-top-half offset-top-quater-md"
                        >
                          <div class="service-image-bg">
                            <img
                              src="../../assets/images/modern-webdesign.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="service-action-box offset-top-quater d-none">
                      <button class="buttonStyle2 text-body-bold">
                        Request a Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div id="service-second-row" class="row">
                <!--the first column nests two services-->
                <div class="col-12 offset-top-half">
                  <div
                    class="service-box modern-webdesign service-left mobile-app center"
                  >
                    <div class="container-fluid">
                      <div class="row align-items-center">
                        <div class="service-texts col-12 order-xl-2">
                          <h3
                            class="text-subheading-bold text-center text-left-md"
                          >
                            Mobile App Development
                          </h3>
                          <p class="text-body-regular text-center text-left-md">
                            We design fully optimized mobile applications. Now
                            your customers can access your services with ease.
                            With a mobile app for your business, you will be
                            open to a whole new world of possibility in sales,
                            advert, customer service etc.
                          </p>
                        </div>

                        <div
                          class="col-12 service-image-box order-xl-1 offset-top-half offset-top-quater-md"
                        >
                          <div class="service-image-bg pos-left">
                            <img
                              src="../../assets/images/modern-webdesign.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="service-action-box offset-top-quater d-none">
                      <button class="buttonStyle2 text-body-bold">
                        Request a Quote
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 offset-top-half">
                  <div
                    class="service-box modern-webdesign service-right ui-ux-graphics center"
                  >
                    <div class="container-fluid">
                      <div class="row align-items-center">
                        <div class="service-texts col-12">
                          <h3
                            class="text-subheading-bold text-center text-left-md"
                          >
                            Graphics &amp; UI/UX
                          </h3>
                          <p class="text-body-regular text-center text-left-md">
                            We give artistic services in the area of Graphics
                            designing. We design Logos, Social Media Posts,
                            Flyers, Cover Images that aligns to your brand. We
                            create stunning visuals that makes your business and
                            services stand out.
                          </p>
                        </div>

                        <div
                          class="col-12 service-image-box offset-top-half offset-top-quater-md"
                        >
                          <div class="service-image-bg">
                            <img
                              src="../../assets/images/modern-webdesign.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="service-action-box offset-top-quater d-none">
                      <button class="buttonStyle2 text-body-bold">
                        Request a Quote
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-12 offset-top-half">
                  <div
                    class="service-box modern-webdesign service-left animations-2d center"
                  >
                    <div class="container-fluid">
                      <div class="row align-items-center">
                        <div class="service-texts col-12 order-xl-2">
                          <h3
                            class="text-subheading-bold text-center text-left-md"
                          >
                            2d Animations
                          </h3>
                          <p class="text-body-regular text-center text-left-md">
                            We design and create a variety of very engaging 2d
                            animated videos. Customers find short videos more
                            engaging, and even better, animated videos. What
                            better way to generate more leads and showcase your
                            services and products online than with a targeted
                            animated video?
                          </p>
                        </div>

                        <div
                          class="col-12 order-xl-1 service-image-box offset-top-half offset-top-quater-md"
                        >
                          <div class="service-image-bg pos-left">
                            <img
                              src="../../assets/images/modern-webdesign.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="service-action-box offset-top-quater d-none">
                      <button class="buttonStyle2 text-body-bold">
                        Request a Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="services-bg-container">
          <div>
            <svg
              preserveAspectRatio="none"
              class="sbi"
              width="1440"
              height="545"
              viewBox="0 0 1440 545"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1441 256C497.982 369.5 480.903 218.722 -0.999709 179V540C549.536 584.248 1104.89 299.83 1441 540V256Z"
                fill="#E8E0F3"
              />
              <path
                d="M-0.999878 77.0485C794.253 265.989 959.762 39.7475 1442 0V361.227C891.082 405.503 335.344 120.906 -0.999878 361.227V77.0485Z"
                fill="#F4ECFF"
              />
            </svg>
            <svg
              preserveAspectRatio="none"
              width="1440"
              class="sbi-ma sbi"
              height="545"
              viewBox="0 0 1440 545"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-6.10352e-05 256C941.71 369.5 958.765 218.722 1440 179V540C890.227 584.248 335.645 299.83 -6.10352e-05 540V256Z"
                fill="#E8E0F3"
              />
              <path
                d="M1440 77.0485C645.85 265.989 480.569 39.7475 -0.999928 0V361.227C549.155 405.503 1104.12 120.906 1440 361.227V77.0485Z"
                fill="#F4ECFF"
              />
            </svg>
          </div>
          <div class="sbg-floating d-none d-md-block">
            <div class="sbg-f1 text-center"></div>
            <div class="sbg-f2 text-center"></div>
            <div class="sbg-f3 text-center"></div>
            <div class="sbg-f4 text-center"></div>
            <div class="sbg-f5 text-center"></div>
            <div class="sbg-f6 text-center"></div>
            <div class="sbg-f7 text-center"></div>
            <div class="sbg-f8 text-center"></div>
            <div class="sbg-f9 text-center"></div>
            <div class="sbg-f10 text-center"></div>
            <!--
          --></div>
        </div>
      </div>
    </section>

    <section id="exhibits" class="offset-top-1">
      <div class="exhibits-container default_body_padding offset-top-1">
        <div>
          <div class="exhibits-head">
            <h1 class="text-center text-h3 text-h2-lg">
              Projects &amp; Exhibits
            </h1>
            <p
              class="text-center center text-body-regular eh-text offset-top-quater"
            >
              See our portfolio of exciting projects in various categories. Only
              the latest project from each categories are shown here.
              <a class="eh-link">Visit our exhibit page</a> to see more of our
              projects now.
            </p>
          </div>
          <div class="container-fluid">
            <div class="exhibits-select row justify-content-center">
              <div>
                <button class="buttonOutline1 buttonOutline1_active center">
                  All
                </button>
              </div>
              <div>
                <button class="buttonOutline1 center">Web Design</button>
              </div>
              <div>
                <button class="buttonOutline1 center">
                  Mobile Development
                </button>
              </div>
              <div>
                <button class="buttonOutline1 center">
                  2d Animated Videos
                </button>
              </div>
              <div>
                <button class="buttonOutline1 center">
                  Graphics & UI/UX Design
                </button>
              </div>
            </div>
          </div>
          <div class="offset-top-1">
            <div class="portfolio-item-container">
              <div class="container-fluid">
                <div class="row no-margin p-item-head align-items-center">
                  <div><img src="../../assets/images/p.svg" /></div>
                  <div class="height-fit">
                    <p class="text-h5-regular">Clarissa Morganstein</p>
                  </div>
                </div>
                <div class="p-item-body">
                  <p class="text-subheading-regular offset-top-half">
                    About This Project:
                  </p>
                  <p class="text-body-regular">
                    This project was designed and developed for our client at
                    Clarissa Morganstein Clothing Line. Packing eye catching
                    visuals and a easy to navigate interface, this website
                    accomplishes the goal of making it easy for customers to
                    make orders for dresses and other products. The feedback
                    system is immaculate and allows 24 hour real time chat
                    between Clarissa Morganstein customer service and the
                    client. Overall client satisfaction with the product and the
                    ease of use has allowed clarissa morganstein to generate
                    over 12k sales from the site alone. And that is not even
                    stratching the surface, because it has the potential to more
                    than quadruple that amount in sales over the next quater of
                    the year.
                  </p>
                </div>
                <div class="p-video-item offset-top-half">
                  <div class="p-video-container offset-top-quater">
                    <img src="../../assets/images/p-video-cover.png" />
                  </div>
                </div>
                <div class="features offset-top-quater">
                  <div class="container-fluid">
                    <div class="feature-items row">
                      <div><p class="text-body-bold">Features:</p></div>
                      <div>
                        <button class="buttonOutline2 center">
                          Order Management & Tracking
                        </button>
                      </div>
                      <div>
                        <button class="buttonOutline2 center">
                          Integrated Payment Gateway
                        </button>
                      </div>
                      <div>
                        <button class="buttonOutline2 center">
                          Site Analytics
                        </button>
                      </div>
                      <div>
                        <button class="buttonOutline2 center">
                          Fluid User Account Management
                        </button>
                      </div>
                      <div>
                        <button class="buttonOutline2 center">
                          Social Media Integration
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="exhibits-more-image offset-top-quater">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12 col-lg-6 offset-top-quater">
                        <div class="emm-background">
                          <img src="../../assets/images/p-video-cover.png" />
                        </div>
                      </div>
                      <div class="col-12 col-lg-6 offset-top-quater">
                        <div class="emm-background">
                          <img src="../../assets/images/p-video-cover.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="exhibits-link-button offset-top-half">
            <button class="button_fill_1_round text-body-bold">
              See more of our projects here
            </button>
          </div>
          <div class="offset-top-1"></div>
        </div>
      </div>
    </section>

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

    <section
      id="contact-section"
      class="offset-top-1 offset-bottom-1 default_body_padding"
    >
      <div class="contact-container">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-6 no-gutter">
              <div class="contact-methods offset-top-1 offset-bottom-1">
                <div>
                  <h3 class="text-h3">Contact Us</h3>
                  <p class="text-body-regular offset-top-quater">
                    Contact us via the following platforms, We typically respond
                    to messages within at least 30 minutes.
                  </p>
                </div>
                <div>
                  <div class="contact-method offset-top-half container-fluid">
                    <div class="row align-items-center">
                      <div class="cm-img width-fit">
                        <img src="../../assets/images/extras/envelope.svg" />
                      </div>
                      <div class="cm-details width-fit">
                        <a href="#">adefuyeabayomi16@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="contact-method offset-top-half container-fluid">
                    <div class="row align-items-center">
                      <div class="cm-img width-fit">
                        <img src="../../assets/images/extras/phone.svg" />
                      </div>
                      <div class="cm-details width-fit">
                        <a href="#">+234 81 3624 3796</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="contact-method offset-top-half container-fluid">
                    <div class="row align-items-center">
                      <div class="cm-img width-fit">
                        <img src="../../assets/images/extras/whatsapp.svg" />
                      </div>
                      <div class="cm-details width-fit">
                        <a href="#">+234 81 3624 3796</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 no-gutter">
              <div
                class="contact-by-instant-message offset-top-1 offset-bottom-1"
              >
                <div>
                  <p class="text-h5-regular">Send an Instant message</p>
                  <p class="text-small-regular">
                    Send us a message. Fill the message you want to pass to us.
                    Please include your email so we can reply you.
                  </p>
                </div>
                <div class="contact-inputs">
                  <div class="offset-top-quater">
                    <input :value="instantEmail" @change="(e) => this.instantEmail = e.target.value" class="ci-email" type="email" />
                  </div>
                  <div class="offset-top-quater">
                    <textarea :value="instantMessage" @change="(e) => this.instantMessage = e.target.value" class="ci-message"></textarea>
                  </div>
                  <div class="offset-top-quater">
                    <button @click="sendInstantMessage" class="buttonStyle3 text-body-regular">
                      Send Your Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="footer-section">
      <div class="offset-top-1 offset-bottom-1 default_body_padding">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-6 col-xl-3 no-gutter">
              <div class="fs-quicklinks offset-top-quater">
                <p class="text-body-bold fs-sec-title">Quick Navigation</p>
                <div class="fs-ql-container">
                  <ul class="fs-list">
                    <li class="text-body-regular">Homepage</li>
                    <li class="text-body-regular">What we do</li>
                    <li class="text-body-regular">Our Products</li>
                    <li class="text-body-regular">Our Exhibits & Projects</li>
                    <li class="text-body-regular">
                      Blog: Trending Articles &amp; Videos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3 no-gutter">
              <div class="fs-services offset-top-quater">
                <p class="text-body-bold fs-sec-title">Services</p>
                <div class="fs-ql-container">
                  <ul class="fs-list">
                    <li class="text-body-regular">Modern Web Design</li>
                    <li class="text-body-regular">Mobile App Development</li>
                    <li class="text-body-regular">UI/UX Design</li>
                    <li class="text-body-regular">Graphics Design</li>
                    <li class="text-body-regular">2d Animation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3 no-gutter">
              <div class="fs-products offset-top-quater">
                <p class="text-body-bold fs-sec-title">Our Products</p>
                <div class="fs-ql-container">
                  <ul class="fs-list">
                    <li class="text-body-regular">Showa (Coming Soon)</li>
                    <li class="text-body-regular">
                      Scribba Designer (Coming Soon)
                    </li>
                    <li class="text-body-regular">Baddie (Coming Soon)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-3 no-gutter">
              <div class="fs-customer-service offset-top-quater">
                <p class="text-body-bold fs-sec-title">Customer Services</p>
                <div class="fs-ql-container">
                  <ul class="fs-list">
                    <li class="text-body-regular">
                      Frequently Asked Questions (FAQs)
                    </li>
                    <li class="text-body-regular">
                      Hotline: =234 81 3624 3796
                    </li>
                  </ul>
                </div>
              </div>
              <div class="fs-socials offset-top-quater">
                <p class="text-body-bold fs-sec-title fss-title">
                  Follow Us On Social Media:
                </p>
                <div class="fs-social-images">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="no-gutter fss-social-img width-fit">
                        <img src="../../assets/images/extras/facebook.svg" />
                      </div>
                      <div class="no-gutter fss-social-img width-fit">
                        <img src="../../assets/images/extras/twitter.svg" />
                      </div>
                      <div class="no-gutter fss-social-img width-fit">
                        <img src="../../assets/images/extras/youtube.svg" />
                      </div>
                      <div class="no-gutter fss-social-img width-fit">
                        <img src="../../assets/images/extras/dribbble.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-h4 p-2 text-h2-sm text-h1-md text-center">
        FIVE &AMP; SIX TECHNOLOGIES
      </div>
    </section>
  </div>
</template>

<script>
import "./homepage.css";
import "./cta-services.css";
import "./homepage-animation.css";
import "./exhibits.css";
import "./contact-footer.css";
import "./floatingAnimation.css";
import "vue3-carousel/dist/carousel.css";
import emailJs from "@emailjs/browser"
emailJs.init("YkA1j7p8Bx0Y9hT0X");
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "Homepage",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      instantEmail : "",
      instantMessage: "",
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
    };
  },
  methods : {

    scrollToContact (){
    console.log("scrolling")
    this.$scrollTo("#contact-section", {
    offset: -60,
    ease: 'in-out-quad',
    duration: 1500
  });

    },
    async sendInstantMessage (){
      let serviceId = "service_w2x0zwf"
      let templateId = "template_ppiil2m"
      let templateParams = {
        from_email: this.instantEmail, 
        message: this.instantMessage
      } 
      console.log("tempParams", templateParams)
      let sent = await emailJs.send(serviceId, templateId, templateParams)
      console.log(sent)
    }
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
};
</script>

<style></style>
