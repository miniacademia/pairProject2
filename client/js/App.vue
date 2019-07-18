<template>
  <div>
    <NavBar :file="temp" @formLogin="showFormLogin"></NavBar>

    <h1>{{ message }}</h1>
    
    <AddFile></AddFile>
    <Login v-if="formLogin" @logged="successLogin"></Login>
  </div>
</template>

<script>
import NavBar from "./components/NavBar"
import AddFile from "./components/AddFile"
import Login from "./components/LoginTommy"
export default {
  components: {
    AddFile,
    NavBar,
    Login
  },
  props: {

  },
  data() {
    return {
      message: 'Hello world',
      temp: "",
      isLogin: false,
      formLogin: false
    };
  },
  methods: {
    adiEMANGKONTOL: function(val) {
      this.temp = val
    },
    successLogin: function(val) {
      this.isLogin = val
      this.formLogin = false
    },
    showFormLogin: function(val) {
      this.formLogin = true
    }
  }

};

</script>

<style scoped>
</style>