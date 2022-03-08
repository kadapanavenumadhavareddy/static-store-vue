<template>
  <form class="form" @submit.prevent="submit">
    <label for="email">UserName</label>
    <Input
      input-type="text"
      v-model="form.username"
      place-holder="Enter Your User Name (mor_2314)"
    ></Input>
    <label for="email">Password</label>
    <Input
      input-type="text"
      v-model="form.password"
      place-holder="Enter Your Password (83r5^_)"
    ></Input>
    <Button message="Submit" width="min" color="secondary"></Button>
  </form>
</template>
<script>
import Input from "../components/InputField.vue";
import Button from "../components/ButtonComponent.vue";
import axios from "axios";
export default {
  components: {
    Input,
    Button,
  },
  data() {
    return {
      form: {
        username: "mor_2314",
        password: "83r5^_",
      },
    };
  },
  methods: {
    submit() {
      console.log(this.form);
      axios
        .post("https://fakestoreapi.com/auth/login", this.form)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.error);
        });
    },
  },
};
</script>
