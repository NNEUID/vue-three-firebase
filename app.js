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
      title: 'God of Design',
      author: 'Noel Emmanuel.',
      pages: 256,
      x: 0,
      y: 0
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
