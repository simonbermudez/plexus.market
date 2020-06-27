<template>
  <fragment>
    <transition
      enter-class="ease-in opacity-0"
      enter-active-class="transition-opacity duration-500 ease-in-out"
      leave-active-class="transition-opacity duration-500 ease-in-out"
      leave-to-class="ease-out opacity-0"
    >
      <router-view />
    </transition>

    <footer class="w-full py-3 -mt-12 text-white bg-black">
      <div class="container px-5">
        <p class="text-center">
          Plexus Market © 2020
        </p>
      </div>
    </footer>
  </fragment>
</template>

<script>
export default {
  name: 'App',
}
</script>
