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
      message: 'Hello Vue :)',
      title: 'God of Design',
      author: 'Noel Emmanuel.',
      pages: 256,
    }
  },
  methods: {
    changeTitle() {
      this.title = 'The MAYA Principle'
    }
  }
})

app.mount('#app')
