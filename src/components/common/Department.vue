<template>
    <el-cascader
                 :props="props"
                 :show-all-levels="false"
                 :collapse-tags="true"
                 clearable
                 placeholder="全部"
                 @change="handChange"
                >
    </el-cascader>
</template>

<script>
    export default {
        name: "Department",
        data() {
            let self = this;
            return {
                value:'',
                props: {
                    label: 'name',
                    value: 'id',
                    checkStrictly: true,
                    lazy: true,
                    lazyLoad (node, resolve) {
                        let did = JSON.parse(sessionStorage.getItem('user')).did;//获取部门id
                        let id = node.level===0?did:node.data.id;
                        self.getDepartment(id).then(result => {
                            setTimeout(() => {
                                // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                                resolve(result);
                            }, 500);

                        });
                    }
                }
            };
        },
        methods:{
            /**
             * 获取各级部门
             * @param id
             */
            async getDepartment(id) {
                return await this.$api.post('?f=department&c=department&a=getDepartment', {'pid': id}).then(res => {
                    if (res.status === 200) {
                        return res.data;
                    }
                });
            },
            /**
             * 获取用户所属上级部门
             * @returns {Array}
             */
            getDepartmentIdArr(){
                const department = JSON.parse(sessionStorage.getItem('user')).department;
                const departmentArr = [];
                department.forEach(item=>{
                    departmentArr.push(item.id);
                });
                return departmentArr;
            },
            /**
             * 初始化上级部门
             */
            departmentIdArrInit(){
                let departmentArr = this.getDepartmentIdArr();
                this.$store.commit('SELECT_DEPARTMENT',departmentArr);
            },
            /**
             * 选择框改变，获取选择值
             * @param val
             */
            handChange(val){
                let departmentArr = this.getDepartmentIdArr();
                let departmentId = departmentArr.concat(val);
                this.$store.commit('SELECT_DEPARTMENT',departmentId);
                console.log(this.$store.state.selectDepartment.deptId);
            },
        },
        created(){
            this.departmentIdArrInit();//初始化归属上级部门
            // console.log(this.$store.state.selectDepartment.deptId);
        }
    }
</script>

<style scoped>

</style>