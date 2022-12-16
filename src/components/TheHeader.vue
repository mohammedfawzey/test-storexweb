<template>
  <v-app-bar app fixed>
    <v-toolbar-title style="cursor: pointer" @click="redirectToHome"
      >storex</v-toolbar-title
    >
    <v-spacer />
    <v-btn color="primary" v-if="!$store.state.S_userLoggedIn" to="/login">
      <span class="text-capitalize">login</span>
    </v-btn>
    <v-btn
      outlined
      class="ml-3"
      to="/register"
      color="success"
      v-if="!$store.state.S_userLoggedIn"
    >
      <span class="text-capitalize">create account</span>
    </v-btn>
    <v-btn color="error" @click="logout" outlined v-else>
      <span class="text-capitalize">logout</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  mounted() {
    const token = localStorage.getItem("storexweb_token");
    if (token) {
      this.$store.commit("M_setUserAuth", true);
    }
  },
  methods: {
    redirectToHome() {
      if (this.$route.path == "/") return;
      this.$router.push({ path: "/" });
    },
    async logout() {
      //   localStorage.setItem("storexweb_token", null);
      localStorage.removeItem("storexweb_token");
      await new Promise((resolve) => {
        this.$store.commit("M_setUserAuth", false);
        resolve("loggedout");
      }).then((value) => {
        if (this.$route.path == "/login") return;
        this.$router.push({ path: "/login" });
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
