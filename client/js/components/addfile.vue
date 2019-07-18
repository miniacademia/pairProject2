<template>
  <form>
    <label for="title"> Title</label>
    <input type="text" v-model="title">
    <br>
    <label for="description">Description </label>
    <input type="text" v-model="description">
    <br>
    <label for="file">Input File</label>
    <input type="file" @change="onFilePicked">
    <br>
    <button @click.prevent="upload">Submit</button>
  </form>
</template>
<script>
import axios from "axios"
// import Title from "./Title"

export default {
  name: "AddFile",
  data() {
    return {
      fileUrl: '',
      title: '',
      description: '',
    }
  },
  methods: {
      onFilePicked (e) {
      // this.loading = true
      // this.imageUrl = ""
        const files = e.target.files
        const formData = new FormData()
        formData.append('file', files[0])
        axios.post("http://localhost:3000/api/users/googleCloudStorage", formData)
          .then(response =>{
            this.fileUrl = response.data
          // console.log(response.data)
          })
          .catch(err =>{
            console.log(err.response)
          })
    },
    upload() {
      axios.post("http://localhost:3000/api/")
    }
  },

}
</script>

<style>

</style>
