<template>
    <div class="card text-center col-sm-4">
            <div class="card-header">
                <p>Form Login</p>
            </div>
            <div class="card-user text-left" style="margin: 20px;">
                    <div class="form-group">
                        <img src="https://img.icons8.com/bubbles/50/000000/gmail.png">
                        <label for="email">Email: </label>
                        <input v-model="login.email" type="email" class="form-control" placeholder="user@example.com">
                    </div>
                    <div class="form-group">
                        <img src="https://img.icons8.com/bubbles/50/000000/lock-2.png">
                        <label for="password">Password: </label>
                        <input v-model="login.password" type="password" class="form-control" placeholder="Password">
                    </div>
                    <button @click="loginUser" type="button" class="btn btn-primary">Sign in</button>
                    <button @click="register" type="button" class="btn btn-warning">Register</button>
            </div>
            <div class="card-footer">Since 2019</div>
        </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            login : {
                email: '',
                password: ''
            }
        }
    },
    methods:{
        register(){
            this.$emit('goregister', 'register')
        },
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
