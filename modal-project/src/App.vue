<template>
  <h1>{{ title }}</h1>
  <!-- Refs -->
  <div v-if="false">
    <input type="text" ref="name">
    <button @click="handleClick">Click Me</button>
  </div>

  <p>Welcome...</p>
  <!-- Giveaway Modal -->
  <teleport to="#modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up now!</a>
        <a href="#">More info!</a>
      </template>
      <h1>NNEUID Giveaway!</h1>
      <p>Grab your NNEUID swags for half the price :)</p>
    </Modal>
  </teleport>
  <button @click.alt="toggleModal">Show Modal (Alt)</button>
  <!-- Signup Modal -->
  <teleport to="#modals" v-if="showSignupModal">
    <Modal :theme="''" @close="toggleSignupModal">
      <h1>Sign Up</h1>
      <p>Enter your credentials to Sign up</p>
      <template v-slot:form>
        <form>
          <input type="text" placeholder="Username">
          <input type="email" placeholder="Your email">
          <input type="password" placeholder="Your password">
        </form>
      </template>
    </Modal>
  </teleport>
  <button @click="toggleSignupModal">Show Sign Up Modal (click)</button>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Sign Up for Giveaway',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil magnam pariatur! Suscipit in deserunt dolor, nemo minima commodi odit et aliquid, quis enim accusantium. Reiciendis repudiandae quaerat aspernatur ullam?',
      showModal: false,
      showSignupModal: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value);
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleSignupModal() {
      this.showSignupModal = !this.showSignupModal
    }
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 5px;
}
</style>
