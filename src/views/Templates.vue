<template>
  <div>
    <p-header />

    <div class="container min-h-screen px-5 pb-6">
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
        v-if="!selectedPlaylist"
        :playlists="playlists"
        :selectedVideo="selectedVideo"
        :videoHover="videoHover"
        :videoHoverLeave="videoHoverLeave"
        :jotFormUrl="jotFormUrl"
      />

      <div
        v-else
        class="grid items-center grid-cols-1 gap-10 my-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <p-video-card
          v-for="video in videos"
          :key="video.id"
          :video="video"
          :selectedVideo="selectedVideo"
          :videoHover="videoHover"
          :videoHoverLeave="videoHoverLeave"
          :jotFormUrl="jotFormUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Components
import pHeader from '@/components/pHeader'
import Playlists from '@/components/Playlists'
import pVideoCard from '@/components/pVideoCard'

// Libraries
import axios from '@/lib/axios'

export default {
  name: 'Templates',
  components: {
    playlists: Playlists,
    pHeader,
    pVideoCard,
  },
  data: () => ({
    selectedVideo: '',
    playlists: [],
    videos: [],
    selectedPlaylist: '',
    jotFormUrl: process.env.VUE_APP_JOTFORM,
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
