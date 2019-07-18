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
