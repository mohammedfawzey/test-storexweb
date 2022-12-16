<template>
  <v-card class="pa-2">
    <div class="text-body-1">movie id :{{ item.id }}</div>
    <v-img
      :src="C_imageLink"
      height="180"
      style="cursor: pointer"
      @click="redirectToMovie"
    />
    <!-- <div> -->
    <v-list-item-title
      class="text-body-2"
      style="cursor: pointer"
      @click="redirectToMovie"
    >
      {{ item.name }}
    </v-list-item-title>
    <!-- </div> -->
    <div class="text-caption">{{ item.description }}</div>
  </v-card>
</template>

<script>
// name,description,category_id,created_at,updated_at
export default {
  data: () => ({
    url: "https://test-api.storexweb.com/",
  }),
  computed: {
    C_imageLink() {
      return `${this.url}/${this.item.image}`;
    },
  },
  props: ["item"],
  methods: {
    redirectToMovie() {
      this.$router.push({ path: `/movies/${this.item.id}` });
    },
  },
};
</script>

<style lang="scss" scoped></style>
