// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMoviesStore = defineStore({

    id: 'movies',

    state: () => ({
        movieTitle : 'default',
        movieImg : '',
        releaseDate : '',
        rottenRating : '',
        moviePlot : '',
        searchHistory : []
    }),
    actions: {
        addMovie(movie) {
            this.searchHistory.push(movie)
        }
    }
})