<template>
  <div>
    <HeaderComponent />
    <h2>Movies</h2>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3" v-for="(movie, index) in store.listFilm" :key="movie.id">
        {{ movie.title }}
        <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import { store } from './data/store';
import axios from 'axios';
export default {
  name: "App",
  data() {
    return {
      store
    };
  },
  methods: {
    getSeries() {
      const seriesurl = this.store.apiUrl + this.store.endPoint.series;
      console.log(seriesurl);
      axios.get(seriesurl, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.listSeries = res.data.results;
        console.log(this.store.listSeries);
      });
      const movieurl = this.store.apiUrl + this.store.endPoint.movie;
      console.log(movieurl);
      axios.get(movieurl, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.listFilm = res.data.results;
        console.log(this.store.listFilm);
      });
    }
  },
  created() {
    this.getSeries();
  },
  components: { HeaderComponent }
}
</script>

<style lang="scss" scoped>
@use './assets/style/partials/variables' as *;
</style>
