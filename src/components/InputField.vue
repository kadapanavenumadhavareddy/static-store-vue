<template>
  <span class="p-input-icon-left p-float-label">
    <i class="pi" :class="Icon" />
    <slot></slot>
    <label for="username">{{ Label }}</label>
  </span>
</template>
<script>
export default {
  props: {
    Icon: {
      type: String,
      required: true,
    },
    Label: {
      type: String,
      default: "Label",
    },
  },
};
</script>
<style scoped>
span.p-input-icon-left.p-float-label {
  margin-top: 20px;
}
.pi {
  margin-left: 5px;
}
</style>
