<template>
  <div id="app" class="container">
    <playlists @select-playlist="selectPlaylist" v-if="!selectedPlaylist" :playlists="playlists" />
    <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div class="col mb-4" v-for="video in videos" :key="video.id">
        <div class="holder" v-if="selectedVideo !== video.snippet.resourceId.videoId">
          <img
            :id="video.snippet.resourceId.videoId"
            :src="video.snippet.thumbnails.medium.url"
            @mouseover="videoHover(video.snippet.resourceId.videoId)"
          />
        </div>

        <div v-else class>
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
import Playlists from "./components/Playlists.vue";
export default {
  name: "App",
  components: {
    playlists: Playlists
  },
  data() {
    return {
      selectedVideo: "",
      playlists: [],
      videos: [],
      selectedPlaylist: "",
      api: {
        endpoint: "https://www.googleapis.com/youtube/v3",
        key: "AIzaSyC-C3ut8Wm3KeYYuxs_RawKtT6oHhl0tLg",
        channelId: "UCp0Kd665CtievA0ss105ujA"
      }
    };
  },
  methods: {
    getPlaylists() {
      axios
        .get("https://plexus-flask-api.herokuapp.com/api.json")
        .then(response => {
          this.playlists = response.data.items;
        });
    },
    getPlaylistVideos(playlistId) {
      this.videos = this.playlists.find(x => x.id === playlistId).videos;
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
      window.location.href = `https://form.jotform.com/82301321716243?productLink=https://youtu.be/${id}`;
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
</style>