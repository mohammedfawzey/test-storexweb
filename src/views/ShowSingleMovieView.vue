<template>
  <section id="the-movie" style="max-width: 500px" class="mx-auto">
    <BaseMovieCard :item="theMovie" />
    <v-btn @click="deleteTheMovie"> delete </v-btn>
    <v-btn @click="editDialog = true">edit</v-btn>
    <v-dialog v-model="editDialog" content-class="elevation-0">
      <v-card class="mx-auto pa-3" max-width="600">
        <v-btn @click="editDialog = false" class="ml-auto d-block" icon
          ><v-icon>mdi-close</v-icon></v-btn
        >
        <!-- <v-card-title>Edit</v-card-title> -->
        <v-text-field outlined label="name" v-model="name"></v-text-field>
        <!-- <v-text-field outlined label="id" v-model="id"></v-text-field> -->
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
        <v-btn color="success" block @click="editTheMovie">
          <span class="text-capitalize">save</span>
        </v-btn>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    theMovie: {},
    name: "",
    id: "",
    description: "",
    categoryItems: [
      {
        title: "Action",
        value: 86,
      },
      {
        title: "Comedy",
        value: 87,
      },
    ],
    category: "",
    image: [],
    editDialog: false,
    url: "https://test-api.storexweb.com/api/movies",
  }),
  mounted() {
    //   if(this.$store.state.S_userLoggedIn)return;
    // this.$router.push({path:'/login'})
    this.getTheMovie();

  },
  methods: {
    async getTheMovie() {
      const token = `Bearer ${localStorage.getItem("storexweb_token")}`;
      console.log("token", token);
      const headers = {
        authorization: token,
      };
       await axios.get(
        `https://test-api.storexweb.com/api/movies/${this.$route.params.id}`,
        { headers }
      ).then((result)=>{

        this.theMovie = result.data.message;
      })
    },
    async deleteTheMovie() {
      const token = `Bearer ${localStorage.getItem("storexweb_token")}`;
      console.log("token", token);
      const headers = {
        authorization: token,
      };
       await axios.delete(
        `https://test-api.storexweb.com/api/movies/${this.$route.params.id}`,
        { headers }
      ).catch(err=>{
         if(err.response.status!=401)return;
        localStorage.removeItem("storexweb_token")
        this.$store.commit("M_setUserAuth",false)
      })
      this.$router.push({ path: "/" });
    },
    async editTheMovie() {
      const token = `Bearer ${localStorage.getItem("storexweb_token")}`;
      console.log("token", token);
      const headers = {
        authorization: token,
      };
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("name", this.name);
      formData.append("description", this.description);
      formData.append("category_id", this.category);
      formData.append("_method", "put");
      //   formData.append("id", this.id);
       await axios.post(
        `${this.url}/${this.$route.params.id}`,
        formData,
        { headers }
      ).then((result)=>{
      if (result.data.status == 200) {
        this.getTheMovie();
        this.editDialog = false
      }
        }).catch(err=>{
           if(err.response.status!=401)return;
        localStorage.removeItem("storexweb_token")
        this.$store.commit("M_setUserAuth",false)
        })
    },
  },
  components: {
    BaseMovieCard: () => import("@/components/Base/MovieCard"),
  },
};
</script>

<style lang="scss" scoped></style>
