<template>
    <main class="container">
      <div v-for="book in books">
        <h2>{{book.title}}</h2>
        <button class="btn btn-danger" @click="deleteBook(book._id)">Delete</button>
      </div>
    </main>
</template>

<script>
    export default {
      name: "test2",
      methods: {
        deleteBook(id) {
          this.$store.dispatch('books/deleteBook', id);
        }
      },
      computed: {
        books() {
          return this.$store.getters["books/allBooks"];
        }
      },
      async asyncData({store, error}) {
        await store.dispatch('books/getBooks', error);
      }
    }
</script>

<style scoped>

</style>
