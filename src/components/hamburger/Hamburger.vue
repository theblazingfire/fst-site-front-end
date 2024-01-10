<template>
  <div>
    <div role="ham_icon_container" class="hamburger-container" @click="openHam">
      <div :class="{ open }" class="menu btn11" role="ham_icon" data-menu="11">
        <div class="icon-left"></div>
        <div class="icon-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "./hamburger.css";
export default {
  emits: ["open"],
  data() {
    return {
      open : false,
    };
  },
  methods: {
    openHam() {
      let ham = !this.open;
      this.open = ham;
      this.$emit("open", ham);
    },
  },
};
</script>
