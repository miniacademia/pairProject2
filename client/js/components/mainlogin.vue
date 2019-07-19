<template>
    <div class="container">
        <div class="card text-center">
            <div class="card-header">
                    Journal Title
            </div>
            <div class="card-body">
                <h3>Title Journal</h3>
                <img src="" alt="Journal Image">
                <p> Description Journal </p>
            </div>
            <div class="card-footer text-muted">
                2 days ago (time)
                <!-- @click.prevent="delete" -->
                <button @click.prevent="deleteJournal"  class="btn btn-outline-danger" type="submit">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['keysearch'],
    data() {
        return {
            keysearchResult: []
        }
    },
    methods: {
        deleteJournal(){
            // dunno
        },
        searchJournal(){
            console.log(this.keysearch)
            axios({
                method: 'GET',
                url: 'http://localhost:3000/api/journals/allJournal',
            })
            .then(({data})=>{
                this.keysearchResult = []
                data.forEach(element => {
                    if (element.title.toLowerCase().includes(this.keysearch.toLowerCase())) {
                        this.keysearch.push(element)
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

<style scoped>
</style>
