<template>
  <div>
      <headers v-if="page !== 'login' && page !== 'register' && page !== 'login-page'" @gocreate="gocreate" @signout="gologin" @godashboard='godashboard' @gojournals='gojournals' @searching="searchInput"></headers>
      <div class="row">
        <div class="col-sm-3">
          <sidebar v-if="page !== 'login' && page !== 'register' && page !== 'login-page'" @gojournals="gojournals"></sidebar>
        </div>
        <div class="col-sm-6">
          <!-- <content v-if="page == 'home'" ></content> -->
          <dashboardlive v-if="page == 'home'" class="offset-3" v-bind:keysearch="search"></dashboardlive>
          <mainlogin v-if="page == 'journals'" class="offset-3" v-bind:keysearch="search"></mainlogin> 
          <uploadJournal v-if="page == 'create-page'" @goToDashboard="gohome"></uploadJournal>
        </div>
      </div>
      <div class="d-flex" >
        <mainusers v-if="page == 'login'" 
        @gohome="gohome"
        @goregister="goregister"
        class="d-flex row-sm offset-3"></mainusers>
      </div>
      <div class="d-flex justify-content-center">
        <register v-if="page == 'register'" @gologin="gologin"></register>
        <login v-if="page == 'login-page'" @goregister="goregister" @gohome="gohome"></login>
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
import sidebar from './components/sidebar'
import dashboardlive from './components/dashboardlive'

//bellom dibenerin


import formRegister from './components/formRegisterLuqman.vue'
import formLogin from './components/formLoginLuqman.vue'

export default {
  data() {
    return {
      message: 'Hello world',
      page: 'login',
      search: ''
    };
  },
  created() {
    if(localStorage.getItem('token')) {
      this.page = 'home'
    }
  },
  components: {
      mainusers, content, sidebar,
      mainlogin, uploadJournal, dashboardlive,
      headers, foo, register, login
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
        this.page = value
    },
    godashboard(value){
        this.page = value
    },
    gojournals(value){
        console.log(value)
        this.page = value
    },
    searchInput(value){
      this.search = value
    }
  },
};
</script>

<style scoped>
</style>