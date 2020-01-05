<template>
    <div>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :xs="24" :sm="16" :md="14" >
                <el-card shadow="hover">
                    <div slot="header" >
                        <span>部门设置</span>
                    </div>
                    <div>
                        <dept-manage></dept-manage>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import DeptManage from './components/DeptManage';
    export default {
        name: "department_add",
        components:{DeptManage},
        data() {
            return {

            }
        },
        methods: {
            getList() {
                console.log()
            }
        }
    }
</script>

<style scoped>

</style>