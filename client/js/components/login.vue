<template>
    <div class="card text-center col-sm-4">
            <div class="card-header">
                <p>Form Login</p>
            </div>
            <div class="card-user text-left" style="margin: 20px;">
                    <div class="form-group">
                        <img src="https://img.icons8.com/bubbles/50/000000/gmail.png">
                        <label for="email">Email: </label>
                        <input type="email" class="form-control" placeholder="user@example.com">
                    </div>
                    <div class="form-group">
                        <img src="https://img.icons8.com/bubbles/50/000000/lock-2.png">
                        <label for="password">Password: </label>
                        <input type="password" class="form-control" placeholder="Password">
                    </div>
                    <button type="button" class="btn btn-primary">Sign in</button>
                    <button @click="register" type="button" class="btn btn-warning">Register</button>
            </div>
            <div class="card-footer">Since 2019</div>
        </div>
</template>

<script>
export default {
    data(){},
    methods:{
        register(){
            this.$emit('goregister', 'register')
        }
    }
}
</script>

<style>

</style>
