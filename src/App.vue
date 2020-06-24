<template>
  <main>
    <transition
      enter-class="ease-in opacity-0"
      enter-active-class="transition-opacity duration-500 ease-in-out"
      leave-active-class="transition-opacity duration-500 ease-in-out"
      leave-to-class="ease-out opacity-0"
    >
      <router-view />
    </transition>
  </main>
</template>

<script>
export default {
  name: 'App',
}
</script>
