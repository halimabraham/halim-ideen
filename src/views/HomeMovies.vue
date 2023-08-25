<template>
    <h1>MOVIES APP</h1>
    <h3>You've searched:</h3>
    <ul>
        <router-link to="/movieDescription">
            <li v-for="movie in searchHistory" @click="searchMovie(movie.title)">{{ movie.title }}</li>
        </router-link>
    </ul>
</template>

<script setup>

    import axios from 'axios'

    import { useMoviesStore } from '@/stores/movies'
    import { storeToRefs } from "pinia"

    const { searchHistory } = storeToRefs(useMoviesStore())
    const store = useMoviesStore()

    let movie = {}

    async function searchMovie(title) {
        console.log(title)
        const movieSearch = await axios.get(`http://www.omdbapi.com/?apikey=ee7a4dfd&t=${title}`)
        movie = {
            title: movieSearch.data.Title,
            poster: movieSearch.data.Poster,
            releaseDate: movieSearch.data.Released,
            rottenRating: movieSearch.data.Ratings[1].Value,
            plot: movieSearch.data.Plot
        }
        console.log(movieSearch.data.Ratings[1].Value)

        store.$state = { 
            movieTitle: movie.title,
            movieImg : movie.poster,
            releaseDate : movie.releaseDate,
            rottenRating : movie.rottenRating,
            moviePlot : movie.plot,
        }
    }

</script>