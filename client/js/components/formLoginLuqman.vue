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
