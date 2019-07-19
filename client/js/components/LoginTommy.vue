<template>
  <form>
    <label for="email">Email</label>
    <input type="text" v-model="email">
    <label for="password">Password</label>
    <input type="text" v-model="password">
    <button type="submit" @click.prevent="submitLogin">Submit</button>
  </form>
</template>


<script>
import axios from 'axios'
export default {
  name:"LoginTommy",
  data() {
    return {
      email:"",
      password:""
    }
  },
  methods: {
    submitLogin() {
      console.log('asd')
      axios.post('http://localhost:3000/api/users/login',{
        email: this.email,
        password: this.password
      })
        .then((loggedIn) => {
          console.log(loggedIn);
          this.$emit("logged", true)
        })
        .catch((error) => {
          console.log(error.response.data.message)
        })
    }
  }

}
</script>

<style>

</style>
