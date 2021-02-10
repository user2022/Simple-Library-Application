<template>
    <main>
      <div v-for="book in books"> <!-- Loop through my books array which will copy the markup for each book with the correct values -->
        <div class="flex-header">
          <h3>{{book.title}}</h3>
          <div>
            <NuxtLink class="btn btn-primary" :to="'/book/'+ book._id">Edit</NuxtLink>
            <button class="btn btn-danger" @click="deleteBook(book._id)">Delete</button> <!-- Passing the book ID to my delete method -->
          </div>
        </div>
        <div>
          <img class="bookCover" :src="book.photo" :alt="book.description"/>
        </div>

        <p class="mt-3"><strong>Description</strong> <span class="lead">{{book.description}}</span></p>
        <p class="mt-1"><strong>Genre</strong> <span class="lead">{{book.genre}}</span></p>

        <div class="card mt-3">
          <div class="card-header">
            Author
          </div>
          <div class="card-body">
            <h5 class="card-title">{{book.author.name}}</h5>
            <p class="card-text"><strong>Gender:</strong> {{book.author.gender}}</p>
            <p class="card-text"><strong>Age:</strong> {{book.author.age}}</p>
            <p class="card-text"><strong>Deceased:</strong> {{book.author.deceased}} </p>
          </div>
        </div>

        <hr>

      </div>
    </main>
</template>

<script>
    export default {
      name: "BookList",
      props: ['books'], // Setting a books prop so I can pass data from parent component to this

      methods: {
        // Delete book method
        async deleteBook(id) {
          try {
            // Using a HTTP delete request to delete a book by passing in the ID as a parameter
            let result = await this.$axios.$delete(`/api/books/${id}`);

            console.log('DELETED');

          } catch(err) {
            console.log(err);
          }
        }
      }
    }
</script>

<style scoped>
  p {
    margin-bottom: 1px;
  }

  strong {
    text-transform: uppercase;
  }

  .flex-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .bookCover {
    max-width: 200px;
    height: auto;
  }
</style>
