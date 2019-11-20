<template>
    <div>
        <el-container>
            <el-main>

                <el-row type="flex" justify="space-around">
                    <el-col :span="8">
                        <form_frame>
                            <template slot="title">
                                缴纳党费
                            </template>
                            <template slot="main">

                                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                                         class="demo-ruleForm">
                                    <el-form-item label="党员姓名" prop="name">
                                        <el-input v-model="ruleForm.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="身份证号" prop="cardId">
                                        <el-input v-model="ruleForm.cardId"></el-input>
                                    </el-form-item>
                                    <el-form-item label="缴费金额" prop="money">
                                        <el-input v-model="ruleForm.money"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="submitForm('ruleForm')">缴费</el-button>
                                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                                    </el-form-item>
                                </el-form>



                            </template>
                        </form_frame>



                    </el-col>
                    <el-col :span="8">
                        <form_frame>
                            <template slot="title">
                                缴费记录
                            </template>
                            <template slot="main">
                                <el-row>
                                    <el-col :span="24">
                                        <el-steps :active="active">
                                            <el-step title="缴费"></el-step>
                                            <el-step title="进行中"></el-step>
                                            <el-step title="成功"></el-step>
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
        name: "DownApply",
        data() {
            return {
                active:0,
                dataList:[{
                    id:100,
                    date: '2019-05-02',
                    activityName: '党员缴费',
                    status:1
                },{
                    id:99,
                    date: '2019-04-22',
                    activityName: '党员缴费',
                    status:3
                },{
                    id:89,
                    date: '2019-03-12',
                    activityName: '党员缴费',
                    status:3
                },{
                    id:79,
                    date: '2019-02-12',
                    activityName: '党员缴费',
                    status:3
                },{
                    id:69,
                    date: '2019-01-12',
                    activityName: '党员缴费',
                    status:3
                }
                ],
                ruleForm: {
                    name: '党员1',
                    cardId:'321308122323234546',
                    money:'35',
                },
                rules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        {min: 1, max: 10, message: '长度在 1 到 10个字符', trigger: 'blur'}
                    ],
                    cardId: [
                        {required: true, message: '请输入身份证号', trigger: 'blur'},
                        {min: 18, max: 18, message: '请正确输入', trigger: 'blur'}
                    ],
                    money: [
                        {required: true, message: '请输入金额', trigger: 'blur'},
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        window.open('http://39.97.124.78/AlipayDemo/index.jsp');
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