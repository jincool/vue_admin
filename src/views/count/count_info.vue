<template>
    <!--党费统计-->
    <div>
        <el-container>
            <el-main>
                <!--查询条件-->
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
                <el-row :gutter="20">
                    <el-col :span="14">
                        <form-frame>
                            <template slot="title">
                                党费统计表
                            </template>
                            <template slot="main">
                                <el-table
                                        :data="tableData"
                                        border
                                        show-summary
                                        style="width: 100%">
                                    <el-table-column
                                            prop="address"
                                            width="120"
                                            label="组织名称">
                                    </el-table-column>
                                    <el-table-column
                                            prop="upPay"
                                            label="党费上划">
                                    </el-table-column>
                                    <el-table-column
                                            prop="downPay"
                                            label="党费下拨">
                                    </el-table-column>
                                    <el-table-column
                                            prop="income"
                                            label="党费收入">
                                    </el-table-column>
                                    <el-table-column
                                            prop="expend"
                                            label="党费支出">
                                    </el-table-column>
                                    <el-table-column
                                            prop="mustPayNum"
                                            label="应缴人数">
                                    </el-table-column>
                                    <el-table-column
                                            prop="payNum"
                                            label="实缴人数">
                                    </el-table-column>
                                    <!--<el-table-column-->
                                            <!--prop="date"-->
                                            <!--label="日期">-->
                                    <!--</el-table-column>-->
                                </el-table>
                            </template>
                        </form-frame>
                        <!--<br>-->
                        <!--<el-pagination-->
                        <!--background-->
                        <!--layout="prev, pager, next"-->
                        <!--:total="55">-->
                        <!--</el-pagination>-->
                    </el-col>
                    <el-col :span="10">
                        <form-frame>
                            <template slot="title">
                                党费账单
                            </template>
                            <template slot="main">
                                <el-row :gutter="40">
                                    <el-col :span="12">
                                        <card-cool>
                                            <span slot="title">总支出(元)</span>
                                            <span slot="int">6735</span>
                                        </card-cool>
                                    </el-col>
                                    <el-col :span="12">
                                        <card-cool>
                                            <span slot="title">总收入(元)</span>
                                            <span slot="int">7150</span>
                                        </card-cool>
                                    </el-col>
                                </el-row>
                                <CountKinds></CountKinds>
                            </template>
                        </form-frame>

                    </el-col>
                </el-row>


            </el-main>
        </el-container>
    </div>
</template>

<script>
    import FormFrame from "@/components/common/FormFrame";
    import CountKinds from '@/components/echarts/pay/CountKind'
    import CardCool from "@/components/echarts/common/CardCool";
    // import PayNumInfo1 from '@/components/echarts/pay/PayNumInfo1'
    export default {
        name: "UpCheck",
        components: {FormFrame,CountKinds,CardCool},
        data(){
            return {
                monthInfo:'2019-05',
                tableData: [{
                    date: '2016-05-02',
                    mustPayNum:60,
                    payNum:55,
                    upPay:360,
                    downPay:155,
                    income:1400,
                    expend:45,
                    address: '大湾村党支部'
                }, {
                    date: '2016-05-04',
                    mustPayNum:60,
                    payNum:55,
                    upPay:340,
                    downPay:535,
                    income:850,
                    expend:55,
                    address: '城南村党支部'
                }, {
                    date: '2016-05-01',
                    mustPayNum:60,
                    payNum:55,
                    upPay:530,
                    downPay:420,
                    income:1500,
                    expend:100,
                    address: '清河村党支部'
                }, {
                    date: '2016-05-03',
                    mustPayNum:60,
                    payNum:55,
                    upPay:540,
                    downPay:510,
                    income:1200,
                    expend:300,
                    address: '大河党支部'
                }, {
                    date: '2016-05-04',
                    mustPayNum:60,
                    payNum:55,
                    upPay:430,
                    downPay:370,
                    income:900,
                    expend:230,
                    address: '城南村党支部'
                }, {
                    date: '2016-05-01',
                    mustPayNum:60,
                    payNum:55,
                    upPay:460,
                    downPay:340,
                    income:500,
                    expend:360,
                    address: '清河村党支部'
                }, {
                    date: '2016-05-03',
                    mustPayNum:60,
                    payNum:55,
                    upPay:470,
                    downPay:260,
                    income:800,
                    expend:110,
                    address: '大河党支部'
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
.main_title{
    background-color: #a2264a;
}
</style>