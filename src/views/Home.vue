<template>
  <div>
    <div class="relative overflow-hidden bg-white">
      <div class="hidden lg:block lg:absolute lg:inset-0">
        <svg
          class="absolute top-0 transform translate-x-64 -translate-y-8 left-1/2"
          width="640"
          height="784"
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
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
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>
      <div class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <nav
          class="relative flex items-center justify-between max-w-screen-xl px-4 mx-auto sm:px-6"
        >
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <router-link to="/" aria-label="Home">
                <img
                  class="w-auto h-8 sm:h-10"
                  src="/logo-black.png"
                  alt="Logo"
                />
              </router-link>
              <div class="flex items-center -mr-2 md:hidden">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  @click="isOpen = !isOpen"
                >
                  <svg
                    class="w-6 h-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="hidden md:block md:ml-10">
              <router-link
                to="/"
                class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
              >
                Home
              </router-link>
              <router-link
                to="/products"
                class="ml-10 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
              >
                Products
              </router-link>
            </div>
          </div>
          <div class="hidden text-right md:block">
            <span class="inline-flex rounded-md shadow-md">
              <span class="inline-flex rounded-md shadow-xs">
                <router-link
                  to="/contact-us"
                  class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-blue-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-indigo"
                >
                  Contact Us
                </router-link>
              </span>
            </span>
          </div>
        </nav>

        <transition
          enter-active-class="transition duration-100 ease-out transform"
          enter-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in transform"
          leave-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-if="isOpen"
            class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
          >
            <div class="rounded-lg shadow-md">
              <div
                class="overflow-hidden bg-white rounded-lg shadow-xs"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      class="w-auto h-8"
                      src="/logo-black.png"
                      alt="Plexus Market"
                    />
                  </div>
                  <div class="-mr-2">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                      aria-label="Close menu"
                      @click="isOpen = false"
                    >
                      <svg
                        class="w-6 h-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <router-link
                    to="/"
                    class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    role="menuitem"
                  >
                    Home
                  </router-link>
                  <router-link
                    to="/products"
                    class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    role="menuitem"
                  >
                    Products
                  </router-link>
                </div>
                <div>
                  <router-link
                    to="/contact-us"
                    class="block w-full px-5 py-3 font-medium text-center text-blue-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:bg-gray-100 focus:text-blue-700"
                    role="menuitem"
                  >
                    Contact Us
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </transition>

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
                Data to enrich your
                <br class="hidden md:inline" />
                <span class="text-blue-600">online business </span>
              </h2>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua ad ad non deserunt sunt.
              </p>
              <div
                class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
              >
                <p class="text-base font-medium text-gray-900">
                  Sign up to get notified when it’s ready.
                </p>
                <form action="#" method="POST" class="mt-3 sm:flex">
                  <input
                    aria-label="Email"
                    class="block w-full px-3 py-3 text-base leading-6 placeholder-gray-500 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:placeholder-gray-400 focus:shadow-outline-blue focus:border-blue-300 sm:flex-1"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    class="w-full px-6 py-3 mt-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Notify me
                  </button>
                </form>
              </div>
            </div>
            <div
              class="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            >
              <svg
                class="absolute top-0 origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:hidden"
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
                    src="/video-image.jpg"
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

    <div class="max-w-2xl pt-16 pb-8 mx-auto">
      <h2 class="text-4xl font-bold text-center text-gray-800">
        Beautiful Logo Animations <br />
        for Brands and Business Videos
      </h2>

      <p class="mt-6 text-center text-gray-500">
        Having a high quality logo animation, logo intro or logo ending for your
        videos is crucial. These short animations act like a business card for
        your videos on your website, social media and promo video productions.
      </p>
    </div>

    <div class="max-w-2xl pt-8 pb-16 mx-auto">
      <h2 class="text-4xl font-bold text-center text-gray-800">
        Create Your Animation in 3 Minutes <br />
        with our Online Templates
      </h2>

      <p class="mt-6 text-center text-gray-500">
        Our automated logo animation templates enable you to create a
        professionally animated logo in less than 3 minutes in a few clicks!
        Preview your video for free and try different animations. No software or
        design skills needed.
      </p>

      <div class="mt-12 text-center">
        <router-link
          to="/products"
          class="px-6 py-3 text-lg text-white bg-black rounded"
        >
          View Templates
        </router-link>
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
            src="http://www.youtube.com/embed/S-B8-93Y_ZM?autoplay=1&enablejsapi=1&modestbranding=1&rel=0&showinfo=0"
            frameborder="0"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    isOpen: false,
    isOpenModal: false,
  }),
}
</script>
