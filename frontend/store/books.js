
export const state = () => ({
  books: []
});

// Get state property values
export const getters = {
  allBooks(state) {
    return state.books;
  }
}

// Commit mutations // Actions let me execute mutations
export const actions = {
  async getBooks({commit}, error) {
    try {
      let response = await this.$axios.$get('/api/books');
      commit('SET_BOOKS', response.books); // Committing the mutation
    } catch(err) {
      console.log(err);
      error({statusCode: 500, message: 'Problems with our server'});
    }
  },

  async deleteBook({commit}, id) {
    try {
      await this.$axios.$delete(`/api/books/${id}`);
      commit('DEL_BOOK', id);
    } catch(err) {
      console.log(err);
      commit('SET_ERROR', true, {root: true}); // Display error component, sets error value to true in my root store
    }
  },

  async updateBook({commit}, {updatedBook, id}) {
    try {
      let response = await this.$axios.$put(`/api/books/${id}`, updatedBook);
      commit('UPDATE_BOOK', response);
    } catch(err) {
      console.log(err);
      commit('SET_ERROR', true, {root: true});
    }

  }
}

// Mutate the state // Mutations allow me to change the state
export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books;
  },
  DEL_BOOK(state, id) {
    const index = state.books.findIndex((book) => book._id === id); // Find the index of the book that needs to be deleted
    if (index !== -1) state.books.splice(index, 1); // remove the book
  },
  UPDATE_BOOK(state, updatedBook) {
    const index = state.books.findIndex((book) => book._id === updatedBook._id); // Get the index of the book that matches the id of updated book
    // if (index !== -1) {
    //   state.books[index].title = updatedBook.title;
    //   state.books[index].description = updatedBook.description;
    //   state.books[index].author = updatedBook.author;
    //   state.books[index].genre = updatedBook.genre;
    //   state.books[index].photo = updatedBook.photo;
    // }

    if (index !== -1) state.books.splice(index, 1, updatedBook); // Remove old book and add new updated book to array
  }
}
