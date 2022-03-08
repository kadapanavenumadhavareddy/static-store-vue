<template>
  <div class="product-delivery">
    <div class="image">
      <img :src="product.image" />
    </div>
    <div class="body">
      <h1 class="title">{{ product.title }}</h1>
      <h3>{{ product.description }}</h3>
      <div class="price">Price : ${{ product.price }}</div>
      <Button
        @clickeventupdate="addtocart"
        message="Add To Cart"
        width="max"
        color="primary"
        class="btn"
      ></Button>
    </div>
  </div>
  <ModelOverlay
    v-if="showsuccessmodel"
    message="Added to cart successfully"
    route="checkoutpage"
  ></ModelOverlay>
</template>
<script>
import { mapGetters } from "vuex";
import ModelOverlay from "./ModelOverlay.vue";
import Button from "./ButtonComponent.vue";
export default {
  props: ["id"],
  components: {
    ModelOverlay,
    Button,
  },
  mounted() {
    this.product = this.singleproduct(this.id);
  },
  computed: {
    ...mapGetters({
      singleproduct: "singleproduct",
    }),
  },
  data() {
    return {
      product: {},
      showsuccessmodel: false,
    };
  },
  methods: {
    addtocart() {
      this.showsuccessmodel = !this.showsuccessmodel;
      this.$store.commit("ADDITEMTOCART", this.product.id);
    },
  },
};
</script>
<style scoped>
.product-delivery {
  display: flex;
}
img {
  width: 100%;
}
.image {
  width: 50%;
}
.body {
  width: 50%;
  margin-top: 50px;
  padding: 100px 50px;
}
.btn {
  margin: 50px auto;
}
</style>
