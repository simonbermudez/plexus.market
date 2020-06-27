<template>
  <nav class="bg-white border-b border-gray-200">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex items-center flex-shrink-0">
            <img
              class="block w-auto h-8 lg:hidden"
              src="/logo-black.png"
              alt="Plexus Market"
            />
            <img
              class="hidden w-auto h-8 lg:block"
              src="/logo-black.png"
              alt="Plexus Market"
            />
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex">
            <router-link
              to="/"
              class="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
              active-class="text-gray-900 border-b-2 border-indigo-500"
              exact
            >
              Home
            </router-link>
            <router-link
              to="/products"
              class="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
              active-class="text-gray-900 border-b-2 border-indigo-500"
              exact
            >
              Products
            </router-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <router-link
            to="/contact-us"
            class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-blue-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md shadow hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-indigo"
          >
            Contact Us
          </router-link>
        </div>

        <div class="flex items-center -mr-2 sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            @click="isOpen = !isOpen"
          >
            <svg
              v-if="!isOpen"
              class="block w-6 h-6"
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

            <svg
              v-if="isOpen"
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
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <transition>
      <div v-if="isOpen" class="sm:hidden">
        <div class="pt-2 pb-3">
          <router-link
            exact
            to="/"
            class="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
            active-class="text-indigo-700 border-indigo-500 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700"
          >
            Home
          </router-link>
          <router-link
            exact
            to="/products"
            class="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
            active-class="text-indigo-700 border-indigo-500 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700"
          >
            Products
          </router-link>
        </div>

        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="px-5">
            <router-link
              to="/contact-us"
              class="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-blue-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md shadow hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-indigo"
            >
              Contact Us
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'pHeader',
  data: () => ({
    isOpen: false,
  }),
}
</script>
