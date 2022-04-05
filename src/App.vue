<template>
  <header>
    <ul>
      <li><router-link to="/login" class="log">Login</router-link></li>
      <li><router-link to="/signup" class="log">Sigup</router-link></li>
      <li><router-link to="/" class="log">Home</router-link></li>
      <li>
        <router-link to="/checkoutpage" class="log">
          <i class="pi pi-shopping-cart" v-badge.success="length"></i
        ></router-link>
      </li>
    </ul>
  </header>
  <router-view></router-view>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters({ length: "cartlength" }),
  },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
header {
  width: 100%;
  height: 50px;
  background-color: rgb(55, 121, 243);
  margin-bottom: 50px;
  position: relative;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: row-reverse;
}
.log {
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  line-height: 50px;
}
span {
  background-color: white;
  padding: 3px 6px;
  border-radius: 50%;
  margin-left: 10px;
  color: rgb(55, 121, 243);
}
.pi.pi.pi-shopping-cart {
  font-size: 1.5rem;
}
</style>
