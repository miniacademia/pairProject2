<template>
    <div class="container">
        <div class="card" v-for="allJournal in allJournals" :key="allJournal._id">
            <div class="card-body">
                <h5 class="card-title">{{allJournal.title}}</h5>
                    <p class="card-text">{{allJournal.description}}</p>
                <h6 class="card-subtitle mb-2 text-muted">{{moment(allJournal.createdAt).fromNow()}}</h6>
                <a v-bind:href="allJournal.fileUrl">Download my file here!</a download>
         </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
export default {
    props: ['keys'],
    data(){
        return {
            title: '',
            description: '',
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
                console.log(this.allJournals)
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
        },
         moment(date) {
           return moment(date)
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
