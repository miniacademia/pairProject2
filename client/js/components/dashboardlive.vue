<template>
    <div class="container">
        <h4>Title Journal</h4>
        <hr>
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quod quae nulla iure quos vel nam eius facilis distinctio, rerum explicabo necessitatibus et soluta doloremque maxime adipisci quidem, aut error!</p>
        </div>
        <hr>
        <p>date</p>
        <hr>
    </div>
</template>

<script>
export default {
    props: ['keys'],
    data(){
        return {
            title: '',
            description: '',
            keysearchResult: []
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
       searchJournal(){
            console.log(this.keys)
            axios({
                method: 'GET',
                url: 'http://localhost:3000/api/journals/allJournal',
            })
            .then(({data})=>{
                this.keysearchResult = []
                data.forEach(element => {
                    if (element.title.toLowerCase().includes(this.keys.toLowerCase())) {
                        this.keys.push(element)
                        console.log('masuk sini')
                        this.answer2 = 'Waiting you stop writing . . .'
                        return
                    } else {
                        this.answer2 = 'not found 😭'
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    watch:{
        search: function (newQuestion, oldQuestion) {
            // console.log('proses methods fetch database')
            this.searchJournal()
        }
    }
}
</script>

<style>

</style>
