<template>
    <main class="container">
      <p v-if="$fetchState.pending">Fetching books...</p>
      <p v-else-if="$fetchState.error">An error occurred :c</p>

      <div v-else>
        <div v-for="book in data.books">
          <p>{{book.title}}</p>
        </div>
        <button @click="$fetch" class="btn btn-primary">refresh</button>
      </div>


    </main>
</template>

<script>
    export default {
      name: "test",
      middleware: 'log',
      data() {
        return {
          data: []
        }
      },
      // middleware: 'log'
      async fetch() {
        this.data = await fetch('http://localhost:3000/api/books').then(res => res.json());
        console.log(this.data.books);
      }
    }
</script>

<style scoped>

</style>
