<template>
    <div>
        <el-row :gutter="20">
            <el-col :xs="16" :sm="16" :md="14" >
                <el-card shadow="hover">
                    <div slot="header" >
                        <span>部门设置</span>
                    </div>
                    <div>
                        <dept-Manage></dept-Manage>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import deptManage from '@/components/common/DeptManage';
    export default {
        name: "department_add",
        components:{deptManage},
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