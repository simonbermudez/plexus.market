<template>
  <router-link
    :to="{
      name: 'template-detail',
      params: { id: video.snippet.resourceId.videoId },
    }"
    class="overflow-hidden rounded shadow"
  >
    <div class="relative w-full container-video">
      <img
        v-if="selectedVideo !== video.snippet.resourceId.videoId"
        :id="video.snippet.resourceId.videoId"
        v-lazy="video.snippet.thumbnails.maxres.url"
        @mouseover="videoHover(video.snippet.resourceId.videoId)"
        class="w-full"
      />

      <div
        v-if="selectedVideo === video.snippet.resourceId.videoId"
        class="embed-responsive aspect-ratio-16/9"
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
        <div class="absolute inset-0" @mouseleave="videoHoverLeave()"></div>
      </div>

      <h2
        v-if="selectedVideo !== video.snippet.resourceId.videoId"
        class="absolute bottom-0 w-full py-2 font-medium text-center bg-white"
        @mouseover="videoHover(video.snippet.resourceId.videoId)"
        v-text="video.snippet.title"
      ></h2>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'pVideoCard',
  props: [
    'video',
    'selectedVideo',
    'videoHover',
    'videoHoverLeave',
    'jotFormUrl',
  ],
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .container-video {
    height: 193.5px;
  }
}

@media screen and (min-width: 1024px) {
  .container-video {
    height: 169.48px;
  }
}

@media screen and (min-width: 1280px) {
  .container-video {
    height: 217.48px;
  }
}
</style>
