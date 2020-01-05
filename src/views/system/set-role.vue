<template>
    <div>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="10">
                <el-card shadow="hover">
                    <div slot="header">
                        <span>角色设置</span>
                    </div>
                    <div style="margin-bottom: 5px">
                        <el-button size="small" class="btn" @click="addRole" plain>新增角色</el-button>
                    </div>
                    <div v-if="buttonRoleShow">
                        <el-tooltip class="item" effect="light" content="鼠标拖动菜单排序,自下而上，等级权限增强！" placement="top">
                            <el-button size="small" type="primary" class="btn" @click="refreshSort">保存排序</el-button>
                        </el-tooltip>
                    </div>
                    <div class="cool-list">
                        <div class="el-row"
                             v-for="item in role"
                             :key="item.id"
                             v-dragging="{ item: item, list: role,group: 'role' }"
                        >
                            <el-dropdown-item divided>
                                <el-col :span="12">
                                    {{item.role_name}}
                                </el-col>
                                <el-col :span="12">
                                    <el-button
                                            size="mini"
                                            icon="el-icon-edit"
                                            @click="editRole(item.id,item.role_name)">编辑
                                    </el-button>
                                    <el-button
                                            size="mini" type="danger"
                                            icon="el-icon-delete"
                                            @click="deleteRole(1,item.id)">删除
                                    </el-button>
                                </el-col>
                            </el-dropdown-item>
                        </div>
                    </div>
                </el-card>

            </el-col>
            <el-col :xs="24" :sm="12" :md="10">

                <el-card shadow="hover">
                    <div slot="header">
                        <span>角色菜单设置</span>
                    </div>
                    <div>
                        <el-row>
                            <el-col :span="12">
                                <div>
                                    <el-select v-model="value" @change="handleChange" size="small"
                                               placeholder="请选择" ref="selection">
                                        <el-option
                                                v-for="item in role"
                                                :key="item.id"
                                                :label="item.role_name"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <el-button size="small" class="btn" @click="addRoleMenu" plain>新增角色菜单</el-button>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="cool-list">
                        <div class="el-row">
                            <el-dropdown-item divided>
                                <el-col :span="8">
                                    <el-tag>主菜单</el-tag>
                                </el-col>
                                <el-col :span="8">
                                    <el-tag>子菜单</el-tag>
                                </el-col>
                                <el-col :span="8">
                                    <el-tag>操作</el-tag>
                                </el-col>
                            </el-dropdown-item>
                        </div>
                        <div class="el-row"
                             v-for="sub in menu"
                             :key="sub.id"
                        >
                            <el-dropdown-item divided>
                                <el-col :span="8">
                                    {{sub.menu_name}}
                                </el-col>
                                <el-col :span="8">
                                    {{sub.sub_name}}
                                </el-col>
                                <el-col :span="8">
                                    <el-button
                                            size="mini" type="danger"
                                            icon="el-icon-delete"
                                            @click="deleteRoleMenu(2,sub.id)">删除
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
                width="350px"
                :before-close="handleClose">
            <span slot="title">
                <el-tag>{{selectedLabel}}</el-tag>
            </span>

            <div>
                <el-row>
                    <el-col :span="12">
                        <el-select v-model="mainValue" @change="getSubMenu(mainValue)" size="small"
                                   placeholder="请选择">
                            <el-option
                                    v-for="item in mainMenu"
                                    :key="item.id"
                                    :label="item.menu_name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12">
                        <el-select v-model="subValue" size="small"
                                   placeholder="请选择">
                            <el-option
                                    v-for="item in subMenu"
                                    :key="item.id"
                                    :label="item.sub_name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>

            </div>
            <span slot="footer" class="dialog-footer">
    <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
    <el-button size="mini" type="primary" @click="saveRoleMenu">确 定</el-button>
  </span>
        </el-dialog>


    </div>
