<template>
  <div class="overflow-hidden rounded shadow">
    <div class="w-full container-video">
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
    </div>

    <div class="px-5">
      <div class="flex justify-between py-3">
        <router-link
          :to="{
            name: 'product-detail',
            params: { id: video.snippet.resourceId.videoId },
          }"
          class="flex items-center px-3 py-2 text-xs text-blue-500 uppercase rounded-full shadow"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-5 h-5 mr-1"
          >
            <path
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>

          view details
        </router-link>

        <a
          :href="`${jotFormUrl}/${video.snippet.resourceId.videoId}`"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center p-2 text-xs text-blue-500 uppercase rounded-full shadow"
        >
          buy now
          <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
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

<style>
.holder {
  width: 320px;
  height: 180px;
  position: relative;
}
.frame {
  width: 100%;
  height: 100%;
  background-color: black;
}
.bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 100, 100, 0);
}
</style>
