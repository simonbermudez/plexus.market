<template>
  <fragment>
    <p-header />

    <div class="container min-h-screen px-5">
      <playlists
        @select-playlist="selectPlaylist"
        v-if="!selectedPlaylist"
        :playlists="playlists"
      />
      <!-- 
      <div
        v-else
        class="grid grid-cols-1 gap-10 my-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          class="overflow-hidden rounded shadow"
          v-for="video in videos"
          :key="video.id"
        >
          <div
            class="w-full"
            v-if="selectedVideo !== video.snippet.resourceId.videoId"
          >
            <img
              :id="video.snippet.resourceId.videoId"
              v-lazy="video.snippet.thumbnails.maxres.url"
              :key="video.snippet.thumbnails.maxres.url"
              @mouseover="videoHover(video.snippet.resourceId.videoId)"
              class="w-full"
            />
          </div>

          <div v-else class="group embed-responsive aspect-ratio-16/9">
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
        </div>
      </div> -->
    </div>
  </fragment>
</template>

<script>
// Dependencies
import axios from 'axios'

// Components
import pHeader from '@/components/pHeader'
import Playlists from '../components/Playlists.vue'

export default {
  name: 'Home',
  components: {
    playlists: Playlists,
    pHeader,
  },
  data: () => ({
    selectedVideo: '',
    playlists: [],
    videos: [],
    selectedPlaylist: '',
    api: {
      endpoint: process.env.VUE_APP_ENDPOINT,
      key: process.env.VUE_APP_KEY,
      channelId: process.env.VUE_APP_CHANNELID,
    },
  }),
  methods: {
    getPlaylists() {
      axios.get(process.env.VUE_APP_API_URL).then(({ data }) => {
        this.playlists = data.items
      })
    },
    getPlaylistVideos(playlistId) {
      this.videos = this.playlists.find((x) => x.id === playlistId).videos
    },
    selectPlaylist(id) {
      this.selectedPlaylist = id
      this.getPlaylistVideos(id)
    },
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
  created() {
    this.getPlaylists()
  },
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
