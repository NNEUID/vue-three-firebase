// const { createApp } = Vue

// createApp({
//   data() {
//     return {
//       message: 'Hello Vue :)',
//     }
//   }
// }).mount('#app')

const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      message: 'Hello Vue :)',
      url: 'https://nneuid.com',
      books: [
        {
          title: 'name of the wind',
          author: 'Patrick Rothfuss',
          cover: 'https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/1.jpg',
          isFav: true
        },
        {
          title: 'the way of kings',
          author: 'Brandon Sanderson',
          cover: 'https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/2.jpg',
          isFav: false
        },
        {
          title: 'The final empire',
          author: 'Brandon Sanderson',
          cover: 'https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/3.jpg',
          isFav: true
        }
      ],
    }
  },
  methods: {
    toggleShowBooks(book) {
      this.showBooks = !this.showBooks
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    },
  }
})

app.mount('#app')
