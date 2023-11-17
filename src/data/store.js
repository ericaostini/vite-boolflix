import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: "search/movie",
        series: "search/tv",
        popularFilm: "movie/popular",
        popularSerie: "tv/popular",
        genreSerie: 'genre/tv/list'
    },
    error: '',
    loading: true,
    listFilm: [],
    listSeries: [],
    bestSeries: [],
    popularFilms: [],
    popularSeries: [],
    genreSeries: []
});