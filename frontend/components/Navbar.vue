<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <NuxtLink to="/" class="navbar-brand">Library</NuxtLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <!-- Using nuxt feature NuxtLink to create a link to my new pages -->
              <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/book/create" class="nav-link">Add Book</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/author/create" class="nav-link">Add Author</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/test" class="nav-link">Fetch test</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/test2" class="nav-link">Store test</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>

<script>
    export default {
      name: "Navbar",

    }
</script>

<style scoped>
  .nuxt-link-active {
    color: white;
  }
</style>
