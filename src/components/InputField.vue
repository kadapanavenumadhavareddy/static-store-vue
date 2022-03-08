<template>
  <input
    :type="inputType"
    :value="modelValue"
    @input="update"
    :placeholder="placeHolder"
    :class="inputWidth"
    v-on:click.prevent.self
    class="bs"
  />
</template>
<script>
export default {
  props: {
    inputType: {
      type: String,
      required: true,
      default: "text",
      validator(value) {
        return ["text", "search", "radio"].includes(value);
      },
    },
    modelValue: {
      type: String,
      required: true,
    },
    placeHolder: {
      type: String,
      default: "Type here..",
    },
    inputWidth: {
      type: String,
      default: "Max",
      validator(value) {
        return ["Max", "Min"].includes(value);
      },
    },
  },
  emits: ["update:modelValue"],
  methods: {
    update(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
<style scoped>
input {
  outline: none;
  border: none;
  caret-color: rgb(48, 46, 46);
  border-radius: 4px;
  height: 30px;
  margin: 10px 0px 10px 10px;
  width: 400px;
  padding-left: 20px;
}
.Min {
  width: 185px;
}
</style>
