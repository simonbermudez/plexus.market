<template>
  <div id="playlists" class="row">
    <div
      v-for="playlist in playlists"
      :key="playlist.id"
      class="col-sm-6"
      @click="$emit('select-playlist', playlist.id)"
    >
      <div class="card bg-dark text-white mt-5">
        <img
          class="card-img"
          :src="playlist.snippet.thumbnails.standard.url"
          :alt="playlist.snippet.title"
        />
        <div class="card-img-overlay">
          <h5 class="card-title">{{ playlist.snippet.title }}</h5>
          <p class="card-text">{{ playlist.snippet.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Playlists',
  props: ['playlists'],
}
</script>
