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
          cover: 'https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/1.jpg'
        },
        {
          title: 'the way of kings',
          author: 'Brandon Sanderson',
          cover: 'https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/2.jpg'
        },
        {
          title: 'The final empire',
          author: 'Brandon Sanderson',
          cover: 'https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/3.jpg'
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
