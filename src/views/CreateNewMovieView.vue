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
  mounted() {
    //TODO this.getAllCategories()
  },
  methods: {
    async getAllCategories() {
const token = `Bearer ${localStorage.getItem("storexweb_token")}`;
      const headers = {
        authorization: token,
      };
      await axios.get("https://test-api.storexweb.com/api/category",{headers}).then((result)=>{
        console.log("the categories",result.data.message)
        this.categoryItems=result.data.message
      }).catch(err=>{
         if(err.response.status!=401)return;
        localStorage.removeItem("storexweb_token")
        this.$store.commit("M_setUserAuth",false)
      })
    },
    async createNewMovie() {
      const token = `Bearer ${localStorage.getItem("storexweb_token")}`;
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
      await axios.post(this.url, formData, { headers }).then((result)=>{
        console.log("result", result);
      }).catch(err=>{
          if(err.response.status!=401)return;
        localStorage.removeItem("storexweb_token")
        this.$store.commit("M_setUserAuth",false)
      })
    },
  },
};
</script>

<style lang="scss" scoped></style>
