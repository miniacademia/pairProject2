<template>
<div>
    <h1> Ini Form Login </h1>
    <form class="col-sm-3" @submit.prevent="loginUser">
        <label>Email</label>
        <input v-model="login.email" type="email" class="form-control" placeholder="Enter email">
        <label>Password</label>
        <input v-model="login.password" type="password" class="form-control" placeholder="Enter password">
        <input type="submit" value="login" >
    </form>
</div>
    
    
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            login: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        loginUser (){
            console.log('tombol login ke klik')
            console.log(this.login)
            axios({
                url: `http://localhost:3000/api/users/login`,
                method: "post",
                dataType: "json",
                data: this.login,
            })
            .then(({data})=>{
                localStorage.setItem('token', data.token)
                localStorage.setItem('name', data.username)
                localStorage.setItem('email', data.email)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>
