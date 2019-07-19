<template>
    <div class="container">
        <div v-if="searchJournals.length === 0">
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
        <div v-if="searchJournals.length !== 0">
            <div class="card text-center" v-for="yourJournal in searchJournals" :key="yourJournal._id">
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
    </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
export default {
    props: ['keysearch'],
    data() {
        return {
            yourJournals: [],
            searchJournals: []
        }
    },
    created(){
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
            // axios({
            //     method: 'GET',
            //     url: 'http://localhost:3000/api/journals/journalByUser',
            // },{
            //      headers: {
            //         'token': localStorage.getItem('token')
            //     }
            // })
            // .then(({data})=>{
                let data = this.yourJournals
                this.searchJournals = []
                data.forEach(element => {
                    if (element.title.toLowerCase().includes(this.keysearch.toLowerCase())) {
                        this.searchJournals.push(element)
                        console.log('masuk sini')
                        this.answer2 = 'Waiting you stop writing . . .'
                        // this.keysearch = ''
                        // this.yourJournals = this.getYourJournals()
                        return
                    } else {
                        // this.keysearch = ''
                        // this.getYourJournals()
                        this.answer2 = 'not found 😭'
                    }
                })

                if(this.keysearch === '') this.searchJournals = []
            // })
            // .catch(err => {
            //             this.search = ''
            //     console.log(err)
            // })
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
