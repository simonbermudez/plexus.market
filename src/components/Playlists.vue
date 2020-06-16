<template>
  <div class="playlists">
    <div v-for="playlist in playlists" :key="playlist.id">
      {{ playlist.snippet.title }}
      <img
        :src="playlist.snippet.thumbnails.standard.url"
        @click="$emit('select-playlist', playlist.id)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Playlists",
  props: ["playlists"]
};
</script>