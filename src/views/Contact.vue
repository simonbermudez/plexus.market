<template>
  <div class="min-h-screen">
    <p-header />

    <div class="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
      <div class="relative max-w-xl mx-auto">
        <svg
          class="absolute transform translate-x-1/2 left-full"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
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
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          class="absolute bottom-0 transform -translate-x-1/2 right-full"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
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
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div class="text-center">
          <h2
            class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Contact Us
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-500">Let's Talk!</p>
        </div>
        <div class="mt-12 kwes-form">
          <form
            action="https://kwes.io/api/foreign/forms/pYxeb1oxK52MDVnsFHvY"
            method="POST"
            class="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
          >
            <div>
              <label
                for="first_name"
                class="block text-sm font-medium leading-5 text-gray-700"
                >First name</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  id="first_name"
                  name="firstName"
                  class="block w-full px-4 py-3 transition duration-150 ease-in-out form-input"
                  rules="required|min:3|max:20"
                />
              </div>
            </div>
            <div>
              <label
                for="last_name"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Last name</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  id="last_name"
                  name="lastName"
                  class="block w-full px-4 py-3 transition duration-150 ease-in-out form-input"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="company"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Company</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  id="company"
                  name="company"
                  class="block w-full px-4 py-3 transition duration-150 ease-in-out form-input"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Email</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  name="email"
                  class="block w-full px-4 py-3 transition duration-150 ease-in-out form-input"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone_number"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Phone Number</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 flex items-center">
                  <select
                    aria-label="Country"
                    name="countryNumber"
                    class="h-full py-0 pl-4 pr-8 text-gray-500 transition duration-150 ease-in-out bg-transparent border-transparent form-select"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  id="phone_number"
                  name="phone"
                  class="block w-full px-4 py-3 pl-20 transition duration-150 ease-in-out form-input"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Message</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="block w-full px-4 py-3 transition duration-150 ease-in-out form-textarea"
                ></textarea>
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <span
                    role="checkbox"
                    tabindex="0"
                    aria-checked="false"
                    class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline"
                    :class="{
                      'bg-indigo-600': isChecked,
                      'bg-gray-200': !isChecked,
                    }"
                    @click="isChecked = !isChecked"
                  >
                    <span
                      aria-hidden="true"
                      class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow"
                      :class="{
                        'translate-x-5': isChecked,
                        'translate-x-0': !isChecked,
                      }"
                    ></span>
                  </span>
                </div>
                <div class="ml-3">
                  <p class="text-base leading-6 text-gray-500">
                    By selecting this, you agree to the
                    <a href="#" class="font-medium text-gray-700 underline"
                      >Privacy Policy</a
                    >
                    and
                    <a href="#" class="font-medium text-gray-700 underline"
                      >Cookie Policy</a
                    >.
                  </p>
                </div>
              </div>
            </div>
            <div class="sm:col-span-2">
              <span class="inline-flex w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                >
                  Let's talk
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import pHeader from '@/components/pHeader'

export default {
  name: 'Contact',
  components: { pHeader },
  data: () => ({
    isChecked: false,
  }),
}
</script>
