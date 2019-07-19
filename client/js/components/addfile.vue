<template>
    <div class="container">
        <div class="card text-center">
            <div class="card-header">
                Upload Journal 🌎
            </div>
            <div class="card-body">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Upload Journal</span>
                    </div>
                    <div class="input-group mb-3">
                        <input v-model="title" type="text" class="form-control" placeholder="Your journal title" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">Title Journal</span>
                        </div>
                    </div>
                    <div class="custom-file">
                        <input @change="onFilePicked" type="file" class="custom-file-input" id="inputGroupFile01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        <span></span>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">{{fileName}}</span>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Description your journal</span>
                        </div>
                        <textarea v-model="description" class="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
            </div>
            <div class="card-footer text-muted">
                <button @click.prevent="upload" class="btn btn-outline-info" type="submit">Add Journal</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    // methods:{
    //     register(){
    //         this.$emit('goregister', 'register')
    //     }
    // }

}
</script>

<style scoped>
    .container{
        padding-top: 100px;
    }
</style>

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
      fileName: ''
    }
  },
  methods: {
      onFilePicked (e) {
      // this.loading = true
      // this.imageUrl = ""
        const files = e.target.files
           if(files[0] !== undefined) {
                    this.fileName = files[0].name
                    if(this.fileName.lastIndexOf('.') <= 0) {
                        return
                    }
           }
        const formData = new FormData()
        formData.append('file', files[0])
        axios.post("http://localhost:3000/api/users/googleCloudStorage", formData)
          .then(response =>{
            // this.file = response.originalname
            this.fileUrl = response.data
            console.log(this.fileUrl)
          // console.log(response.data)
          })
          .catch(err =>{
            console.log(err.response.data.message)
          })
    },
    upload() {
      axios.post("http://localhost:3000/api/journals/addFile", {
          fileUrl: this.fileUrl,
          title: this.title,
          description: this.description,
      })
        .then(({data}) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
    }
  },

}
</script>

<style>

</style>
