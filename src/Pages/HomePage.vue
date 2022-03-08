<template>
  <div class="home-page">
    <div class="select">
      <label>Sort By : </label>
      <select @input="select">
        <option value="All">categories</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>
    </div>
    <div class="product-page">
      <ProductTemplate
        v-for="product in products"
        :key="product"
        :product="product"
      ></ProductTemplate>
    </div>
  </div>
</template>
<script>
import ProductTemplate from "../components/ProductTemplate.vue";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    ProductTemplate,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapState({ productsfromstore: "products" }),
    ...mapGetters({
      cat: "category",
    }),
  },

  methods: {
    select(e) {
      this.products =
        e.target.value == "All"
          ? this.productsfromstore
          : this.cat(e.target.value);
    },
  },
  mounted() {
    this.products = this.productsfromstore;
  },
};
</script>
<style scoped>
select,
label {
  outline: none;
  padding: 5px 20px;
  border-radius: 8px;
  margin: 30px 0px 30px 0px;
}
.select {
  display: flex;
  width: max-content;
  margin: 0px 20% 0px auto;
}
</style>
