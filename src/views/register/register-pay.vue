<template>
    <div>
        <el-container>
            <el-main>
                <form_frame>
                    <template slot="title">
                        党员缴纳党费登记表
                    </template>
                    <template slot="main">
                        <el-row :gutter=20>
                            <el-col :span="6">
                                <el-input placeholder="请输入内容"
                                          :disabled="true"
                                          v-model="address">
                                    <template slot="prepend">所属</template>
                                </el-input>
                            </el-col>
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
                        <el-row>
                            <el-col :span="24">
                                <el-table
                                        :data="tableData"
                                        border
                                        style="width: 100%">
                                    <el-table-column
                                            prop="name"
                                            label="姓名">
                                    </el-table-column>
                                    <el-table-column
                                            prop="base"
                                            label="缴纳基数">
                                    </el-table-column>
                                    <el-table-column
                                            prop="money"
                                            label="缴纳金额">
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
                    base: '2016',
                    name: '王虎',
                    money: '21'
                }, {
                    base: '2016',
                    name: '王明',
                    money: '35'
                }, {
                    base: '2016',
                    name: '陈虎',
                    money: '35'
                }, {
                    base: '2016',
                    name: '唐书生',
                    money: '40'
                }]
            }
        }
    }
</script>

<style scoped>
.el-header{
    font-size: 24px;
    text-align: center;
}
</style>