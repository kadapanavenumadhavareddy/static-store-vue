<template>
  <div class="modal" @click="modal1">
    <p class="model-box"><span>&#10003;</span>{{ message }}</p>
  </div>
</template>
<script>
export default {
  props: ["message", "route"],
  methods: {
    modal1() {
      this.$router.push(`/${this.route}`);
    },
  },
};
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  left: 0;
  top: 0;
}
.model-box {
  background-color: #fefefe;
  width: max-content;
  margin: 50vh auto 0 auto;
  padding: 20px;
  border: 1px solid #888;
}
span {
  color: green;
  border: 1px solid green;
  width: max-content;
  padding: 4px;
  border-radius: 50%;
}
</style>
