import scrollToElement from "scroll-to-element";

let scrollToPlugin = {
    install(app) {
      app.config.globalProperties.$scrollTo = scrollToElement
    },
  };
  
  export default scrollToPlugin;
