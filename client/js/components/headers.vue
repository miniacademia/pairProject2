<template>
    <header>
      <nav class="nav justify-content-between" style="margin-right: 30px;">
        <span><img src="../../assets/navbar.png" alt="logo mini academia" height="80"></span>
        <div class="form-inline">
            <input class="form-control " type="search" placeholder="Search" aria-label="Search" style="width: 500px">
        </div>
        <div class="form-inline">
            <button @click="dashboard" class="btn btn-outline-info justify-content-end glyphicon glyphicon-search" type="button">dashboard</button>
            <button @click="create" class="btn btn-outline-info justify-content-end glyphicon glyphicon-search" type="button">Create</button>
        </div>
      </nav>
    </header>

</template>

<script>
// import image from '../../img/logo.png'
export default {
    data(){
        return{}
    },
    methods:{
        create(){
            this.$emit('gocreate', 'create-page')
        },
        dashboard(){
            this.$emit('godashboard', 'home')
        }
    }
}
</script>

<style>

</style>
