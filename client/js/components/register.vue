<template>
        <div class="card text-center col-sm-4">
            <div class="card-header">
                <p>Form Register</p>
            </div>
            <div class="card-user text-left" style="margin: 20px;">
                    <div class="form-group">
                        <img src="https://img.icons8.com/bubbles/50/000000/groups.png">
                        <label for="username">Username: </label>
                        <input v-model="register.username" type="text" class="form-control" id="Username" placeholder="username . . ">
                    </div>
                    <div class="form-group">
                        <img src="https://img.icons8.com/bubbles/50/000000/gmail.png">
                        <label for="email">Email: </label>
                        <input v-model="register.email" type="email" class="form-control" placeholder="user@example.com">
                    </div>
                    <div class="form-group">
                        <img src="https://img.icons8.com/bubbles/50/000000/lock-2.png">
                        <label for="password">Password: </label>
                        <input v-model="register.password" type="password" class="form-control" placeholder="Password">
                    </div>
                    <button @click="registerUser" type="button" class="btn btn-warning">Register</button>
                    <button @click="login" type="button" class="btn btn-primary">Sign in</button>
            </div>
            <div class="card-footer">Mini Academia</div>
        </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            register: {
                username: "",
                email: "",
                password: ""
            }
        }
    },
    methods:{
        login(){
            this.$emit('gologin', 'login-page')
        },
        registerUser () {
            console.log('tombol register ke klik')
            axios({
                url: `http://localhost:3000/api/users/register`,
                method: "post",
                dataType: "json",
                data: this.register,
            })
            .then(({data})=>{
                res.status(201).json(data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
    .card{
        margin-top: 100px;
    }
</style>


