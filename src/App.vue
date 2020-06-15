<template>
  <div id="app">
    <div class="playlists" v-if="!selectedPlaylist">
      <div v-for="playlist in playlists" :key="playlist.id">
        {{ playlist.snippet.title }}
        <img
          :src="playlist.snippet.thumbnails.standard.url"
          @click="selectPlaylist(playlist.id)"
        />
      </div>
    </div>
    <div v-else>
      <div class="card" v-for="video in videos" :key="video.id">
        <div class="card" v-if="selectedVideo !== video.snippet.resourceId.videoId">
          <img
            :id="video.snippet.resourceId.videoId"
            :src="video.snippet.thumbnails.medium.url"
            @mouseover="videoHover(video.snippet.resourceId.videoId)"
          />
        </div>

        <div v-else class="card">
          <div class="holder">
            <iframe
              :id="video.snippet.resourceId.videoId"
              width="320"
              height="180"
              :src="`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&mute=1`"
              frameborder="0"
              class="frame"
            ></iframe>
            <div
              class="bar"
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
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      selectedVideo: "",
      playlists: [],
      videos: [],
      selectedPlaylist: "",
      api: {
        endpoint: "https://www.googleapis.com/youtube/v3",
        key: "AIzaSyC-C3ut8Wm3KeYYuxs_RawKtT6oHhl0tLg"
      }
    };
  },
  methods: {
    getPlaylists() {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCp0Kd665CtievA0ss105ujA&maxResults=50&key=${this.api.key}`
        )
        .then(response => {
          this.playlists = response.data.items;
        });
    },
    getPlaylistVideos(playlistId) {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${this.api.key}`
        )
        .then(response => {
          this.videos = response.data.items;
        });
    },
    selectPlaylist(id) {
      console.log(id);
      this.selectedPlaylist = id;
      this.getPlaylistVideos(id);
    },
    videoHover(id) {
      this.selectedVideo = id;
    },
    videoHoverLeave() {
      this.selectedVideo = "";
    },
    buy(id) {
      alert(id);
    }
  },
  created() {
    this.getPlaylists();
  }
};
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

.card {
  display: block;
  width: 400px;
}
</style>