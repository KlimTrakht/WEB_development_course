<template>
  <div class="form-inline">
    <h3>Sign In</h3>
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
      <button @click="signIn" class="btn btn-primary">Sign In</button>
      <br />

      <router-link to="/signup">Don't have an account ? Sign up</router-link>
      <br />
      {{ error.message }}
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default {
  name: "SignIn",
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
    signIn() {
      signInWithEmailAndPassword(auth, this.email, this.password).catch(
        error => {
          this.error = error;
        }
      );
    }
  }
};
</script>
