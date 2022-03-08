<template>
  <button
    @click="
      () => {
        $emit('clickeventupdate');
      }
    "
    :class="[width, color, 'bs']"
  >
    {{ message }}
  </button>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    width: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  emits: ["clickeventupdate"],
};
</script>
<style scoped>
button {
  border: none;
  height: 40px;
  border-radius: 8px;
  color: white;
}
.min {
  padding: 8px 25px;
}
.max {
  width: 100%;
}
.primary {
  background-color: rgb(255, 216, 20);
}
.secondary {
  background-color: darkgreen;
}
</style>