</template>
<script>
    export default {
        name: "set-role",
        data() {
            return {
                role: [],//角色列表
                menu: [],//菜单列表
                value: '',//select角色选择值
                selectedLabel: '',//select的标签名
                mainMenu: [],//获取主菜单列表
                mainValue: '',//select主菜单选择值
                subMenu: [],//获取子菜单列表
                subValue: '',//select子菜单选择值
                subName: '',//子角色名字
                component: '',//子角色组件地址
                dialogVisible: false,//新增角色菜单模态框默认关闭
                buttonRoleShow:false,//角色等级排序显示
                isOpenDialogVisible: 0 //是否已经打开角色菜单模态框
            }
        },
        methods: {
            //角色选择切换，加载角色对应菜单
            handleChange() {
                this.$nextTick(() => {
                    this.selectedLabel = this.$refs.selection.selectedLabel;//获取select标签值
                });
                this.getMenu(this.value)
            },
            //获取角色
            getRole() {
                return new Promise((resolve, reject) => {
                    this.$api.get('?f=system&c=Role&a=getRole').then(res => {
                        if (res.status === 200) {
                            this.role = res.data;
                            this.value = res.data[0].id;
                            resolve(this.value);
                        }

                    })
                })
            },
            //获取菜单
            getMenu(id) {
                this.$api.post('?f=system&c=Role&a=getMenu', {'id': id}).then(res => {
                    if (res.status === 200) {
                        this.menu = res.data;
                    }
                })
            },
            //获取主菜单
            getMainMenu() {
                return new Promise((resolve, reject) => {
                    this.$api.get('?f=system&c=Menu&a=getMenu').then(res => {
                        if (res.status === 200) {
                            this.mainMenu = res.data;
                            this.mainValue = res.data[0].id;
                            resolve(this.mainValue);
                        }
                    })
                })
            },
            //获取子菜单
            getSubMenu(id) {
                this.subValue = '';
                this.$api.post('?f=system&c=Menu&a=getSubMenu', {'id': id}).then(res => {
                    if (res.status === 200) {
                        this.subMenu = res.data;
                        this.subValue = res.data[0].id;
                    }
                })
            },
            //新增角色菜单
            addRoleMenu() {
                this.dialogVisible = true;
                // 获取主菜单
                if (this.isOpenDialogVisible === 0) {
                    this.getMainMenu().then(id => {
                        // 获取子菜单
                        this.getSubMenu(id);
                        //标记已经打开过此模态框，无需发起请求数据
                        this.isOpenDialogVisible = 1;
                    });
                }
            },
            // 保存新增的角色菜单
            saveRoleMenu() {
                return new Promise(resolve => {
                    let params = {'data': {'role_id': this.value, 'menu_id': this.mainValue, 'sub_id': this.subValue}};
                    this.$api.post('?f=system&c=Role&a=addRoleMenu', params).then(res => {
                        if (res.data.status === 1) {
                            this.$message({
                                type: 'info',
                                message: '操作成功'
                            });
                            // 重新刷新加载菜单
                            this.getMenu(this.value);
                            // 关闭模态框
                            this.dialogVisible = false;
                        } else {
                            this.$message({
                                type: 'info',
                                message: '操作失败'
                            })
                        }
                        resolve(res.data.status);
                    })
                })


            },
            //编辑角色
            editRole(id, inputValue) {
                this.mesEditBox('请修改角色名', '?f=system&c=Role&a=editRole', {'id': id}, inputValue).then(status => {
                    if (status === 1) {
                        this.getRole()
                    }
                });
            },
            //删除角色 type:1=>系统角色，2=>权限角色菜单
            deleteRole(type, id) {
                this.deleteBox('?f=system&c=Role&a=deleteRole', {'id': id, 'type': type}).then(status => {
                    if (status === 1) {
                        this.getRole()
                    }
                });
            },
            //删除权限角色菜单 type:1=>系统角色，2=>权限角色菜单
            deleteRoleMenu(type, id) {
                this.deleteBox('?f=system&c=Role&a=deleteRole', {'id': id, 'type': type}).then(status => {
                    if (status === 1) {
                        // 重新刷新加载菜单
                        this.getMenu(this.value);
                    }
                });
            },
            // 增加角色
            addRole() {
                this.mesEditBox('请添加角色', '?f=system&c=Role&a=addRole', {}).then(status => {
                    if (status === 1) {
                        this.getRole()
                        this.buttonRoleShow = true;//角色排序按钮显示
                    }
                });
            },
            //刷新保存排序
            refreshSort() {
                this.buttonRoleShow = false;//角色排序按钮显示
                let params = { 'dataRole': this.role};
                this.$api.post('?f=system&c=Role&a=refreshSort', params).then(res => {
                    if (res.data.status === 1) {
                        this.getMenu(this.value)//重新获取子菜单
                        this.$message({
                            type: 'info',
                            message: '操作成功'
                        });
                    } else {
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
            mesEditBox(title, url, pramas, inputValue) {
                return new Promise((resolve, reject) => {
                    this.$prompt(title, '', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        inputValue: inputValue
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
                            } else {
                                reject(this.$message({
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
            deleteBox(url, pramas) {
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
                            } else {
                                reject(this.$message({
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
            this.getRole().then((id) => {
                //获取select标签值
                this.selectedLabel = this.$refs.selection.selectedLabel;
                //获取子角色值
                this.getMenu(id)
            });
        },
        mounted() {
            this.$dragging.$on('dragged', ({value}) => {
                console.log(value.list);
                this.buttonRoleShow = true;
            })
        }
    }
</script>

<style scoped>
    .btn {
        width: 100%;
    }

    .cool-list {
        text-align: center;
    }
</style>