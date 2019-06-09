<template>
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
                        <el-button type="primary" round><i class="el-icon-loading"></i>查询</el-button>
                    </el-col>

                </el-row>
                <br>
                <!--表单内容-->

                <form_frame>
                    <template slot="title">
                        党费收入表
                    </template>
                    <template slot="main">
                        <el-row>
                            <el-col :span="24">
                                <el-table
                                        :data="tableData"
                                        border
                                        show-summary
                                        style="width: 100%">
                                    <el-table-column
                                            prop="name"
                                            label="党组织名称">
                                    </el-table-column>
                                    <el-table-column
                                            prop="pay"
                                            label="党员缴纳(元)">
                                    </el-table-column>
                                    <el-table-column
                                            prop="income"
                                            label="上级拨款(元)">
                                    </el-table-column>
                                    <el-table-column
                                            prop="date"
                                            label="日期">
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
                    income: '20',
                    date:'2019-05'
                }, {
                    pay: '2333',
                    name: '王莹党支部',
                    income: '0',
                    date:'2019-05'
                }, {
                    pay: '445',
                    name: '清河村党支部',
                    income: '0',
                    date:'2019-05'
                }, {
                    pay: '2313',
                    name: '王家营党支部',
                    income: '740',
                    date:'2019-05'
                }, {
                    pay: '2016',
                    name: '长江东路党支部',
                    income: '635',
                    date:'2019-05'
                }, {
                    pay: '5012',
                    name: '韩城党支部',
                    income: '535',
                    date:'2019-05'
                }, {
                    pay: '2055',
                    name: '梨园党支部',
                    income: '540',
                    date:'2019-05'
                }]
            }
        }
    }
</script>

<style scoped>

</style>