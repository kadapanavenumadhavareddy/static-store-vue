<template>
  <div class="product-page">
    <ProductTemplate
      v-for="product in cart"
      :key="product"
      :product="product"
    ></ProductTemplate>
  </div>
  <hr />
  <div class="checkout">
    <p>Total : {{ total2 }}</p>
    <Button
      @clickeventupdate="checkout"
      message="Checkout"
      width="min"
      color="primary"
    ></Button>
  </div>
  <ModelOverlay
    v-show="showsuccessmodel"
    :message="msg"
    route=""
  ></ModelOverlay>
</template>
<script>
import ProductTemplate from "../components/ProductTemplate.vue";
import { mapState } from "vuex";
import ModelOverlay from "../components/ModelOverlay.vue";
import Button from "../components/ButtonComponent.vue";
export default {
  components: {
    ProductTemplate,
    ModelOverlay,
    Button,
  },
  data() {
    return {
      total: 0,
      showsuccessmodel: false,
      msg: "Order placed successfully",
    };
  },
  computed: {
    ...mapState({ cart: "cart" }),

    total2() {
      this.cart.forEach((element) => {
        this.total = this.total + element.price;
      });
      return this.total;
    },
  },
  methods: {
    checkout() {
      this.showsuccessmodel = !this.showsuccessmodel;
      this.$store.commit("CLEARSTORE");
      this.total = 0;
    },
  },
  mounted() {
    if (this.cart.length <= 0) {
      this.msg = "Cart is empty";
      this.checkout();
    }
  },
};
</script>
<style scoped>
.checkout {
  float: right;
}
</style>
