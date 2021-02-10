<template>
    <main>
      <div class="container mt-2">
        <h1>Create a Book</h1>
        <hr>
        <!-- .prevent will prevent the default behaviour of a submit button -->
        <form @submit.prevent="addBook">
          <div class="form-group">
            <label for="bookTitle">Title</label>
            <!-- Using v-model will bind my data properties to the values of the form inputs -->
            <input v-model="title" type="text" class="form-control" id="bookTitle">

            <label for="bookDesc">Description</label>
            <input v-model="description" type="text" class="form-control" id="bookDesc">

            <label for="bookGenre">Genre</label>
            <input v-model="genre" type="text" id="bookGenre" class="form-control">

            <label for="bookAuthor">Author</label>
            <select class="custom-select mr-sm-2" id="bookAuthor" v-model="author">
              <!-- Displaying a list of the authors inside the select box -->
              <option v-for="author in authors" :value="author._id">{{author.name}}</option>
            </select>

            <br>
            <label class="mt-3">Upload Photo</label>
            <input type="file" @change="onFileSelected">
            <br>
            <p>{{fileName}}</p>
          </div>

          <button class="btn btn-primary" type="submit">Add Book</button>
        </form>

      </div>
    </main>
</template>

<script>
    export default {
      name: "create",
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
        // Add a book method
        async addBook() {
          try {
            // Using form data object as I'm uploading an image
            let data = new FormData();
            data.append('title', this.title);
            data.append('description', this.description);
            data.append('genre', this.genre);
            data.append('author', this.author);
            data.append('photo', this.selectedFile, this.selectedFile.name);

            // Sending post request to API with the data
            let result = await this.$axios.$post('/api/books', data);

            // Takes me back to the homepage
            await this.$router.push('/');

          } catch(err) {
            console.log(err);
          }
        },

        // A method for getting the selected file and file name
        onFileSelected(e) {
          this.selectedFile = e.target.files[0];  // Set selected file to the first image in the array
          console.log(this.selectedFile);
          this.fileName = e.target.files[0].name; // Setting the name of the file to the name from what's being uploaded
        }
      },

      // Get all authors
      async asyncData({$axios}) {
        try {
          let response = await $axios.$get(`/api/authors`);

          return {
            authors: response.authors
          }

        } catch(err) {
          console.log(err);
        }
      }
    }
</script>

<style scoped>

</style>
