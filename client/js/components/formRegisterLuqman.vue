<template>
    <div>
        <h1> Ini Form Register </h1>
        <form class="col-sm-3" @submit.prevent="registerUser">
            <label>Username</label>
            <input v-model="register.username" type="text" class="form-control" placeholder="Enter username">
            <label>Email</label>
            <input v-model="register.email" type="email" class="form-control" placeholder="Enter email">
            <label>Password</label>
            <input v-model="register.password" type="password" class="form-control" placeholder="Enter password">
            <input type="submit" value="login" >
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            register: {
                username: "",
                email: "",
                password: ""

            }
        }
    },
    methods : {
        registerUser () {
            console.log('tombol register ke klik')
            console.log(this.register)
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

<style>

</style>
