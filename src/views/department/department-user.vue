<template>
    <div>
        <!--条件筛选区域-->
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="18" :lg="16" :xl="12">
                <div>
                    <!--<Department>-->
                    <!--</Department>-->
                </div>
            </el-col>
        </el-row>
        <br>
        <!--数据展示区-->
        <department></department>
        <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="4" :xl="4">
                <dept-tree @getDeptTree="handleDeptTree"></dept-tree>
            </el-col>
            <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20">
                <el-card shadow="hover">
                    <div slot="header">
                        <span>{{deptName}}用户管理</span>
                    </div>
                    <div>
                        <el-button
                                style="margin-left: 10px"
                                size="small"
                                v-if="showButton"
                                icon="el-icon-circle-plus-outline"
                                @click="openDialog">添加用户
                        </el-button>
                        <el-table
                                :data="userInfo"
                                style="width: 100%">
                            <el-table-column
                                    label="姓名"
                                    >
                                <template slot-scope="scope">
                                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="账号"
                                    >
                                <template slot-scope="scope">
                                    {{ scope.row.username }}
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="部门"
                                    >
                                <template slot-scope="scope">
                                    {{ scope.row.dept_name }}
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="角色"
                                    >
                                <template slot-scope="scope">
                                    {{ scope.row.role_name }}
                                </template>
                            </el-table-column>
                            <el-table-column label="操作" width="180">
                                <template slot-scope="scope">
                                    <el-button
                                            icon="el-icon-edit"
                                            size="mini"
                                            :disabled="isDisabled(scope.row.rid)"
                                            @click="handleEdit(scope.$index, scope.row)">编辑
                                    </el-button>
                                    <el-button
                                            size="mini"
                                            type="danger"
                                            icon="el-icon-delete"
                                            @click="handleDelete(scope.$index, scope.row)">删除
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <!--分页版块-->
                    <div>
                        <template>
                            <pagination
                                    :total="total"
                                    :page.sync="listQuery.page"
                                    :limit.sync="listQuery.limit"
                                    @pagination="getUserList"/>
                        </template>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <!--模态框-->
        <el-dialog
                title="添加用户"
                :visible.sync="dialogVisible"
                 width="30%"
                :before-close="handleClose">

            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户角色" >
                    <el-select v-model="value"
                               placeholder="请选择" >
                        <el-option
                                v-for="item in role"
                                :key="item.id"
                                :label="item.role_name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="用户账号" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="用户密码" prop="password">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
  </span>
        </el-dialog>

    </div>
</template>

<script>
    import department from '@/components/common/Department'
    import pagination from '@/components/common/Pagination'
    import deptTree from '@/components/common/DeptTree'
    import { validatePsdReg } from '@/utils/rules'    // 密码验证
    export default {
        name: "department_user",
        components: {department, pagination, deptTree},
        data() {
            return {
                role: [],//角色列表
                value: '',//select角色选择值
                isOpenDialogVisible:false,//是否已经打开角色菜单模态框
                showButton:false,//是否显示添加用户按钮
                dialogVisible: false,//模态框开关
                deptId: '',//部门id
                deptName: '',//部门名称
                total: 1,//分页总记录数
                listQuery: {
                    page: 1,
                    limit: 5
                },//分页页码和分页范围
                userInfo: [],

                ruleForm: {
                    name: '',
                    username: '',
                    password: '',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 2, max: 11, message: '长度在 2 到 11 个字符', trigger: 'blur' }
                    ],
                    username: [
                        { required: true, message: '请输入用户账号', trigger: 'blur' },
                        { min: 2, max: 11, message: '长度在 2 到 11 个字符', trigger: 'blur' }
                    ],
                    password:[
                        { required: true ,validator: validatePsdReg, trigger: 'blur' }
                    ]
                },





            }
        },
        methods: {

            /**
             * 处理选择部门
             * @param deptId 部门id
             */
            handleDeptTree(deptId) {
                this.deptId = deptId.data.id;//获取部门id
                this.deptName = deptId.data.name;//获取部门name
                this.listQuery = {'page': 1, 'limit': 5};//初始化分页
                this.showButton = deptId.level !==1;
                this.getUserList()
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            // 打开模态框
            openDialog() {
                this.dialogVisible = true;
                // 获取角色
                if (!this.isOpenDialogVisible) {
                    this.getRole()
                    this.isOpenDialogVisible = true;
                }
            },
            // 关闭模态框提示
            handleClose() {
                this.dialogVisible = false;
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });
            },
            // 获取用户列表
            getUserList() {
                let deptId = this.deptId;
                let params = {'listQuery': this.listQuery, 'deptId': deptId};
                this.$api.post('?f=department&c=deptUser&a=User', params).then(res => {
                    let {total, dataList} = res.data;
                    this.total = total;
                    this.userInfo = dataList;
                });
            },
            //获取角色
            getRole() {
                let level = JSON.parse(sessionStorage.getItem('user')).level;
                let params = {'level':level};
                return new Promise((resolve, reject) => {
                    this.$api.post('?f=system&c=Role&a=getRole',params).then(res => {
                        if (res.status === 200) {
                            this.role = res.data;
                            this.value = res.data[0].id;
                            resolve(this.value);
                        }

                    })
                })
            },
            // 按钮权限是否禁用
            isDisabled(rid) {
                // 获取用户本地用户角色id
                let userRid = JSON.parse(sessionStorage.getItem('user')).rid;
                return rid === userRid;
            },
            //初始化加载配置信息
            initInfo(){
                // 加载默认部门id
                let userInfo = JSON.parse(sessionStorage.getItem('user'));//获取用户信息
                this.deptId = userInfo.did;//用户部门
                this.showButton = this.deptId==='0';
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },
        created() {
            this.initInfo()
            this.getUserList()//获取用户列表

        },
        computed: {}
        // computed: {
        //     /**
        //      * 获取最新部门id
        //      * @returns {Array|*}
        //      */
        //     deptId() {
        //         return this.$store.state.selectDepartment.departmentId
        //     }
        // },
        // watch: {
        //     deptId: function(newVal) {
        //         console.log(newVal);
        //     }
        // }
    };
</script>
<style scoped>

</style>