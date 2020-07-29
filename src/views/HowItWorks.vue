<template>
  <div class="min-h-screen pb-6">
    <p-header />

    <div class="relative overflow-hidden bg-white">
      <div class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <main
          class="container px-4 mx-auto mt-8 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24"
        >
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div
              class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            >
              <h2
                class="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
              >
                NOW EASILY
                <br class="hidden md:inline" />
                <span class="text-blue-600">CREATE PERSONALIZED VIDEO</span>
              </h2>
            </div>
            <div
              class="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            >
              <svg
                class="absolute top-0 origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:right-0 lg:transform-none"
                width="640"
                height="784"
                fill="none"
                viewBox="0 0 640 784"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x="118"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y="72"
                  width="640"
                  height="640"
                  class="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x="118"
                  width="404"
                  height="784"
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div
                class="relative w-full mx-auto rounded-lg shadow-lg lg:max-w-md"
              >
                <button
                  @click="isOpenModal = true"
                  type="button"
                  class="relative block w-full overflow-hidden rounded-lg focus:outline-none focus:shadow-outline"
                >
                  <img
                    class="w-full"
                    src="/video-image.png"
                    alt="Welcome to Plexus Market"
                  />
                  <div
                    class="absolute inset-0 flex items-center justify-center w-full h-full"
                  >
                    <svg
                      class="w-16 h-16 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle
                        opacity="0.9"
                        cx="42"
                        cy="42"
                        r="42"
                        fill="white"
                      />
                      <path
                        d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <div class="container px-5 my-16">
      <h2 class="text-2xl font-bold text-center">
        Easy Peazy Five Steps To Success
        <span role="img" aria-label="finger down">👇</span>
      </h2>

      <div class="py-12">
        <div class="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
          <div class="lg:grid lg:grid-cols-3 lg:gap-8">
            <div class="my-10 lg:m-0">
              <div
                class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h5 class="text-lg font-medium leading-6 text-gray-900">
                  Create
                </h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  This is the fun part. We’ll help guide you during the shoot so
                  your end product is seamlessly efficient and there are no
                  last-minute surprises. While in production, we’ll help you
                  keep in mind what Plexus can do to evolve your video
                  marketing.
                </p>
              </div>
            </div>

            <div class="my-10 lg:m-0">
              <div
                class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h5 class="text-lg font-medium leading-6 text-gray-900">
                  Edit
                </h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  We can take any existing base clip, such as online content, a
                  commercial, a TV show, or UGC, and overlay dynamic,
                  customized, personalized effects to generate individualized
                  videos for your audiences.
                </p>
              </div>
            </div>

            <div class="my-10 lg:m-0">
              <div
                class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h5 class="text-lg font-medium leading-6 text-gray-900">
                  Develop
                </h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  As soon as we have a locked edit we can set Plexus free, using
                  motion tracking, clip-swapping, dynamic overlays, or many more
                  features to bring your campaign to life. And we like to share,
                  so we’re cool with regular progress updates along the way.
                </p>
              </div>
            </div>

            <div class="my-10 lg:m-0">
              <div
                class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h5 class="text-lg font-medium leading-6 text-gray-900">
                  Launch
                </h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  We use highly optimized, crisp 4K video outputs that play
                  seamlessly on mobile and in social media. That means no matter
                  what device you’re using, our system performs flawlessly.
                </p>
              </div>
            </div>

            <div class="my-10 lg:m-0">
              <div
                class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h5 class="text-lg font-medium leading-6 text-gray-900">
                  Review Performance
                </h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  Plexus Market can track multiple user-interaction data points
                  to collect a detailed analysis of your entire campaign. Every
                  video created, watched, and shared is reported to our system
                  and is available for review anytime with our live reporting
                  feature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="mt-8 text-2xl font-bold text-center">
        Want Some More?
        <span role="img" aria-label="finger down">🧐</span>
      </h2>

      <div class="py-12">
        <div class="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
          <div class="lg:grid lg:grid-cols-4 lg:gap-4">
            <div class="p-4 my-12 bg-white bg-opacity-75 rounded shadow lg:m-0">
              <h5
                class="text-lg font-semibold leading-6 text-blue-700 capitalize"
              >
                Fast Dev Time
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Our premade software guarantees a quick dev process.
              </p>
            </div>

            <div class="p-4 my-12 bg-white bg-opacity-75 rounded shadow lg:m-0">
              <h5
                class="text-lg font-semibold leading-6 text-blue-700 capitalize"
              >
                Flexibility
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Plexus can be used for anyone, anywhere, anytime.
              </p>
            </div>

            <div class="p-4 my-12 bg-white bg-opacity-75 rounded shadow lg:m-0">
              <h5
                class="text-lg font-semibold leading-6 text-blue-700 capitalize"
              >
                High Quality
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Optimized 4K video makes your message crystal clear.
              </p>
            </div>

            <div class="p-4 my-12 bg-white bg-opacity-75 rounded shadow lg:m-0">
              <h5
                class="text-lg font-semibold leading-6 text-blue-700 capitalize"
              >
                Made For Mass
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Unmatched performance for captivating millions of fans.
              </p>
            </div>

            <div class="p-4 my-12 bg-white bg-opacity-75 rounded shadow lg:m-0">
              <h5
                class="text-lg font-semibold leading-6 text-blue-700 capitalize"
              >
                Highly Qualified Views
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Content that is personally created with the intention to watch.
              </p>
            </div>

            <div class="p-4 my-12 bg-white bg-opacity-75 rounded shadow lg:m-0">
              <h5
                class="text-lg font-semibold leading-6 text-blue-700 capitalize"
              >
                Fights Piracy
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Original personalized content needs Plexus to be created.
              </p>
            </div>

            <div class="p-4 my-12 bg-white bg-opacity-75 rounded shadow lg:m-0">
              <h5
                class="text-lg font-semibold leading-6 text-blue-700 capitalize"
              >
                Budget Protection
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Our pay-per-render model ensures you pay for what you get.
              </p>
            </div>

            <div class="p-4 my-12 bg-white bg-opacity-75 rounded shadow lg:m-0">
              <h5
                class="text-lg font-semibold leading-6 text-blue-700 capitalize"
              >
                Rapid Prototyping
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                See your idea quickly come to life without spending a fortune.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-300 ease-out"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        @click="isOpenModal = false"
        v-show="isOpenModal"
        class="fixed inset-0 transition-opacity"
      >
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
    </transition>

    <transition
      enter-active-class="duration-300 ease-out"
      enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      enter-to-class="translate-y-0 opacity-100 sm:scale-100"
      leave-active-class="duration-200 ease-in"
      leave-class="translate-y-0 opacity-100 sm:scale-100"
      leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
    >
      <div
        v-if="isOpenModal"
        class="absolute overflow-hidden transition-all transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl left-1/2 sm:max-w-6xl sm:w-full top-1/2"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="embed-responsive aspect-ratio-16/9">
          <iframe
            class="embed-responsive-item"
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/agbVL_WqXaY?enablejsapi=1&modestbranding=1&rel=0&showinfo=0"
            frameborder="0"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// Components
import pHeader from '@/components/pHeader'

export default {
  name: 'HowItWorks',
  data: () => ({
    isOpenModal: false,
  }),
  components: { pHeader },
}
</script>
