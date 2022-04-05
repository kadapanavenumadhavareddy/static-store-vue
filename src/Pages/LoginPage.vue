<template>
  <Transition appear name="form">
    <form class="form bs" @submit.prevent="submit">
      <Input Icon="pi-user" Label="User Name"
        ><InputText type="text" v-model="form.username" class="large"
      /></Input>
      <Input Icon="pi-eye" Label="Password">
        <InputText type="text" v-model="form.password" class="large"
      /></Input>
      <br />
      <Button message="Submit" width="min" color="secondary"></Button>
    </form>
  </Transition>
</template>
<script>
import Button from "../components/ButtonComponent.vue";
import InputText from "primevue/inputtext";
import Input from "../components/InputField.vue";
import axios from "axios";
export default {
  components: {
    Button,
    InputText,
    Input,
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
<style scoped>
button {
  margin: 20px 0px 0px 16px;
}
</style>
