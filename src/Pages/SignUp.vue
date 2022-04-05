<template>
  <Knob v-model="value" :disabled="true" class="knob" />
  <Transition appear name="form">
    <form v-if="value == 0" @submit.prevent="value = 35" class="form bs">
      <Input Icon="pi-envelope" Label="Email Id">
        <InputText type="text" v-model="form.email" class="large"
      /></Input>
      <Input Icon="pi-user" Label="User Name">
        <InputText type="text" v-model="form.username" class="large" />
      </Input>
      <Input Icon="pi-eye" Label="Password">
        <InputText type="text" v-model="form.password" class="large" />
      </Input>
      <br />
      <Button message="Next" width="min" color="secondary"></Button>
    </form>
    <form v-else-if="value == 35" @submit.prevent="value = 70" class="form bs">
      <div class="form-field">
        <Input Icon="pi-user-plus" Label="First Name">
          <InputText type="text" v-model="form.name.firstname" class="small" />
        </Input>
        <Input Icon="pi-user-plus" Label="Last Name">
          <InputText type="text" v-model="form.name.lastname" class="small" />
        </Input>
      </div>
      <Input Icon="pi-phone" Label="Phone">
        <InputText type="text" v-model="form.phone" class="large" />
      </Input>
      <br />
      <Button message="Next" width="min" color="secondary"></Button>
    </form>
    <form v-else @submit.prevent="submit" class="form bs">
      <div class="form-field">
        <Input Icon="pi-building" Label="City">
          <InputText type="text" v-model="form.address.city" class="small" />
        </Input>
        <Input Icon="pi-home" Label="Street">
          <InputText type="text" v-model="form.address.street" class="small" />
        </Input>
        <Input Icon="pi-phone" Label="Number">
          <InputText type="text" v-model="form.address.number" class="small" />
        </Input>
        <Input Icon="pi-map-marker" Label="Zipcode">
          <InputText type="text" v-model="form.address.zipcode" class="small" />
        </Input>
      </div>
      <br />
      <Button message="Submit" width="min" color="secondary"></Button>
    </form>
  </Transition>
</template>
<script>
import Knob from "primevue/knob";
import InputText from "primevue/inputtext";
import Button from "../components/ButtonComponent.vue";
import Input from "../components/InputField.vue";
import axios from "axios";
export default {
  components: {
    Button,
    Knob,
    InputText,
    Input,
  },
  data() {
    return {
      value: 0,
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
    submit() {
      console.log(this.form);
      this.value = 100;
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
.knob {
  width: max-content;
  margin: auto;
}
button {
  margin: 20px 0px 0px 16px;
}
</style>
