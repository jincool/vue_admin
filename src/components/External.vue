<template>
    <div>
        <iframe :src="url" width="100%" height="620px" frameborder="no" border="0" marginwidth="0" marginheight="0"  ></iframe>
    </div>
</template>

<script>
    export default {
        name: "external",
        data(){
            return{
                 url:'',
            }
        },
        created(){
            let path = sessionStorage.getItem('url');
            if (path.substr(0,1)==='/')
                this.url = path.substr(1)
            // window.open(path.substr(1)) //弹出页面

        },
        beforeRouteLeave (to, from, next) {
            let path = to.path;
            if (path.substr(0,1)==='/')
                this.url = path.substr(1)
            // window.open(path.substr(1)) //弹出页面
            if (to.name!==undefined)
             next()
        },
    }
</script>

<style scoped>

</style>