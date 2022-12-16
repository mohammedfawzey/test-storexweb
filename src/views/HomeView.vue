<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="d-flex align-center justify-space-between">
          <div class="text-h3">All Movies</div>
          <div class="button-actions d-flex align-center">
            <v-select
              label="filter by cateogory"
              v-model="category"
              dense
              :items="categoryItems"
              outlined
              hide-details
              item-text="name"
              item-value="id"
              @change="filterMoviesByCategory"
              class="mr-2"
            >
            </v-select>
            <v-btn color="success" to="create-new-movie" dark>
              <span class="text-capitalize">create movie</span>
              <v-icon right>mdi-plus-circle-outline</v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider class="mb-4 mt-2" />
        <v-row dense>
          <v-col
            lg="2"
            md="3"
            sm="4"
            v-for="(item, itemInd) in movies"
            :key="itemInd"
          >
            <BaseMovieCard :item="item" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: () => ({
    movies: [],
    categoryItems: [
      {
        id: 85,
        name: "All",
      },
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
  }),
  mounted() {
    this.getAllMovies();
    if (this.$store.state.S_userLoggedIn) {
      console.log("user logged in");
    } else {
      console.log("not loggedin");
    }
  },
  methods: {
    async getAllMovies() {
      // get the token
      const token = `Bearer ${localStorage.getItem("storexweb_token")}`;
      console.log("token", token);
      const headers = {
        authorization: token,
      };
       await axios.get(
        "https://test-api.storexweb.com/api/movies",
        { headers }
      ).then((result)=>{
        this.movies = result.data.message;
      }).catch((err)=>{
        this.$store.commit("M_setUserAuth",false)
      })
    },
    async filterMoviesByCategory() {
      // if category == 85
      if(this.category==85){
        // get all movies
        this.getAllMovies()
      }else{
        
        // get the token
      const token = `Bearer ${localStorage.getItem("storexweb_token")}`;
      console.log("token", token);
      const headers = {
        authorization: token,
      };
      const result = await axios.get(
        `https://test-api.storexweb.com/api/moviesByCategory/${this.category}`,
        { headers }
      );
      this.movies = result.data.message;
    }
        }
  },
  components: {
    BaseMovieCard: () => import("@/components/Base/MovieCard.vue"),
  },
};
</script>
