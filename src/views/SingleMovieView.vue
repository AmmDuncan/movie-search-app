<template>
  <div class="root">
    <LoadingState v-if="loading"></LoadingState>
    <div class="content" v-else>
      <div class="poster">
        <img :src="movie.Poster" alt="">
      </div>
      <div class="movie-details">
        <MButton variant="outline" :short="true" @click="goBack"> &larr; Back</MButton>

        <div class="title">{{movie.Title}}</div>
        <div class="subtext">
          <div class="type">{{movie.Type}}</div>
          <div class="mid">&middot;</div>
          <div class="release-date">{{movie.Released}}</div>
        </div>

        <div class="more-info">

          <div class="labelled">
            <div class="label">Plot:</div>
            <div class="value">{{movie.Plot}}</div>
          </div>

          <div class="labelled">
            <div class="label">Actors:</div>
            <div class="value">{{movie.Actors}}</div>
          </div>

          <div class="labelled centered no-op">
            <div class="label">Genre:</div>
            <div class="value">
              <div class="pills">
                <div class="pill" v-for="pill in movie.Genre.split(', ')" :key="pill">
                  {{pill}}
                </div>
              </div>
            </div>
          </div>

          <div class="labelled no-op">
            <div class="label">IMDB Rating:</div>
            <div class="value">{{movie.imdbRating}}⭐️</div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LoadingState from '@/components/LoadingState.vue';
export default {
  name: "SingleMovieView",
  props: ["movieId"],
  created() {
    this.fetchMovie();
  },
  computed: {
    ...mapState(['loading', 'movie'])
  },
  methods: {
    fetchMovie() {
      const movieId = this.movieId;
      this.$store.dispatch("fetchSingleMovie", movieId);
    },
    goBack() {
      this.$router.back()
    }
  },
  components: { LoadingState }
}
</script >

<style scoped>
.root {
  /* line-height: 150%; */
  margin-top: 4rem;
}

.poster img {
  width: 100%;
}

.content {
  width: 90%;
  margin-inline: auto;
  max-width: 400px;
}

@media (min-width: 768px) {
  .content {
    max-width: 800px;
    display: grid;
    grid: 1fr / 290px auto;
    gap: 32px;
  }
}

.title {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-top: 32px;
  line-height: 1.2;
  margin-bottom: 8px;
}

.subtext {
  display: flex;
  gap: 8px;
  opacity: 0.5;
}

.type {
  text-transform: capitalize;
}

.more-info {
  display: flex;
  flex-flow: column;
  margin-top: 24px;
  line-height: 150%;
  gap: 10px;
}

.labelled {
  display: grid;
  grid: 1fr / max-content auto;
  gap: 8px;
}

.labelled.centered {
  align-items: center;
}

.labelled.no-op .value {
  opacity: 1;
}

.value {
  opacity: 0.5;
}

.pills {
  display: flex;
  gap: 8px;
}

.pill {
  padding: 8px 24px;
  background-color: #373636;
  border-radius: 100px;
  color: rgba(255, 255, 255, 0.4);
}
</style>