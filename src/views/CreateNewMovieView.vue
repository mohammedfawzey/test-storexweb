<template>
  <v-card class="mx-auto pa-3" max-width="600">
    <v-card-title>Create New Movie</v-card-title>
    <v-text-field outlined label="name" v-model="name"></v-text-field>
    <v-text-field outlined label="id" v-model="id"></v-text-field>
    <v-text-field
      outlined
      label="description"
      v-model="description"
    ></v-text-field>
    <v-select
      v-model="category"
      :items="categoryItems"
      item-text="title"
      item-value="value"
    />
    <v-file-input outlined v-model="image"></v-file-input>
    <v-btn color="success" block @click="createNewMovie">
      <span class="text-capitalize">create</span>
    </v-btn>
  </v-card>
</template>

<script>
// name,id,description,image,
import axios from "axios";
export default {
  data: () => ({
    //730
    name: "",

    id: "",
    description: "",
    categoryItems: [
      {
        id: 86,
        name: "Action",
      },
      {
        id: 87,
        name: "Comedy",
      },
      {
        id: 88,
        name: "Drama",
      },
      {
        id: 89,
        name: "Horror",
      },
      {
        id: 90,
        name: "Fantazia",
      },
      {
        id: 91,
        name: "Romantic",
      },
      {
        id: 92,
        name: "..",
      },
      {
        id: 93,
        name: "test cat",
      },
    ],
    category: "",
    image: [],
    url: "https://test-api.storexweb.com/api/movies",
  }),
  methods: {
    async createNewMovie() {
      const token = `Bearer ${localStorage.getItem("storexweb_token")}`;
      console.log("token", token);
      const headers = {
        authorization: token,
      };
      //   this.$axios.post(url, { headers });
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("name", this.name);
      formData.append("description", this.description);
      formData.append("category_id", this.category);
      formData.append("id", this.id);
      console.log("formData", formData);
      const result = await axios.post(this.url, formData, { headers });
      console.log("result", result);
    },
  },
};
</script>

<style lang="scss" scoped></style>
