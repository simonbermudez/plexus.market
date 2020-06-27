<template>
  <fragment>
    <div
      id="playlists"
      class="grid grid-cols-1 gap-10 my-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <template v-for="playlist in playlists">
        <div
          class="overflow-hidden rounded shadow group"
          v-for="video in playlist.videos"
          :key="video.id"
        >
          <transition
            enter-class="hidden ease-in"
            enter-active-class="block transition-all duration-500 ease-in-out"
            leave-active-class="block transition-all duration-500 ease-in-out"
            leave-to-class="hidden ease-out"
          >
            <div
              class="w-full"
              v-if="selectedVideo !== video.snippet.resourceId.videoId"
            >
              <img
                :id="video.snippet.resourceId.videoId"
                v-lazy="video.snippet.thumbnails.maxres.url"
                @mouseover="videoHover(video.snippet.resourceId.videoId)"
                class="w-full"
              />
            </div>
          </transition>

          <transition
            enter-class="hidden ease-in"
            enter-active-class="block transition-all duration-500 ease-in-out"
            leave-active-class="block transition-all duration-500 ease-in-out"
            leave-to-class="hidden ease-out"
          >
            <div
              v-if="selectedVideo === video.snippet.resourceId.videoId"
              class="group embed-responsive aspect-ratio-16/9"
            >
              <iframe
                :id="video.snippet.resourceId.videoId"
                :src="`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1`"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                width="800"
                height="443"
                type="text/html"
                class="embed-responsive-item"
              ></iframe>
              <div
                class="absolute inset-0"
                @mouseleave="videoHoverLeave()"
                @click="buy(video.snippet.resourceId.videoId)"
              ></div>
            </div>
          </transition>

          <div class="transition-all duration-200 max-h-0 group-hover:max-h-64">
            Hola
          </div>
        </div>
      </template>
    </div>
  </fragment>
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
