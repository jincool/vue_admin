<template>
    <div>
        <el-container>
            <el-main>

                <el-row type="flex" justify="space-around">
                    <!--<el-col :span="1"></el-col>-->
                    <el-col :span="8">
                        <form_frame>
                            <template slot="title">
                                党费上划申请表
                            </template>
                            <template slot="main">

                                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                                         class="demo-ruleForm">
                                    <el-form-item label="组织名称" prop="address">
                                        <el-input v-model="ruleForm.address"></el-input>
                                    </el-form-item>
                                    <el-form-item label="活动名称" prop="activityName">
                                        <el-input v-model="ruleForm.activityName"></el-input>
                                    </el-form-item>
                                    <el-form-item label="费用预算" prop="money">
                                        <el-input v-model="ruleForm.money"></el-input>
                                    </el-form-item>
                                    <el-form-item label="活动时间" required>
                                        <el-col :span="11">
                                            <el-form-item prop="date1">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                                style="width: 100%;"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col class="line" :span="2">-</el-col>
                                        <el-col :span="11">
                                            <el-form-item prop="date2">
                                                <el-time-picker placeholder="选择时间" v-model="ruleForm.date2"
                                                                style="width: 100%;"></el-time-picker>
                                            </el-form-item>
                                        </el-col>
                                    </el-form-item>
                                    <el-form-item label="活动说明" prop="desc">
                                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                                    </el-form-item>
                                    <el-form-item label="审核意见" prop="agree">
                                        <el-input type="textarea" v-model="ruleForm.agree"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="submitForm('ruleForm')">申请</el-button>
                                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                                    </el-form-item>
                                </el-form>


                            </template>
                        </form_frame>


                    </el-col>
                    <el-col :span="8">
                        <form_frame>
                            <template slot="title">
                                申请列表
                            </template>
                            <template slot="main">
                                <el-row>
                                    <el-col :span="24">
                                        <el-steps :active="active">
                                            <el-step title="申请"></el-step>
                                            <el-step title="进行中"></el-step>
                                            <el-step title="通过"></el-step>
                                        </el-steps>
                                    </el-col>
                                </el-row>
                                <el-dropdown-item v-for="data in dataList " :key="data.id" divided>
                                    <el-row @click.native="status(data.status)">
                                        <el-col :span="14"> {{ data.activityName }}</el-col>
                                        <el-col :span="10">{{ data.date }}</el-col>
                                    </el-row>
                                </el-dropdown-item >
                            </template>
                        </form_frame>
                    </el-col>
                </el-row>


            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "UpApply",
        data() {
            return {
                active:0,
                dataList:[{
                    id:100,
                    date: '2016-05-02',
                    activityName: '贫困补助',
                    status:1
                },{
                    id:99,
                    date: '2016-04-22',
                    activityName: '学习教育',
                    status:1
                },{
                    id:89,
                    date: '2016-03-12',
                    activityName: '生活改善',
                    status:2
                },{
                    id:88,
                    date: '2016-04-11',
                    activityName: '生活改善',
                    status:3
                },{
                    id:77,
                    date: '2016-03-23',
                    activityName: '学习教育',
                    status:3
                },{
                    id:44,
                    date: '2016-03-12',
                    activityName: '生活改善',
                    status:3
                },{
                    id:43,
                    date: '2016-02-14',
                    activityName: '贫困补助',
                    status:3
                },{
                    id:42,
                    date: '2016-01-16',
                    activityName: '生活改善',
                    status:3
                },
                ],
                ruleForm: {
                    name: '',
                    address: '',
                    activityName: '',
                    region: '',
                    desc: ''
                },
                rules: {
                    address: [
                        {required: true, message: '请输入组织部门', trigger: 'blur'},
                        {min: 1, max: 25, message: '长度在 1 到 25 个字符', trigger: 'blur'}
                    ],
                    activityName: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 1, max: 25, message: '长度在 1 到 25 个字符', trigger: 'blur'}
                    ],
                    money: [
                        {required: true, message: '请输入预算金额', trigger: 'blur'},
                    ],
                    date1: [
                        {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    date2: [
                        {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
                    ],
                    desc: [
                        {required: true, message: '请填写活动说明', trigger: 'blur'}
                    ],
                    agree: [
                        {required: false, message: '请填写活动形式', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            status(status){
                this.active=status;
            }
        }
    }
</script>
<style scoped>

</style>