<template>
  <div>
    <HeaderComponent @filter-series-film="resultSearch" @keyup-filter="resultSearch" />
    <MainComponent v-show="store.listFilm.length === 0" :image="'/images/AtypicalTitle.png'"
      :info="store.bestSeries.overview" :name="store.bestSeries.name" @ge-series="filterGenre" />
    <div class="container" v-if="filterG.length > 1">
      <div class="row">
        <h4 class="text-light mt-3">Serie Tv popolari secondo il genere</h4>
        <div class="col-sm-6 col-md-4 col-lg-2" v-for="(se, index) in filterG">
          <PosterComponent v-if="se.poster_path === null" :title="se.name" :original="se.original_name"
            :language="se.original_language" :vote="se.vote_average" :info="se.overview" :image="'/images/noimage.png'"
            :id="movie.id" />
          <PosterComponent v-else :title="se.name" :original="se.original_name" :language="se.original_language"
            :vote="se.vote_average" :image="'https://image.tmdb.org/t/p/w185' + se.poster_path" :info="se.overview" />
        </div>
      </div>
    </div>
    <div class="container" v-show="filterFilm.length > 1">
      <div class="row">
        <h4 class="text-light mt-3">Film popolari secondo il genere</h4>
        <div class="col-sm-6 col-md-4 col-lg-2" v-for="(fi, index) in filterFilm">
          <PosterComponent v-if="fi.poster_path === null" :title="fi.title" :original="fi.original_title"
            :language="fi.original_language" :vote="fi.vote_average" :info="fi.overview" :image="'/images/noimage.png'" />
          <PosterComponent v-else :title="fi.title" :original="fi.original_title" :language="fi.original_language"
            :vote="fi.vote_average" :image="'https://image.tmdb.org/t/p/w185' + fi.poster_path" :info="fi.overview" />
        </div>
      </div>
    </div>
    <div class="container mt-4" v-show="store.listFilm.length < 1">
      <h4 class="text-light pb-2">Film del momento</h4>
      <Carousel :items-to-show="5" :wrap-around="true" :items-to-scroll="5">
        <Slide v-for="(poster, index) in store.popularFilms" :key="poster.id" class="col-md-6 col-auto ">
          <div class="carousel-img">
            <img :src="'https://image.tmdb.org/t/p/w185' + poster.poster_path">
            <div class="hover-info">
              <div class="d-flex align-items-center justify-content-between">
                <h5>{{ poster.title }} </h5>
              </div>
            </div>
          </div>
          <div class="inside">
            <div class="icon m-auto"><i class="fa-solid fa-circle-info" style="color: #feffff;"></i></div>
            <div class="contents">
              <h5 class="text-light">{{ poster.title }} </h5>
              <p class="text-over">{{ poster.overview }}</p>
              <i class="fa-solid fa-circle-play fs-4" style="color: #feffff;"></i>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation>
            <template #next>
              <i class="fa-solid fa-chevron-right"></i>
            </template>
            <template #prev>
              <i class="fa-solid fa-chevron-left"></i>
            </template>
          </Navigation>
        </template>
      </Carousel>
    </div>
    <div class="container mt-4" v-show="store.listFilm.length < 1">
      <h4 class="text-light pb-2">Serie TV più popolari</h4>
      <Carousel :items-to-show="5" :wrap-around="true" :items-to-scroll="5">
        <Slide v-for="(pos, posIndex) in store.popularSeries" :key="posIndex">
          <div class="carousel-img">
            <img :src="'https://image.tmdb.org/t/p/w185' + pos.poster_path">
            <div class="hover-info">
              <div class="d-flex align-items-center justify-content-between">
                <h5>{{ pos.name }} </h5>
              </div>
            </div>
          </div>
          <div class="inside">
            <div class="icon m-auto"><i class="fa-solid fa-circle-info" style="color: #feffff;"></i></div>
            <div class="contents">
              <h5 class="text-light">{{ pos.name }} </h5>
              <p class="text-over">{{ pos.overview }}</p>
              <i class="fa-solid fa-circle-play fs-4" style="color: #feffff;"></i>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation>
            <template #next>
              <i class="fa-solid fa-chevron-right"></i>
            </template>
            <template #prev>
              <i class="fa-solid fa-chevron-left"></i>
            </template>
          </Navigation>
        </template>
      </Carousel>
    </div>
    <main>
      <div class="container main-content">
        <h4 v-show="store.listFilm.length > 1" class="padding-fixed">Film trovati secondo la tua ricerca: <span
            class="badge bg-dark text-secondary">{{
              store.listFilm.length }}</span></h4>
        <div class="row justify-content-between">
          <div class="col-5 col-md-4 col-lg-3" v-for="(movie, index) in store.listFilm" :key="movie.id">
            <PosterComponent v-if="movie.poster_path === null" :title="movie.title" :original="movie.original_title"
              :language="movie.original_language" :vote="movie.vote_average" :info="movie.overview"
              :image="'/images/noimage.png'" :id="movie.id" />
            <PosterComponent v-else :title="movie.title" :original="movie.original_title"
              :language="movie.original_language" :vote="movie.vote_average"
              :image="'https://image.tmdb.org/t/p/w185' + movie.poster_path" :info="movie.overview" :id="movie.id" />
          </div>
        </div>
        <h4 v-show="store.listFilm.length > 1">Serie Tv trovate secondo la tua ricerca: <span
            class="badge bg-dark text-secondary">
            {{ store.listFilm.length }}</span></h4>
        <div class="row justify-content-between">
          <div class="col-5 col-md-4 col-lg-3" v-for="(serie, sIndex) in store.listSeries" :key="sIndex">
            <PosterComponent v-if="serie.poster_path === null" :title="serie.title" :original="serie.original_title"
              :language="serie.original_language" :vote="serie.vote_average" :image="'/images/noimage.png'" />
            <PosterComponent v-else :title="serie.name" :original="serie.original_name"
              :language="serie.original_language" :vote="serie.vote_average"
              :image="'https://image.tmdb.org/t/p/w185' + serie.poster_path" :lang="serie.original_language" />
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
  <!-- <VideoComponent /> -->
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
// import VideoComponent from './components/VideoComponent.vue'
export default {
  name: "App",
  components: { HeaderComponent, PosterComponent, MainComponent, Carousel, Slide, Navigation },
  data() {
    return {
      store,
      params: {
        api_key: '99a0ce38f2911d2a4d167d4ff18195e6',
        query: null
      },
      clickButton: null,
      activeIndex: null
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
      const seriesurl = this.store.apiUrl + this.store.endPoint.serieId;
      axios.get(seriesurl, { params: this.params }).then((res) => {
        console.log(res.data)
        this.store.bestSeries = res.data;
      })
    },
    getPopularFilm() {
      const popularF = this.store.apiUrl + this.store.endPoint.popularFilm;
      axios.get(popularF, { params: this.params }).then((res) => {
        console.log(res.data.results)
        this.store.popularFilms = res.data.results;
      })
    },
    getPopularSeries() {
      const popularS = this.store.apiUrl + this.store.endPoint.popularSerie;
      axios.get(popularS, { params: this.params }).then((res) => {
        console.log(res.data.results)
        this.store.popularSeries = res.data.results;
      })
    },
    filterGenre(search) {
      this.store.typeG = search;
      console.log(this.store.typeG)
    },
  },
  created() {
    this.getBest();
    this.getPopularFilm(),
      this.getPopularSeries()
  },
  computed: {
    filterG() {
      let filterG = this.store.popularSeries.filter((series) => {
        return series.genre_ids.includes(this.store.typeG)
      })
      console.log(filterG)
      return filterG;
    },
    filterFilm() {
      let filterFilm = this.store.popularFilms.filter((film) => {
        return film.genre_ids.includes(this.store.typeG)
      })
      console.log(filterFilm)
      return filterFilm;
    }
  }
}
</script>

