<template>
    <h1>Movie Description</h1>
    <p>{{ movieTitle }}</p>
    <p>{{ movieImg }}</p>
    <p>{{ releaseDate }}</p>
    <p>{{ rottenRating}}</p>
    <p>{{ moviePlot }}</p>
</template>

<script setup>

import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from "pinia"

const { movieTitle, movieImg, releaseDate, rottenRating, moviePlot } = storeToRefs(useMoviesStore())
const store = useMoviesStore()

</script>