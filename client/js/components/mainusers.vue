<template>
        <div class="hai" style="display: flex;" >
          <div style="justify-content: center" class="col">
            <div class="row">
              <h1 id="content-page2">Mini Academia</h1>
            </div>
            <h2>Join 90,448,712 Academics</h2>
            <p>Academia is the easiest way to share papers with millions of people across the world for </p>
            <p>free. A study published in PLOS ONE found that papers uploaded to Academia receive a </p>
            <p>69% boost in citations over 5 years.</p>

            <button @click="register" class="btn btn-outline-info">Register</button>
            <button @click="home" class="btn btn-outline-secondary"> Log In </button>
            <button class="btn btn-outline-danger">Google</button>
            <button class="btn btn-outline-info">Facebook</button>
          </div>
          <div class="row">
            <img src="../../assets/person.png" alt="img-page">
          </div>
      </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
      home(){
        this.$emit('gohome', 'login-page')
      },
      register(){
        this.$emit('goregister', 'register')
      }
    }
}
</script>

<style scoped>
  .hai{
    margin-top: 150px;
  }
  img{
    /* opacity: 0.5; */
    margin-right: 50px;
  }
  #content-page2 {
    opacity: 0.5;
    color: #37a4cd;
  }
</style>