<style lang="scss" scoped>
@use './assets/style/partials/variables' as *;

.carousel-img {
  position: relative;
  color: white;

  img {
    width: 200px;
  }

  .hover-info {
    height: 100%;
    padding: 10px;
    text-align: left;
    padding-top: 130px;
    background-color: black;
    opacity: 0.8;
    float: inline-end;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 12px;
    display: none;
    transition: display 4s;

  }

  &:hover {
    transition: transform .4s;
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  &:hover .hover-info {
    display: flex;
    flex-flow: column;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

}

.text-over {
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  color: $col-light;
  text-overflow: ellipsis;
  -webkit-line-clamp: 7;
}

.inside {
  z-index: 9;
  background: $bg-main;
  width: 45px;
  height: 45px;
  position: absolute;
  top: 0;
  right: 25px;
  transition: all 0.5s, border-radius 2s, top 1s;
  overflow: hidden;

  .icon {
    top: 10px;
    left: 15px;
    position: absolute;
    opacity: 1;
  }

  &:hover {
    width: 100%;
    right: 0;
    top: 0;
    border-radius: 0;
    height: 100%;

    .icon {
      opacity: 0;
    }

    .contents {
      opacity: 1;
      transform: scale(1);
      transform: translateY(0);
      overflow: scroll;
    }
  }

  .contents {
    overflow: scroll;
    padding: 5%;
    opacity: 0;
    transform: scale(0.5);
    transform: translateY(-200%);
    transition: opacity 0.2s, transform 0.8s;
  }
}

.fa-solid.fa-chevron-right {
  font-size: 46px;
  padding-right: 20px;
  color: white;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.4);
  }
}

.fa-solid.fa-chevron-left {
  font-size: 50px;
  padding-left: 20px;
  color: white;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.4);
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
