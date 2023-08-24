<template>
    <h1>MOVIES APP</h1>
    <h3>You've searched:</h3>
    <ul>
        <li v-for="movie in searchHistory">{{ movie.title }}</li>
    </ul>
</template>

<script setup>

    import { useMoviesStore } from '@/stores/movies'
    import { storeToRefs } from "pinia"

    const { searchHistory } = storeToRefs(useMoviesStore())
    const store = useMoviesStore()

</script>