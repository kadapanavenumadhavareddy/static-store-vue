<template>
  <div class="rating">
    <p v-for="i in Fullstartcount" :key="i">&#9733;</p>
    <p
      v-for="i in Halfstartcount"
      :key="i"
      class="half-color"
      attribute="&#9733;"
    >
      &#9733;
    </p>
  </div>
</template>
<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true,
    },
  },
  computed: {
    Fullstartcount() {
      return Math.trunc(this.rating);
    },
    Halfstartcount() {
      return this.rating - Math.trunc(this.rating) > 0 ? 1 : 0;
    },
  },
};
</script>
<style scoped>
p.half-color:before {
  content: attr(attribute);
  color: #101010;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  overflow: hidden;
}
p.half-color {
  position: relative;
  color: #ffffff;
}
.rating {
  display: flex;
}
</style>
