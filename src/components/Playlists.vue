<template>
  <fragment>
    <div
      id="playlists"
      class="grid items-center grid-cols-1 gap-10 my-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <template v-for="playlist in playlists">
        <p-video-card
          v-for="video in playlist.videos"
          :key="video.id"
          :video="video"
          :selectedVideo="selectedVideo"
          :videoHover="videoHover"
          :videoHoverLeave="videoHoverLeave"
          :jotFormUrl="jotFormUrl"
        />
      </template>
    </div>
  </fragment>
</template>

<script>
// Components
import pVideoCard from '@/components/pVideoCard'

export default {
  name: 'Playlists',
  components: {
    pVideoCard,
  },
  props: [
    'playlists',
    'selectedVideo',
    'videoHover',
    'videoHoverLeave',
    'jotFormUrl',
  ],
}
</script>
