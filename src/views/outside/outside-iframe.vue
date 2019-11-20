<template>
    <div>
        <iframe :src="url" width="100%" height="620px" frameborder="no" border="0" marginwidth="0" marginheight="0"  ></iframe>

    </div>
</template>

<script>
    export default {
        name: "Outside.vue",
        data(){
            return{
                 url:'',
            }
        },
        created(){
            let path = this.$route.query.redirect;
            if (path.substr(0,1)=='/')
                this.url = path.substr(1)
            // console.log(path.substr(1));
        }
    }
</script>

<style scoped>

</style>