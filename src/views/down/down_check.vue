<template>
    <div>
        <el-container>
            <el-main>
                <!--查询条件-->
                <el-row :gutter="10">
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
                <form-frame>
                    <template slot="title">
                      下拨审核
                    </template>
                    <template slot="main">
                        <el-table
                                :data="tableData"
                                border
                                style="width: 100%">
                            <el-table-column
                                    prop="address"
                                    label="组织名称">
                            </el-table-column>
                            <el-table-column
                                    prop="activityName"
                                    label="活动名称">
                            </el-table-column>
                            <el-table-column
                                    prop="money"
                                    label="预算金额(元)">
                            </el-table-column>
                            <el-table-column
                                    prop="date"
                                    label="申请日期">
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
                    </template>
                </form-frame>
                <br>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="55">
                </el-pagination>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import FormFrame from "@/components/common/FormFrame";
    export default {
        name: "UpCheck",
        components: {FormFrame},
        data(){
            return {
                monthInfo:'',
                tableData: [{
                    date: '2016-05-02',
                    activityName: '贫困补助',
                    money:600,
                    address: '大湾村党支部'
                }, {
                    date: '2016-05-04',
                    activityName: '贫困补助',
                    money:400,
                    address: '城南村党支部'
                }, {
                    date: '2016-05-01',
                    activityName: '贫困补助',
                    money:300,
                    address: '清河村党支部'
                }, {
                    date: '2016-05-03',
                    activityName: '贫困补助',
                    money:600,
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

</style>