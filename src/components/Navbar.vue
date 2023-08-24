<template>
    <v-app-bar flat app>
        <router-link to="/">
            <v-app-bar-title class="text-uppercase grey--text">
                <span class="fint-weight-light">Movies  </span>
                <span class="fint-weight-light">App</span>
            </v-app-bar-title>
        </router-link>
        <v-spacer></v-spacer>
        <input v-model="movieInput" type="text">
        <router-link to="/movieDescription">
            <button @click="searchMovie">search</button>
        </router-link>
    </v-app-bar>
</template>

<script setup>
    import { useMoviesStore } from '@/stores/movies'
    const store = useMoviesStore()

    import axios from 'axios'

    let movieInput = ''

    let movie = {}

    async function searchMovie() {
        const movieSearch = await axios.get(`http://www.omdbapi.com/?apikey=ee7a4dfd&t=${movieInput}`)
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
        store.addMovie(movie)
    }
</script>