<template>
  <div
    id="playlists"
    class="grid grid-cols-1 gap-10 my-8 md:grid-cols-2 lg:grid-cols-3"
  >
    <template v-for="playlist in playlists">
      <!-- 
        @click="$emit('select-playlist', playlist.id)"
        <div
        :key="playlist.id"
        class="relative overflow-hidden text-white transition-all duration-200 rounded shadow-md cursor-pointer hover:shadow-xl"
      >
        <img
          class="card-img"
          :src="playlist.snippet.thumbnails.maxres.url"
          :alt="playlist.snippet.title"
        />
        <div
          class="absolute bottom-0 left-0 w-full py-4 text-center bg-black bg-opacity-75"
        >
          <h5 class="font-bold">{{ playlist.snippet.title }}</h5>
          <p class="card-text">{{ playlist.snippet.description }}</p>
        </div>
      </div> -->

      <div
        class="overflow-hidden rounded shadow"
        v-for="video in playlist.videos"
        :key="video.id"
      >
        <div
          class="w-full"
          v-if="selectedVideo !== video.snippet.resourceId.videoId"
        >
          <img
            :id="video.snippet.resourceId.videoId"
            :src="video.snippet.thumbnails.maxres.url"
            @mouseover="videoHover(video.snippet.resourceId.videoId)"
            class="w-full"
          />
        </div>

        <div v-else class>
          <div class="embed-responsive aspect-ratio-16/9">
            <iframe
              :id="video.snippet.resourceId.videoId"
              :src="`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1`"
              frameborder="0"
              class="embed-responsive-item"
            ></iframe>
            <div
              class="bar"
              @mouseleave="videoHoverLeave()"
              @click="buy(video.snippet.resourceId.videoId)"
            ></div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Playlists',
  props: ['playlists'],
  data() {
    return {
      selectedVideo: '',
    }
  },
  methods: {
    videoHover(id) {
      this.selectedVideo = id
    },
    videoHoverLeave() {
      this.selectedVideo = ''
    },
    buy(id) {
      window.location.href = `https://form.jotform.com/82301321716243?productLink=https://youtu.be/${id}`
    },
  },
}
</script>
