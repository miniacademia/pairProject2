<template>
  <div>
      <headers v-if="page !== 'login' && page !== 'register'" @gocreate="gocreate" @godashboard='godashboard'></headers>
      <mainusers v-if="page == 'login'" 
      @gohome="gohome"
      @goregister="goregister"></mainusers>
      <content v-if="page == 'home'"></content>
      <mainlogin v-if="page == 'home'"></mainlogin>
      <div class="d-flex justify-content-center">
        <register v-if="page == 'register'" @gologin="gologin"></register>
        <login v-if="page == 'login-page'" @goregister="goregister"></login>
        <uploadJournal v-if="page == 'create-page'"></uploadJournal>
         <formRegister></formRegister>
    <formLogin></formLogin>

      </div>
  </div>
</template>

<script>
import mainusers from './components/mainusers'
import mainlogin from './components/mainlogin'
import headers from './components/headers'
import foo from './components/footer'
import register from './components/register'
import login from './components/login'
import uploadJournal from './components/addfile'
import content from './components/content'

//bellom dibenerin


import formRegister from './components/formRegisterLuqman.vue'
import formLogin from './components/formLoginLuqman.vue'

export default {
  data() {
    return {
      message: 'Hello world',
      page: 'login'
    };
  },
  components: {
      mainusers, content,
      mainlogin, uploadJournal,
      headers, foo, register, login,
       formRegister,
    formLogin
  },
  methods:{
      gohome(value){
          this.page = value
      },
      goregister(value){
          this.page = value
      },
      gologin(value){
          this.page = value
      },
      gocreate(value){
          this.page=value
      },
      godashboard(value){
          this.page=value
      }
    }
};
</script>

<style scoped>
</style>