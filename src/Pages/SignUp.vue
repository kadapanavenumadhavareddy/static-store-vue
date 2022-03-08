<template>
  <div class="step">
    <div class="box bs" :class="[step == 'step-1' ? '' : 'step-1c']">1</div>
    <div class="line bs" :class="[step == 'step-1' ? '' : 'step-1c']"></div>
    <div class="box bs" :class="[step == 'step-3' ? 'step-2c' : '']">2</div>
    <div class="line bs" :class="[step == 'step-3' ? 'step-2c' : '']"></div>
    <div class="box bs">3</div>
  </div>
  <form class="form bs" @submit.prevent="changestep" v-if="step == 'step-1'">
    <label for="email">Email</label>
    <Input
      input-type="text"
      v-model="form.email"
      place-holder="Enter Your Email Id"
    ></Input>
    <label for="email">UserName</label>
    <Input
      input-type="text"
      v-model="form.username"
      place-holder="Enter Your User Name"
    ></Input>
    <label for="email">Password</label>
    <Input
      input-type="text"
      v-model="form.password"
      place-holder="Enter Your Password"
    ></Input>
    <Button message="Next" width="min" color="secondary"></Button>
  </form>
  <form
    class="form bs"
    v-else-if="step == 'step-2'"
    @submit.prevent="changestep"
  >
    <label>Name</label>
    <div class="form-field">
      <Input
        input-type="text"
        v-model="form.name.firstname"
        place-holder="Enter Your First Name"
        input-width="Min"
      ></Input>
      <Input
        input-type="text"
        v-model="form.name.lastname"
        place-holder="Enter Your Last Name"
        input-width="Min"
      ></Input>
    </div>
    <label for="email">phone</label>
    <Input
      input-type="text"
      v-model="form.phone"
      place-holder="Enter Your Phone"
    ></Input>
    <Button message="Next" width="min" color="secondary"></Button>
  </form>
  <form class="form bs" v-else @submit.prevent="submit">
    <label>Address</label>
    <div class="form-field">
      <Input
        input-type="text"
        v-model="form.address.city"
        place-holder="Enter Your City"
        input-width="Min"
      ></Input>
      <Input
        input-type="text"
        v-model="form.address.street"
        place-holder="Enter Your Street"
        input-width="Min"
      ></Input>
      <Input
        input-type="text"
        v-model="form.address.number"
        place-holder="Enter Your Number"
        input-width="Min"
      ></Input>
      <Input
        input-type="text"
        v-model="form.address.zipcode"
        place-holder="Enter Your Zipcode"
        input-width="Min"
      ></Input>
    </div>
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
      step: "step-1",
      form: {
        email: "",
        username: "",
        password: "",
        name: {
          firstname: "",
          lastname: "",
        },
        address: {
          city: "",
          street: "",
          number: "",
          zipcode: "",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "",
      },
    };
  },
  methods: {
    changestep() {
      this.step = this.step == "step-1" ? "step-2" : "step-3";
    },
    submit() {
      console.log(this.form);
      axios
        .post("https://fakestoreapi.com/users", this.form)
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
.form {
  padding: 40px;
  margin: 20px auto;
}
.step {
  display: flex;
  width: max-content;
  margin: 5px auto;
}
.line {
  height: 10px;
  width: 100px;
  margin-top: 1rem;
}
.box {
  border-radius: 70px 70px 70px 3px;
  height: 1rem;
  width: 1rem;
  padding: 1rem;
}
.step-1c,
.step-2c {
  background-color: green;
  color: white;
}
</style>
