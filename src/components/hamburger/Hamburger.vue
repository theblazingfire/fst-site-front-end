<template>
  <div>
    <div arial-ham="true" class="hamburger-container" @click="openHam">
      <div :class="{ open: hamOpen }" class="menu btn11" data-menu="11">
        <div class="icon-left"></div>
        <div class="icon-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "./hamburger.css";
export default {
  data() {
    return {
      hamOpen: false,
    };
  },
  methods: {
    openHam() {
      let ham = !this.hamOpen;
      this.hamOpen = ham;
      this.$emit("open", ham);
    },
  },
};
</script>
