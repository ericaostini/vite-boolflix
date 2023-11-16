<template>
  <div>
    <HeaderComponent @filter-series-film="resultSearch" />
    <MainComponent v-show="store.listFilm.length < 1" :image="'/images/AtypicalTitle.png'"
      :info="store.bestSeries.overview" />
    <div class="container mt-4">
      <Carousel :items-to-show="5" :wrap-around="true" :items-to-scroll="5">
        <Slide v-for="(poster, index) in store.popularFilms" :key="poster.id">
          <div class="carousel-img">
            <img :src="'https://image.tmdb.org/t/p/w185' + poster.poster_path">
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div class="container mt-4">
      <Carousel :items-to-show="5" :wrap-around="true" :items-to-scroll="5">
        <Slide v-for="(poster, index) in store.popularFilms" :key="poster.id">
          <div class="carousel-img">
            <img :src="'https://image.tmdb.org/t/p/w185' + poster.poster_path">
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <main>
      <div class="container main-content">
        <h4 v-show="store.listFilm.length > 1" class="padding-fixed">Film trovati secondo la tua ricerca: {{
          store.listFilm.length }}</h4>
        <div class="row justify-content-between">
          <div class="col-5 col-md-4 col-lg-3" v-for="(movie, index) in store.listFilm" :key="movie.id">
            <PosterComponent :title="movie.title" :original="movie.original_title" :language="movie.original_language"
              :vote="movie.vote_average" :image="'https://image.tmdb.org/t/p/w185' + movie.poster_path" />
          </div>
        </div>
        <h4 v-show="store.listFilm.length > 1">Serie Tv trovate secondo la tua ricerca: {{ store.listFilm.length }}</h4>
        <div class="row justify-content-between">
          <div class="col-5 col-md-4 col-lg-3" v-for="(serie, index) in store.listSeries" :key="serie.id">
            <PosterComponent :title="serie.name" :original="serie.original_name" :language="serie.original_language"
              :vote="serie.vote_average" :image="'https://image.tmdb.org/t/p/w185' + serie.poster_path"
              :lang="serie.original_language" />
          </div>
        </div>
        <div class="col-12" v-if="store.error">
          <div class="alert alert-danger">
            {{ store.error }}
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import PosterComponent from './components/PosterComponent.vue';
import { store } from './data/store';
import axios from 'axios';
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from './assets/vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default {
  name: "App",
  data() {
    return {
      store,
      params: {
        api_key: '99a0ce38f2911d2a4d167d4ff18195e6',
        query: null
      },
      top: {
        api_key: '99a0ce38f2911d2a4d167d4ff18195e6',
        query: 'Atypical',
      }
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
      } else {
        delete this.params.query
      }
      this.getSeriesTv();
    },
    getSeriesTv() {
      store.error = '';
      const seriesurl = this.store.apiUrl + this.store.endPoint.series;
      console.log(seriesurl);
      axios.get(seriesurl, { params: this.params }).then((res) => {
        console.log(res.data.results);
        this.store.listSeries = res.data.results;
        console.log(this.store.listSeries);
      }).catch((error) => {
        this.store.error = error.message
      })
      const movieurl = this.store.apiUrl + this.store.endPoint.movie;
      console.log(movieurl);
      axios.get(movieurl, { params: this.params }).then((res) => {
        console.log(res.data.results);
        this.store.listFilm = res.data.results;
        console.log(this.store.listFilm);
      })
    },
    getBest() {
      const seriesurl = this.store.apiUrl + this.store.endPoint.series
      axios.get(seriesurl, { params: this.top }).then((res) => {
        console.log(res.data.results[0])
        this.store.bestSeries = res.data.results[0];
      })
    },
    getPopularFilm() {
      const popularF = this.store.apiUrl + this.store.endPoint.popularFilm;
      axios.get(popularF, { params: this.params }).then((res) => {
        console.log(res.data.results[0])
        this.store.popularFilms = res.data.results;
      })
    },
    scrollLeft() {
      this.$nextTick(() => {
        this.$refs.image[this.$refs.image.length - 1].scrollBy(100, 0);
      })
    }
  },
  created() {
    this.getBest();
    this.getPopularFilm()
  },
  components: { HeaderComponent, PosterComponent, MainComponent, Carousel, Slide, Navigation }
}
</script>

<style lang="scss" scoped>
@use './assets/style/partials/variables' as *;

.carousel-img {
  img {
    width: 200px;
  }

}

main {

  background-color: $bg-main;


  .main-content {
    .padding-fixed {
      padding-top: 120px;
    }

    h4 {
      color: $hColor;
      padding-top: 40px;
      padding-bottom: 10px;
    }
  }
}
</style>
