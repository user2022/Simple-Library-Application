<template>
  <main>
    <div class="container">
      <div class="mt-2"><h1>Available Books</h1></div>
      <hr>
      <!-- Passing the books to my bookList component by using a prop -->
      <BookList :books="books"/>

    </div>
  </main>
</template>

<script>
  import BookList from "~/components/BookList";
  export default {
    components: {BookList},

    // asyncData is a life cycle hook provided by nuxt, when a user navigates to this page it will only display the page
    // once the code inside the try is completed to give a better user experience
    async asyncData({$axios, error}) { // Passing in axios which I will use for doing HTTP requests
      try {
        // Sending a get request to http://localhost:3000/api/books which should return a list of all my books
        let response = await $axios.$get(`/api/books`);

        console.log(response.books);
        return { // property books can now be used in my vue template
          books: response.books
        }

      } catch(err) {
        error({statusCode: 500, message: 'Problems with our server'})
      }
    }
  }
</script>

<style>

</style>
