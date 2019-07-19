<template>
<header>
      <nav class="justify-content-between">
        <h1>{{file}}</h1>
        <span><img src="../../img/Screen Shot 2019-07-18 at 16.29.29.png" alt="logo mini academia" height="80"></span>
        <button class="btn btn-outline-info" @click.prevent="triggerFormLogin">Log in</button>
      </nav>
</header>
</template>

<script>
export default {
  props: ["file"],
  name: "NavBar",
  methods: {
    triggerFormLogin() {
      this.$emit('formLogin')
    }
  }
}
</script>

<style>

</style>
