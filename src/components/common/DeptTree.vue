<!--
event
事件名称：@getDeptTree
说明：获取所选部门信息
回调参数：当前所选部门信息
-->
<template>
    <div  id="deptTree">
        <el-tree
                class="dept-tree-height_auto"
                accordion
                :props="props"
                :load="loadNode"
                lazy
                :expand-on-click-node="false"
                node-key="id"
                :default-expanded-keys="expandedKeys"
        >
            <div class="custom-tree-node" slot-scope="{ node, data }" @click="() => getNode(node)">
                <el-col :span="14">

                     <span class="custom-tree-icon">
                        <i class="el-icon-s-home"></i>
                     </span>
                    <span>{{ node.label }}</span>

                </el-col>
            </div>
        </el-tree>
    </div>
</template>

<script>
    export default {
        name: "DeptTree",
        data(){
            return{
                expandedKeys:[],
                props: {
                    label: 'name',
                    children: 'pid',
                    // isLeaf: 'leaf'
                },
            }
        },
        methods:{
            //加载部门
            loadNode(node, resolve) {
                let did = JSON.parse(sessionStorage.getItem('user')).did;//获取部门id
                let deptInfo = JSON.parse(sessionStorage.getItem('user')).department;//获取部门id
                if (node.level === 0) {
                    this.expandedKeys.push(did);
                    let deptInfoArr =deptInfo.length===0?[{'id':did,'name':''}]:[deptInfo[deptInfo.length-1]];
                    return resolve(deptInfoArr);
                }
                if (node.level > 1)
                    setTimeout(() => {
                    }, 500);
                return this.getDepartment(node.data.id).then(result => {
                    return resolve(result);
                });
            },
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

            //获取节点值
            getNode(node){
                console.log(node)
                this.$emit('getDeptTree',node)
            },
        },
        created(){
            // this.getDepartmentIdArr()
        }
    }
</script>

<style lang="scss">

    #deptTree{
        .dept-tree-height_auto{
            overflow: auto;
            max-height:82vh;
        }
        .custom-tree-node {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            /*font-size: 14px;*/
            /*padding-right: 8px;*/
        }
        .custom-tree-icon {
            color: $--color-primary;
        }

        /*部门间距*/
        .el-tree-node__content {
            height: 35px;
        }
    }

</style>