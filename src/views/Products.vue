<template>
  <div>
    <p-header />

    <div class="container min-h-screen px-5">
      <div class="pb-8 mt-6 border-b">
        <div class="flex flex-col items-end">
          <label
            for="select-playlist"
            class="block text-sm font-medium leading-5 text-gray-700"
            >Filter by Category
          </label>
          <select
            id="select-playlist"
            class="block py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            @change="selectPlaylist"
          >
            <option value="All" selected>All</option>
            <option
              v-for="playlist in playlists"
              :key="playlist.id"
              :value="playlist.id"
              v-text="playlist.snippet.title"
            ></option>
          </select>
        </div>
      </div>

      <playlists
        @select-playlist="selectPlaylist"
        v-if="!selectedPlaylist"
        :playlists="playlists"
      />

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

            <router-link
              exact
              :to="{
                name: 'product-detail',
                params: { id: video.snippet.resourceId.videoId },
              }"
            >
              Video aquí
            </router-link>
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
      </div>
    </div>
  </div>
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
      this.videos = this.playlists.find(x => x.id === playlistId).videos
    },
    selectPlaylist(e) {
      const id = e.target.value

      if (id == 'All') {
        this.selectedPlaylist = ''
      } else {
        this.selectedPlaylist = id
        this.getPlaylistVideos(id)
      }
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
