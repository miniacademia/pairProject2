<template>
  <div>

    <formRegister></formRegister>
    <formLogin></formLogin>
  </div>

</template>

<script>
import formRegister from './components/formRegisterLuqman.vue'
import formLogin from './components/formLoginLuqman.vue'

export default {
  data() {
    return {
      message: 'Hello world',
    };
  },
  components: {
    formRegister,
    formLogin
  }
};
</script>

<style scoped>
</style>