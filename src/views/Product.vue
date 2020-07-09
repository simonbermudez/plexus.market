<template>
  <div class="min-h-screen pb-6">
    <p-header />

    <transition
      enter-class="ease-in opacity-0"
      enter-active-class="transition-all duration-500 ease-in-out"
      leave-active-class="transition-all duration-500 ease-in-out"
      leave-to-class="ease-out opacity-0"
    >
      <div class="flex justify-center py-24">
        <bar-loader
          :loading="isLoading"
          :color="'#2b6cb0'"
          :size="100"
          class="mx-auto"
        />

        <section
          v-if="!isLoading"
          class="w-full overflow-hidden text-gray-700 body-font"
        >
          <div class="container px-5 mx-auto">
            <div class="flex flex-wrap items-center mx-auto lg:w-4/5">
              <div class="w-full lg:w-1/2">
                <div class="embed-responsive aspect-ratio-16/9">
                  <iframe
                    :id="id"
                    :src="`https://www.youtube.com/embed/${id}?autoplay=0&showinfo=0&autohide=1&modestbranding=1&rel=0`"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    width="800"
                    height="443"
                    type="text/html"
                    class="embed-responsive-item"
                  ></iframe>
                </div>
              </div>

              <div class="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                <h2
                  class="text-sm tracking-widest text-gray-500 uppercase title-font"
                >
                  plexus market
                </h2>

                <h1
                  class="mb-1 text-3xl font-medium text-gray-900 title-font"
                  v-text="video.snippet.title"
                />

                <p class="leading-relaxed">
                  <vue-markdown
                    :source="'Get your video starting from 0$!'"
                    :anchorAttributes="anchorAttrs"
                    toc-anchor-link-class="underline"
                  />
                </p>

                <div class="flex items-center mt-4">
                  <div class="flex flex-col">
                    <p
                      class="block font-medium text-gray-900 text-md title-font"
                    >
                      $0
                      <span class="text-gray-500"
                        >720p with Plexus Market Watermark</span
                      >
                    </p>
                    <p
                      class="block font-medium text-gray-900 text-md title-font"
                    >
                      $7.00
                      <span class="text-gray-500">1080p</span>
                    </p>
                    <p
                      class="block font-medium text-gray-900 text-md title-font"
                    >
                      $14.00
                      <span class="text-gray-500">4K</span>
                    </p>
                  </div>

                  <a
                    :href="`${jotFormUrl}/${id}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex px-6 py-2 ml-auto text-white transition-all duration-200 bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600"
                    >Buy Now</a
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </transition>

    <section class="container flex flex-col justify-center px-5 pb-16">
      <h2 class="text-3xl font-medium text-center">You may like</h2>

      <div
        class="grid items-center grid-cols-1 gap-10 my-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <p-video-card
          v-for="video in videos.slice(1, 4)"
          :key="video.id"
          :video="video"
          :selectedVideo="selectedVideo"
          :videoHover="videoHover"
          :videoHoverLeave="videoHoverLeave"
          :jotFormUrl="jotFormUrl"
        />
      </div>
    </section>
  </div>
</template>

<script>
// Dependencies
import VueMarkdown from 'vue-markdown'
import { BarLoader } from '@saeris/vue-spinners'
import pVideoCard from '@/components/pVideoCard'

// Components
import pHeader from '@/components/pHeader'

// Libraries
import axios from '@/lib/axios'

export default {
  name: 'Product',
  components: {
    pHeader,
    VueMarkdown,
    BarLoader,
    pVideoCard,
  },
  data: () => ({
    id: '',
    isLoading: true,
    video: {},
    videos: [],
    selectedVideo: '',
    jotFormUrl: process.env.VUE_APP_JOTFORM,
    anchorAttrs: {
      target: '_blank',
      rel: 'noopener noreferrer nofollow',
    },
  }),
  watch: {
    $route() {
      this.id = this.$route.params.id

      this.getVideo()
    },
  },
  created() {
    this.id = this.$route.params.id

    this.getVideo()
  },
  methods: {
    async getVideo() {
      const id = this.$route.params.id

      await axios.get(process.env.VUE_APP_API_URL).then(({ data }) => {
        data.items.map(item => {
          this.videos = [...this.videos, ...item.videos]
        })
      })

      this.video = this.videos.find(v => v.snippet.resourceId.videoId === id)
      this.isLoading = false

      this.videos.sort((a, b) => {
        return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
      })
    },
    videoHover(id) {
      this.selectedVideo = id
    },
    videoHoverLeave() {
      this.selectedVideo = ''
    },
  },
}
</script>
