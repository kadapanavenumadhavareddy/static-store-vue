<template>
  <div class="product">
    <div class="img">
      <img :src="product.image" alt="some image" />
      <div class="hovercart">
        <div class="heart"><i class="pi pi-heart"></i></div>
        <div class="heart">
          <i class="pi pi-shopping-cart" @click="addtocart"></i>
        </div>
      </div>
    </div>
    <div class="body">
      <h3 class="title">{{ product.title }}</h3>
      <Rating :rating="product.rating.rate"></Rating>
      <div class="rat-price">
        <router-link
          :to="{ name: 'productdetail', params: { id: product.id } }"
          class="rout"
        >
          Read More
        </router-link>
        <div class="price">$ {{ product.price }}</div>
      </div>
    </div>
  </div>
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
  methods: {
    addtocart() {
      this.$store.commit("ADDITEMTOCART", this.product.id);
    },
  },
};
</script>
<style scoped>
img {
  width: 250px;
  height: 357px;
  position: relative;
}
.product {
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.712);
  box-sizing: border-box;
  padding: 10px;
  width: 300px;
  border-radius: 6px;
  border: 1px solid gray;
  position: relative;
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

.product:hover {
  box-shadow: 0px 1px 6px 0px black;
}
.rout {
  margin: 16px 0px;
}
.price {
  margin: 16px 0px;
}
span {
  margin: 0px;
  padding: 0%;
  color: white;
  background-color: transparent;
}
.heart {
  padding: 10px 10px 5px 10px;
  width: max-content;
  border-radius: 20px;
  box-shadow: 0px 1px 6px 0px black;
  cursor: pointer;
  background: white;
  margin-right: 5px;
}
.hovercart {
  display: none;
}
.img:hover .hovercart {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 90%;
  background: rgb(223 222 222 / 70%);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: name 2s;
}
@keyframes name {
  from {
    width: 25%;
  }
  to {
    width: 100%;
  }
}
.pi,
.pi-shopping-cart {
  font-size: 1rem !important;
}
</style>
