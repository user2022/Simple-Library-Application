<template>
    <div class="container">
      <h1 v-if="error.statusCode === 404">Page Not Found</h1>
      <h1 v-else-if="error.statusCode === 500">Website is currently down</h1>
      <h1 v-else>An Error Occurred</h1>
      <hr>
      <p style="color: red">{{error.message}}, error: {{error.statusCode}}</p>
    </div>
</template>

<script>
    export default {
      name: "error",
      props: ['error']
    }
</script>

<style scoped>

</style>
