import gsap from "gsap";

let gsapPlugin = {
  install(app) {
    app.config.globalProperties.$gsap = gsap;
  },
};

export default gsapPlugin;
