<template>
  <router-link
    :to="{ name: 'productdetail', params: { id: product.id } }"
    class="rout"
  >
    <div class="product bs">
      <div class="img">
        <img :src="product.image" alt="some image" />
      </div>
      <div class="body">
        <h3 class="title">{{ product.title }}</h3>
        <p class="desc">
          {{ product.description }}
        </p>
        <div class="rat-price">
          <Rating :rating="product.rating.rate"></Rating>
          <div class="price">$ {{ product.price }}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import Rating from "./RatingComponent.vue";
export default {
  name: "HelloWorld",
  components: {
    Rating,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
img {
  width: 100px;
  height: 100px;
}
.product {
  margin: 10px;
  width: max-content;
  background-color: rgba(255, 255, 255, 0.712);
  box-sizing: border-box;
  padding: 10px;
  width: 200px;
}
.desc {
  margin: 0px;
  text-transform: capitalize;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
.title {
  margin: 0px;
  text-transform: capitalize;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
.rat-price {
  display: flex;
  justify-content: space-between;
}
.img:hover.button {
  display: none;
}
.product:hover {
  box-shadow: 0px 1px 6px 0px rgb(170, 240, 9);
}
.rout {
  text-decoration: none;
  color: black;
}
.price {
  margin: 16px 0px;
}
</style>
