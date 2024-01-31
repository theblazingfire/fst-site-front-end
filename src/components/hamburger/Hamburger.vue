<template>
  <div>
    <div role="ham_icon_container" class="hamburger-container" @click="openHam">
      <div
        :class="{ open: c_toggle }"
        class="menu btn11"
        role="ham_icon"
        data-menu="11"
      >
        <div class="icon-left"></div>
        <div class="icon-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "./hamburger.css";
export default {
  props: {
    open: Boolean,
  },
  emits: ["toggle"],
  data() {
    return {};
  },
  computed: {
    c_toggle() {
      console.log("hamburger open", this.open);
      return this.open;
    },
  },
  methods: {
    openHam() {
      this.$emit("toggle");
    },
  },
};
</script>
