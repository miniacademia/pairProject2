<template>
    <div>
        <div class="card text-center" v-for="yourJournal in yourJournals" :key="yourJournal._id">
            <div class="card-header">
                    {{yourJournal.title}}
            </div>
            <div class="card-body">
                <p> {{yourJournal.description}} </p>
            </div>
            <div class="card-footer text-muted">
                {{moment(allJournal.createdAt).fromNow()}}
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
export default {
    data(){
        return {
            yourJournals: []
        }
    },
    created() {
        if(localStoraget.getItem('token')) {
            this.getYourJournals()
        }
    },
    methods: {
        getYourJournals() {
            axios.get('http://localhost:3000/api/journals/journalByUser')
                .then(({data}) => {
                    this.yourJournals.push(data)
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
