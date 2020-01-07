<template>
    <div id="deptManage">
        <el-button
                style="margin-left: 20px"
                size="small"
                icon="el-icon-circle-plus-outline"
                @click="openDialog(3)">新增部门
        </el-button>
        <el-tree
                v-if="isRefresh"
                :props="props"
                :load="loadNode"
                lazy
                :expand-on-click-node="false"
        >

            <div  class="custom-tree-node weight-auto" slot-scope="{ node, data }" @click="() => getNode(node)">
                <!--<el-row type="flex" class="row-bg" justify="space-between">-->
                <el-col :xs="12">
                     <span class="custom-tree-icon">
                        <i class="el-icon-s-home"></i>
                     </span>
                    <span>{{ node.label }}</span>
                </el-col>
                <el-col :xs="12">
                    <el-button
                            size="mini"
                            icon="el-icon-edit"
                            @click="openDialog(1)">编辑
                    </el-button>
                    <el-button
                            size="mini" type="primary"
                            icon="el-icon-circle-plus-outline"
                            @click="openDialog(2)">新增
                    </el-button>
                    <el-button
                            size="mini" type="danger"
                            icon="el-icon-delete"
                            @click="deleteDepartment(node.data.id,node.data.pid)">删除
                    </el-button>
                </el-col>
                <!--</el-row>-->
            </div>
        </el-tree>


        <!--模态框-->
        <el-dialog
                :visible.sync="dialogVisible"
                 width="280px"
                :before-close="handleClose">
            <span slot="title">
                添加
            </span>
            <div>
                <el-input v-model="departmentName" placeholder="请输入名字"></el-input>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
    <el-button size="mini" v-if="type===3" type="primary" @click="addTopDepartment">确 定</el-button>
    <el-button size="mini" v-else type="primary" @click="editDepartment">确 定</el-button>
  </span>
        </el-dialog>


    </div>
</template>

<script>
import { deleteBox} from "@/utils/utils";
export default {
        name: "Tree",
        data() {
            return {
                isRefresh:true,//刷新组件
                data: [],
                props: {
                    label: 'name',
                    children: 'pid',
                    // isLeaf: 'leaf'
                },
                dialogVisible:false,//模态框开关
                departmentName:'',//部门名称
                type:'',//操作方式
                node:'',//选中的节点
            }
        },

        methods: {
            //加载部门
            loadNode(node, resolve) {
                let did = JSON.parse(sessionStorage.getItem('user')).did;//获取部门id
                if (node.level === 0) {
                    return this.getDepartment(did).then(result => {
                        return resolve(result);
                    });
                }
                if (node.level > 1)
                    setTimeout(() => {
                    }, 500);
                return this.getDepartment(node.data.id).then(result => {
                    return resolve(result);
                });
            },
            //获取节点值
            getNode(node){
                this.node = node;
                this.departmentName = node.data.name;
                this.departmentName = this.type===1 ? this.departmentName :'';
                console.log(this.node)
            },
            /**
             * 懒加载刷新
             * @param node 选中的节点
             * @param children 加载的数据
             */
            refreshLazyTree(node, children) {
                let theChildren = node.childNodes
                theChildren.splice(0, theChildren.length)
                node.doCreateChildren(children)
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
            /**
             * 打开模态框
             * @param type 1：编辑，2：新增，3：新增顶级部门
             */
            openDialog(type){
                this.departmentName = type===1 ? this.departmentName :'';
                this.type = type;
                this.dialogVisible = true;
            },
            /**
             * 删除部门
             */
            deleteDepartment(id,pid){
                let params = {'pid':id};
                deleteBox('?f=department&c=department&a=deleteDepartment',params).then(status=>{
                    if (status === 1) {
                        // 加载新数据
                        this.getDepartment(pid).then(result => {
                            // 刷新新数据
                            this.refreshLazyTree(this.node.parent,result)
                        });
                    }
                });
            },
            //新增顶级部门
            addTopDepartment(){
                this.dialogVisible = false;//关闭模态框
                let did = JSON.parse(sessionStorage.getItem('user')).did;//获取部门id
                return new Promise((resolve, reject) => {
                    let url =  '?f=department&c=department&a=addDepartment';
                    let data = {'pid':did,'name':this.departmentName};//post参数
                    this.$api.post(url, data).then(res => {
                        if (res.data.status === 1) {
                            // 加载新数据
                            this.isRefresh = !this.isRefresh;
                            this.$nextTick(function () {
                                this.isRefresh = !this.isRefresh;
                            });
                            this.$message({
                                type: 'info',
                                message: '操作成功'
                            });
                            resolve(res.data.status);
                        }else {
                            reject( this.$message({
                                type: 'info',
                                message: '操作失败'
                            }))
                        }
                    })
                })

            },
            /**
             * 部门增改操作
             * @returns {Promise<any>}
             */
            editDepartment(){
                this.dialogVisible = false;//关闭模态框
                return new Promise((resolve, reject) => {
                    let url = this.type ===2? '?f=department&c=department&a=addDepartment'
                        :'?f=department&c=department&a=editDepartment';
                    let node = this.type ===2 ? this.node : this.node.parent;
                    let did = JSON.parse(sessionStorage.getItem('user')).did;//获取部门id
                    if (this.node.parent.data===undefined) {
                        var id = this.type ===2 ? this.node.data.id : did ;
                    }else {
                        var id = this.type ===2 ? this.node.data.id : this.node.parent.data.id ;
                    }
                    let data = {'pid':this.node.data.id,'name':this.departmentName};//post参数
                    this.$api.post(url, data).then(res => {
                        if (res.data.status === 1) {
                            // 加载新数据
                            this.getDepartment(id).then(result => {
                                // 刷新新数据
                               this.refreshLazyTree(node,result)
                            });
                            this.$message({
                                type: 'info',
                                message: '操作成功'
                            });
                            resolve(res.data.status);
                        }else {
                            reject( this.$message({
                                type: 'info',
                                message: '操作失败'
                            }))
                        }
                    })
                })
            },
            // 关闭模态框，执行方法
            handleClose(done) {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });
                done();
            },
        },
        created() {
            console.log(this.node)
        }
    }
</script>

<style lang="scss">
    #deptManage{
        .custom-tree-node {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .custom-tree-icon {
            color: $--color-primary;
        }

        /*部门间距*/
        .el-tree-node__content {
            height: 40px;
        }
        .weight-auto{
            overflow: auto;
        }
        .weight-auto::-webkit-scrollbar {display:none}
    }
</style>