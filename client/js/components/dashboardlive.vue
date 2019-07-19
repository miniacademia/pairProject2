<template>
    <div class="container">
        <div class="card" v-for="allJournal in allJournals" :key="allJournal._id">
            <div class="card-body">
                <h5 class="card-title">{{allJournal.title}}</h5>
                    <p class="card-text">{{allJournal.description}}</p>
                    <span>Created By: {{allJournal.userId.username}}</span>
                    <br>
                <h6 class="card-subtitle mb-2 text-muted">{{moment(allJournal.createdAt).fromNow()}}</h6>
                <a v-bind:href="allJournal.fileUrl">Download my file here!</a download>
                <a href='https://twitter.com/intent/tweet?text=check%20my%20awesome%20jurnal:%20title%20'><img src="http://pngimg.com/uploads/twitter/twitter_PNG9.png" width="30" height="30" alt="Twitter"></a>
         </div>
        </div>
        <hr>
        <p>date</p>
        
        <hr>
    </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
export default {
    props: ['keysearch'],
    data(){
        return {
            title: '',
            description: '',
            search: '',
            keysearchResult: [],
            allJournals: []
        }
    },
    created() {
        if(localStorage.getItem('token')) {
            this.getAllJournal()
        }
    },
    methods:{
       getAllJournal() {
           axios.get('http://localhost:3000/api/journals/allJournal')
            .then(({data}) => {
                this.allJournals = data
            })
            .catch((err) => {
                console.log(err.response.data.message)
            })
       },
       searchJournal(){
            console.log(this.keys)
            this.search = this.keysearch
            axios({
                method: 'GET',
                url: 'http://localhost:3000/api/journals/allJournal',
            })
            .then(({data})=>{
                console.log(data,this.keysearch, 'search')
                this.allJournals = []
                data.forEach(element => {
                    if (element.title.toLowerCase().includes(this.keysearch.toLowerCase())) {
                        this.allJournals.push(element)
                        console.log('masuk sini nih')
                        this.answer2 = 'Waiting for you stop writing . . .'
                        this.search = ''
                        return
                    } else {
                        this.search = ''
                        this.answer2 = 'not found 😭'
                    }
                })
            })
            .catch(err => {
                this.search = ''
                console.log(err)
            })
        },
         moment(date) {
           return moment(date)
       }
    },
    watch:{
        keysearch: function (newQuestion, oldQuestion) {
            // console.log('proses methods fetch database')
            this.searchJournal()
        }
    }
}
</script>

<style>

</style>
