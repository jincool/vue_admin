<template>
    <div>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="10" >
                <el-card shadow="hover">
                    <div slot="header" >
                        <span>主菜单设置</span>
                    </div>
                    <div style="margin-bottom: 5px">
                        <el-button size="small" class="btn" @click="addMenu" plain>新增主菜单</el-button>
                    </div>
                    <div v-if="buttonMenuShow">
                        <el-tooltip class="item" effect="light" content="鼠标拖动菜单排序" placement="top">
                            <el-button  size="small" type="primary"  class="btn" @click="refreshSort(1)" >保存排序</el-button>
                        </el-tooltip>
                    </div>
                    <div class="cool-list">
                        <div class="el-row"
                             v-for="item in menu" v-dragging="{ item: item, list: menu,group: 'menu' }"
                             :key="item.id"
                        >
                            <el-dropdown-item divided >
                                <el-col :span="12">
                                    {{item.menu_name}}
                                </el-col>
                                <el-col :span="12">
                                    <el-button
                                            size="mini"
                                            icon="el-icon-edit"
                                            @click="editMenu(1,item.id,item.menu_name)">编辑
                                    </el-button>
                                    <el-button
                                            size="mini" type="danger"
                                            icon="el-icon-delete"
                                            @click="deleteMenu(1,item.id)">删除
                                    </el-button>
                                </el-col>
                            </el-dropdown-item>
                        </div>
                    </div>
                </el-card>





                <!--<br>-->
                <!--<el-pagination-->
                <!--background-->
                <!--layout="prev, pager, next"-->
                <!--:total="55">-->
                <!--</el-pagination>-->
            </el-col>
            <el-col :xs="24" :sm="12" :md="10">

                <el-card shadow="hover">
                    <div slot="header" >
                        <span>子菜单设置</span>
                    </div>

                        <div style="margin-bottom: 5px">
                            <el-row>
                                <el-col :span="12">
                                        <el-select v-model="value"  @change="handleChange" size="small"
                                                   placeholder="请选择" ref="selection">
                                            <el-option
                                                    v-for="item in menu"
                                                    :key="item.id"
                                                    :label="item.menu_name"
                                                    :value="item.id">
                                            </el-option>
                                        </el-select>
                                </el-col>
                                <el-col :span="12">
                                    <el-button size="small" class="btn" @click="dialogVisible = true" plain>新增子菜单</el-button>
                                </el-col>
                            </el-row>
                        </div>

                    <div v-if="buttonSubmenuShow">
                        <el-tooltip class="item" effect="light" content="鼠标拖动菜单排序" placement="top">
                            <el-button  size="small" type="primary"  class="btn" @click="refreshSort(2)" >保存排序</el-button>
                        </el-tooltip>
                    </div>
                        <div class="cool-list">
                            <div class="el-row"
                                 v-for="sub in subMenu" v-dragging="{ item: sub, list: subMenu,group: 'subMenu'}"
                                 :key="sub.id"
                            >
                                <el-dropdown-item divided >
                                    <el-col :span="12">
                                        {{sub.sub_name}}
                                    </el-col>
                                    <el-col :span="12">
                                        <el-button
                                                size="mini"
                                                icon="el-icon-edit"
                                                @click="editSubMenu(2,sub.id,sub.sub_name)">编辑
                                        </el-button>
                                        <el-button
                                                size="mini" type="danger"
                                                icon="el-icon-delete"
                                                @click="deleteSubMenu(2,sub.id)">删除
                                        </el-button>
                                    </el-col>
                                </el-dropdown-item>
                            </div>
                        </div>
                </el-card>


            </el-col>
        </el-row>
        <el-dialog
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span slot="title">
                <el-tag>{{selectedLabel}}</el-tag><el-tag type="danger">添加子菜单</el-tag>
            </span>
            <div>
                <el-input v-model="subName" placeholder="请输入名字"></el-input>
            </div>
                <br>
            <div>
                <el-input v-model="component" placeholder="请输入地址" ></el-input>
            </div>

            <span slot="footer" class="dialog-footer">
    <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
    <el-button size="mini" type="primary" @click="addSubMenu">确 定</el-button>
  </span>
        </el-dialog>





    </div>
