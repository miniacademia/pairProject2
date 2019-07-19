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
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">Title Journal</span>
                        </div>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Description your journal</span>
                        </div>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
            </div>
            <div class="card-footer text-muted">
                <button class="btn btn-outline-info" type="submit">Add Journal</button>
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

