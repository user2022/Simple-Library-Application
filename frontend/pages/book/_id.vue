<template>
  <main>
    <div class="container mt-3">
      <h2>Edit book: {{book.title}}</h2>
      <hr>
      <form>
        <div class="form-group">
          <label for="bookTitle">Title</label>
          <input v-model="title" type="text" class="form-control" id="bookTitle" :placeholder="book.title">

          <label for="bookDesc">Description</label>
          <input v-model="description" type="text" class="form-control" id="bookDesc" :placeholder="book.description">

          <label for="bookGenre">Genre</label>
          <input v-model="genre" type="text" id="bookGenre" class="form-control" :placeholder="book.genre">

          <label for="bookAuthor">Author</label>
          <select class="custom-select mr-sm-2" id="bookAuthor" v-model="author">
            <option v-for="author in authors" :value="author._id">{{author.name}}</option>
          </select>

          <label class="mt-3">Upload Photo</label>
          <input type="file" @change="onFileSelected">

        </div>

        <button class="btn btn-primary" type="button" @click="updateBook">Update Book</button>
        <br>
        <button class="btn btn-success" type="button" @click="storeUpdate">VueX Update</button>
      </form>
    </div>
  </main>
</template>

<script>
    export default {
      name: "EditBook",
      data() {
        return {
          title: '',
          description: '',
          genre: '',
          author: null,

          selectedFile: null,
          fileName: ''
        }
      },

      methods: {
        // Update book
        async updateBook() {
          try {
            let data = {
              title: this.title,
              description: this.description,
              genre: this.genre,
              author: this.author
            };

            let result = await this.$axios.$put(`/api/books/${this.$route.params.id}`, data);

            await this.$router.push('/');

          } catch(err) {
            console.log(err);
          }
        },

        async storeUpdate() {
          try {
            // let data = {
            //   title: this.title,
            //   description: this.description,
            //   genre: this.genre,
            //   author: this.author
            // };

            let data = new FormData();
            data.append('title', this.title);
            data.append('description', this.description);
            data.append('genre', this.genre);
            data.append('author', this.author);
            data.append('photo', this.selectedFile, this.selectedFile.name);

            await this.$store.dispatch(`books/updateBook`, {updatedBook: data, id: this.$route.params.id});

            await this.$router.push('/');

          } catch(err) {
            console.log(err);
          }
        },

        onFileSelected(e) {
          this.selectedFile = e.target.files[0];  // Set selected file to the first image in the array
          console.log(this.selectedFile);
          this.fileName = e.target.files[0].name; // Setting the name of the file to the name from what's being uploaded
        }
      },

      // Getting one book
      async asyncData({$axios, params}) {
        try {
          // Getting one book by passing document ID into URL param
          let response = await $axios.$get(`/api/books/${params.id}`);
          let authors = await $axios.$get('/api/authors');

          console.log(response);

          return {
            book: response.book,
            authors: authors.authors
          }

        } catch(err) {
          console.log(err);
        }
      }
    }
</script>

<style scoped>

</style>
