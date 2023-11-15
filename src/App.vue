<template>
  <div>
    <HeaderComponent @filter-series-film="resultSearch" />
    <h2>Movies</h2>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3" v-for="(movie, index) in store.listFilm" :key="movie.id">
        <PosterComponent :title="movie.title" :original="movie.original_title" :language="movie.original_language"
          :vote="movie.vote_average" :image="'https://image.tmdb.org/t/p/w185' + movie.poster_path" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import PosterComponent from './components/PosterComponent.vue'
import { store } from './data/store';
import axios from 'axios';
export default {
  name: "App",
  data() {
    return {
      store,
      params: {
        api_key: '99a0ce38f2911d2a4d167d4ff18195e6',
        query: null
      },
    }
  },
  methods: {
    resultSearch(search) {
      console.log(search);
      if (search) {
        this.params = {
          api_key: '99a0ce38f2911d2a4d167d4ff18195e6',
          query: search
        }
      }
      this.getSeriesTv();
    },
    getSeriesTv() {
      const seriesurl = this.store.apiUrl + this.store.endPoint.series;
      console.log(seriesurl);
      axios.get(seriesurl, { params: this.params }).then((res) => {
        console.log(res.data.results);
        this.store.listSeries = res.data.results;
        console.log(this.store.listSeries);
      });
      const movieurl = this.store.apiUrl + this.store.endPoint.movie;
      console.log(movieurl);
      axios.get(movieurl, { params: this.params }).then((res) => {
        console.log(res.data.results);
        this.store.listFilm = res.data.results;
        console.log(this.store.listFilm);
      });
    }
  },
  created() {
  },
  components: { HeaderComponent, PosterComponent }
}
</script>

<style lang="scss" scoped>
@use './assets/style/partials/variables' as *;
</style>
