<template>
  <v-app>
    <TheHeader />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    TheHeader: () => import("@/components/TheHeader.vue"),
  },
};
</script>
