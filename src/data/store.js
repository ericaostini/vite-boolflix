import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: "search/movie",
        series: "search/tv"
    },
    params: {
        api_key: '99a0ce38f2911d2a4d167d4ff18195e6',
        query: 'a',
    },
    error: '',
    loading: true,
    listFilm: [],
    listSeries: []
});