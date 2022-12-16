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
      books: [
        {
          title: 'name of the wind',
          author: 'Patrick Rothfuss'
        },
        {
          title: 'the way of kings',
          author: 'Brandon Sanderson'
        },
        {
          title: 'The final empire',
          author: 'Brandon Sanderson'
        }
      ],
    }
  },
  methods: {
    handleEvent(e, arg) {
      console.log(e, e.type);
      if(arg) {
        console.log(arg);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app')
