<template>
    <div class="container">
        <!-- <h1>hei</h1> -->
         <div class="card text-center" v-for="yourJournal in yourJournals" :key="yourJournal._id">
            <div class="card-header">
                   {{yourJournal.title}}
            </div>
            <div class="card-body">
                <p> {{yourJournal.description}} </p>
            </div>
            <div class="card-footer text-muted">
                {{moment(yourJournal.createdAt).fromNow()}}
            <button @click.prevent="deleteJournal(yourJournal._id)" class="btn btn-outline-danger" type="submit">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
export default {
    props: ['keysearch'],
    data() {
        return {
            keysearchResult: [],
            yourJournals: []
        }
    },
    created() {
        if(localStorage.getItem('token')) {
            this.getYourJournals()
        }
    },
    methods: {
        deleteJournal(id){
            axios.delete(`http://localhost:3000/api/journals/deleteJournal/${id}`,{
                 headers: {
                    'token': localStorage.getItem('token')
                }
            })
                .then(({data}) => {
                    this.getYourJournals()
                })
                .catch((error) => {
                    console.log(error)
                })

            // dunno
        },
        getYourJournals() {
            axios.get('http://localhost:3000/api/journals/journalByUser',{
                headers: {
                    'token': localStorage.getItem('token')
                }
            })
                .then(({data}) => {
                    console.log(data)
                    this.yourJournals = data
                    console.log(this.yourJournals)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        moment(date) {
           return moment(date)
        },
        searchJournal(){
            console.log(this.keysearch)
            axios({
                method: 'GET',
                url: 'http://localhost:3000/api/journals/journalByUser',
            })
            .then(({data})=>{
                this.keysearchResult = []
                data.forEach(element => {
                    if (element.title.toLowerCase().includes(this.keysearch.toLowerCase())) {
                        this.keysearchResult.push(element)
                        console.log('masuk sini')
                        this.answer2 = 'Waiting you stop writing . . .'
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

<style scoped>
</style>
