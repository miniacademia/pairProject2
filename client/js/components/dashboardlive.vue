<template>
    <div class="container">
        <h4>Title Journal</h4>
        <hr>
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quod quae nulla iure quos vel nam eius facilis distinctio, rerum explicabo necessitatibus et soluta doloremque maxime adipisci quidem, aut error!</p>
        </div>
        <hr>
        <p>date</p>
        <a href="https://twitter.com/intent/tweet?text=Hello%20world"><img src="http://pngimg.com/uploads/twitter/twitter_PNG9.png" width="30" height="30" alt="Twitter"></a>
        <hr>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: '',
            description: '',
            
        }
    },
    methods:{
       getAllJournal() {
           axios.get('http://localhost:3000/api/journals/allJournal')
            .then(({data}) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err.response.data.message)
            })
       },
    }
}
</script>

<style>

</style>
