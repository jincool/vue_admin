<template>
    <!--党费支出-->
    <div>
        <el-container>
            <!--内容主体-->
            <el-main>
                <el-row :gutter="20">
                    <el-col :span="6">
                    <el-date-picker
                            v-model="monthInfo"
                            type="month"
                            placeholder="选择月">
                    </el-date-picker>
                    </el-col>
                    <el-col :span="6">
                        <el-button type="primary" round>查询</el-button>
                    </el-col>

                </el-row>
                <br>
                <!--表单内容-->

                <form_frame>
                    <template slot="title">
                        党费支出表
                    </template>
                    <template slot="main">
                        <el-row>
                            <el-col :span="24">
                                <el-table
                                        :data="tableData"
                                        border
                                        style="width: 100%">
                                    <el-table-column
                                            prop="name"
                                            label="党组织名称">
                                    </el-table-column>
                                    <el-table-column
                                            prop="activity"
                                            label="支出用途">
                                    </el-table-column>
                                    <el-table-column
                                            prop="pay"
                                            label="支出金额">
                                    </el-table-column>
                                    <el-table-column
                                            prop="date"
                                            label="日期">
                                    </el-table-column>
                                    <el-table-column
                                            label="操作">
                                        <template slot-scope="scope">
                                            <el-button
                                                    size="mini"
                                                    @click="handleAgree(scope.$index, scope.row)">通过</el-button>
                                            <el-button
                                                    size="mini"
                                                    type="danger"
                                                    @click="handleDelete(scope.$index, scope.row)">不通过</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </el-col>
                        </el-row>

                    </template>
                </form_frame>






            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "PayRegister",
        data(){
            return {
                address:'中共淮安区粮食局石港粮库支部委员会',
                monthInfo:'2019-05',
                tableData: [{
                    pay: '2016',
                    name: '城南党支部',
                    activity: '党员活动室建设',
                    date:'2019-05'
                }, {
                    pay: '2333',
                    name: '王莹党支部',
                    activity: '改善道路交通',
                    date:'2019-05'
                }, {
                    pay: '445',
                    name: '清河村党支部',
                    activity: '购买学习资料',
                    date:'2019-05'
                }, {
                    pay: '2313',
                    name: '王家营党支部',
                    activity: '接受爱国主义教育租车费和餐费共计',
                    date:'2019-05'
                }, {
                    pay: '2016',
                    name: '长江东路党支部',
                    activity: '纪念先烈活动',
                    date:'2019-05'
                }, {
                    pay: '5012',
                    name: '韩城党支部',
                    activity: '爱国主义教育建设',
                    date:'2019-05'
                }, {
                    pay: '2055',
                    name: '梨园党支部',
                    activity: '购买学习材料',
                    date:'2019-05'
                }]
            }
        },
        methods:{
            handleAgree: (index)=> {

            },
            handleDelete:(index)=>{

            }
        }
    }
</script>

<style scoped>

</style>