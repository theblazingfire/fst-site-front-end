<template>
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
                  <input
                    :value="instantEmail"
                    class="ci-email"
                    type="email"
                    @change="(e) => (instantEmail = e.target.value)"
                  />
                </div>
                <div class="offset-top-quater">
                  <textarea
                    :value="instantMessage"
                    class="ci-message"
                    @change="(e) => (instantMessage = e.target.value)"
                  ></textarea>
                </div>
                <div class="offset-top-quater">
                  <button
                    class="buttonStyle3 text-body-regular"
                    @click="sendInstantMessage"
                  >
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
</template>

<script>
import emailJs from "@emailjs/browser";
emailJs.init("YkA1j7p8Bx0Y9hT0X");

export default {
  data() {
    return {
      instantEmail: "",
      instantMessage: "",
    };
  },
  methods: {
    async sendInstantMessage() {
      if (this.instantEmail == "" || this.instantMessage == "") {
        alert("please fill in your email and message");
        return;
      }
      let serviceId = "service_w2x0zwf";
      let templateId = "template_ppiil2m";
      let templateParams = {
        from_email: this.instantEmail,
        message: this.instantMessage,
      };
      console.log("tempParams", templateParams);
      let sent = await emailJs.send(serviceId, templateId, templateParams);
      console.log(sent);
      alert(
        "Your message was recieved successfully. We will reply you via the email you inputted",
      );
    },
  },
};
</script>