</template>
<script>
    export default {
        name: "system_menu",
        data() {
            return {
                menu: [],//菜单列表
                subMenu: [],//子菜单列表
                value: '',//select默认选择值
                selectedLabel:'',//select的标签名
                subName:'',//子菜单名字
                component:'',//子菜单组件地址
                dialogVisible: false ,//模态框默认关闭
                buttonMenuShow:false,//主菜单排序按钮显示
                buttonSubmenuShow:false,//子菜单排序按钮显示
            }
        },
        methods: {
            //获取主菜单
            getMenu() {
                return new Promise((resolve, reject) => {
                    this.$api.get('?f=system&c=Menu&a=getMenu').then(res => {
                        if (res.status === 200) {
                            this.menu = res.data;
                            this.value = res.data[0].id;
                            resolve(this.value);
                        }

                    })
                })
            },
            //获取子菜单
            getSubMenu(id){
                this.$api.post('?f=system&c=Menu&a=getSubMenu',{'id':id}).then(res => {
                    if (res.status === 200) {
                        this.subMenu = res.data;
                    }
                })
            },
            //编辑主菜单 type:1=>一级主菜单，2=>二级子菜单
            editMenu(type, id,inputValue){
                this.mesEditBox('请修改菜单名', '?c=Menu&a=editMenu', {'id':id,'type':type},inputValue).then(status=>{
                    if (status===1) {
                        this.getMenu()
                    }
                });
            },
            //删除主菜单 type:1=>一级主菜单，2=>二级子菜单
            deleteMenu(type, id){
                this.deleteBox('?f=system&c=Menu&a=deleteMenu',{'id':id,'type':type}).then(status=>{
                    if (status===1) {
                        this.getMenu()
                    }
                });
            },
            //编辑子菜单 type:1=>一级主菜单，2=>二级子菜单
            editSubMenu(type, id,inputValue){
                this.mesEditBox('请修改菜单名', '?f=system&c=Menu&a=editMenu', {'id':id,'type':type},inputValue).then(status=>{
                    if (status===1) {
                        this.getSubMenu(this.value)
                    }
                });
            },
            //删除子菜单 type:1=>一级主菜单，2=>二级子菜单
            deleteSubMenu(type, id){
                this.deleteBox('?f=system&c=Menu&a=deleteMenu',{'id':id,'type':type}).then(status=>{
                    if (status===1) {
                        this.getSubMenu(this.value)
                    }
                });
            },
            // 切换select，刷新子菜单
            handleChange() {
                this.$nextTick(()=> {
                    this.selectedLabel = this.$refs.selection.selectedLabel;//获取select标签值
                });
                console.log(this.value);
                this.getSubMenu(this.value)
            },
            // 增加主菜单
            addMenu() {
                this.mesEditBox('请添加主菜单', '?f=system&c=Menu&a=addMenu', {}).then(status=>{
                    if (status===1) {
                        this.getMenu()
                    }
                });
            },
            //添加子菜单
            addSubMenu(){
                this.dialogVisible = false;//关闭模态框
                let params ={'menuId':this.value,'subName':this.subName,'component':this.component}
                this.$api.post('?f=system&c=Menu&a=addSubMenu', params).then(res => {
                    if (res.data.status === 1) {
                        this.$message({
                            type: 'info',
                            message: '操作成功'
                        });
                        this.getSubMenu(this.value)
                    }else {
                        this.$message({
                            type: 'info',
                            message: '操作失败'
                        })
                    }

                })

            },
            //刷新保存排序，type:1=>一级主菜单，2=>二级子菜单
            refreshSort(type){

                let dataMenu = {'1':this.menu,'2':this.subMenu}[type];
                let params = {'type':type,'dataMenu':dataMenu};
                if (type === 1) {
                    this.buttonMenuShow =false
                } else if (type === 2 ){
                    this.buttonSubmenuShow =false
                }
                this.$api.post('?f=system&c=Menu&a=refreshSort', params).then(res => {
                    if (res.data.status === 1) {
                        this.$message({
                            type: 'info',
                            message: '操作成功'
                        });
                    }else {
                        this.$message({
                            type: 'info',
                            message: '操作失败'
                        })
                    }

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
            // 消息弹出框，修改、添加窗口
            mesEditBox(title, url, pramas,inputValue) {
                return new Promise((resolve, reject) => {
                    this.$prompt(title, '', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        inputValue:inputValue
                    }).then(({value}) => {
                        let name = {'name': value};
                        let data = Object.assign(name, pramas);
                        this.$api.post(url, data).then(res => {
                            if (res.data.status === 1) {
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

                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '取消输入'
                        });
                    });
                })
                    .catch(err => {
                        console.log(err)
                    })

            },
            // 消息弹出框，删除窗口
            deleteBox( url, pramas) {
                return new Promise((resolve, reject) => {
                    this.$confirm('此操作将删除该选项, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(({value}) => {
                        this.$api.post(url, pramas).then(res => {
                            if (res.data.status === 1) {
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

                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '取消输入'
                        });
                    });
                }).catch(err => {
                        console.log(err);
                    })

            }

        },
        created() {
             this.getMenu().then((id)=>{
                 //获取select标签值
                 this.selectedLabel = this.$refs.selection.selectedLabel;
                 //获取子菜单值
                 this.getSubMenu(id)
             });
        },
        mounted () {
            this.$dragging.$on('dragged', ({ value }) => {
                console.log(value.list)
             if (value.group === 'menu') {
                 this.buttonMenuShow =true
             } else if (value.group === 'subMenu') {
                 this.buttonSubmenuShow =true
             }

            })
        }
    }
</script>

<style scoped>
    .btn {
        width: 100%;
    }
    .cool-list{
        text-align: center;
    }
</style>