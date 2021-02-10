<template>
    <main>
      <div class="container mt-3">
        <h1>Create an author</h1>
        <hr>
        <form @submit.prevent="addAuthor">
          <div class="form-group">
            <label for="authorName">Name</label>
            <input v-model="name" type="text" class="form-control" id="authorName">

            <label for="authorGender">Gender</label>
            <select class="custom-select mr-sm-2" id="authorGender" v-model="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <label for="authorAge">Age</label>
            <input v-model="age" type="number" id="authorAge" class="form-control">

            <label for="authorDec">Deceased</label>
            <select class="custom-select mr-sm-2" id="authorDec" v-model="deceased">
              <option :value="true">True</option>
              <option :value="false">False</option>
            </select>

          </div>

          <button class="btn btn-primary" type="submit">Add Author</button>
        </form>

        <hr>

        <h3>List of current authors</h3>
        <p v-for="author in authors">{{author.name}}</p>
      </div>
    </main>
</template>

<script>
    export default {
      name: "createAuthor",

      data() {
        return {
          name: '',
          gender: 'Male',
          age: '',
          deceased: false,
        }
      },

      methods: {
        // Creating a new author
        async addAuthor() {
          try {
            // Creating a new data object
            let data = {
              name: this.name,
              gender: this.gender,
              age: this.age,
              deceased: this.deceased
            }

            // Sending post request to API with the data
            let result = await this.$axios.$post('/api/authors', data);

            // Takes me back to the homepage
            await this.$router.push('/author/create');

          } catch(err) {
            console.log(err);
          }
        }
      },

      // Getting list of authors
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
