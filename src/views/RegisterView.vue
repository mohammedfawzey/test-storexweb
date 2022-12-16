<template>
  <v-app>
    <v-main>
      <v-card max-width="500" class="mx-auto pa-3">
        <v-text-field v-model="name" outlined label="name"></v-text-field>
        <v-text-field v-model="email" outlined label="email"></v-text-field>
        <v-text-field
          v-model="password"
          label="password"
          outlined
        ></v-text-field>
        <v-card-text>
          <v-btn block color="indigo" dark @click="register"> register </v-btn>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    name: "mohammed",
    email: "mohamed@g.com",
    password: "mohammed",
    apiUrl: "https://test-api.storexweb.com/api",
  }),
  methods: {
    async register() {
      // this.$axios.post(`${}`)
      const registerInfo = { name:this.name,email: this.email, password: this.password };
      const result = await axios.post(`${this.apiUrl}/register`, registerInfo);
      const token = result.data.authorisation.token;
      //   save token to localstorage
      localStorage.setItem("storexweb_token", token);
      this.$store.commit("M_setUserAuth", true);
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
