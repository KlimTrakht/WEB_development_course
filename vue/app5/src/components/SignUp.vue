<template>
  <div class="form-inline">
    <h3>Sign Up</h3>
    <div class="form-group">
      <input
        type="text"
        placeholder="email"
        class="form-control"
        v-model="email"
      />
      <br />
      <input
        type="password"
        placeholder="password"
        class="form-control"
        v-model="password"
      />
      <br />
      <button @click="signUp" class="btn btn-primary">Sign Up</button>
      <br />
      <router-link to="/signin">Already a user ? Sign in</router-link>
      <br />
      {{ error.message }}
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    signUp() {
      createUserWithEmailAndPassword(auth, this.email, this.password).catch(
        error => {
          this.error = error;
        }
      );
    }
  }
};
</script>

<style scoped></style>
