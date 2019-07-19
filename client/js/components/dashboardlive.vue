<template>
    <div class="container" >
        <div class="card" v-for="allJournal in allJournals" :key="allJournal._id">
            <div class="card-body">
                <h5 class="card-title">{{allJournal.title}}</h5>
                    <p class="card-text">{{allJournal.description}}</p>
                <h6 class="card-subtitle mb-2 text-muted">{{moment(allJournal.createdAt).fromNow()}}</h6>
                <a v-bind:href="allJournal.fileUrl">Download my file here!</a download>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
export default {
    data(){
        return {
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
       moment(date) {
           return moment(date)
       }
    }
}
</script>

<style>

</style>
