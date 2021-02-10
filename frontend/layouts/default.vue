<template>
  <div>
    <error-display v-if="this.$store.getters['getError']"/>
    <Navbar/>
    <Nuxt />
  </div>
</template>

<script>
  import Navbar from "~/components/Navbar";
  import ErrorDisplay from "~/components/error-display";
  export default {
    components: {ErrorDisplay, Navbar}
  }
</script>

<style>

</style>

