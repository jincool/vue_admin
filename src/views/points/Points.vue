<template>
  <el-container>
    <el-header>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6"><div class="grid-content text_center  bg-purple-light">
          <h2 >淮安区党员积分列表</h2>
        </div></el-col>
      </el-row>
    </el-header>
    <el-main>
      <!--搜索栏-->
      <!--<el-row type="flex" justify="space-around">-->
        <!--<el-input placeholder="请输入内容" v-model="input1">-->
          <!--<template slot="prepend">支部</template>-->
        <!--</el-input>-->
      <!--</el-row>-->
      <!--搜索栏结束-->
      <!--table表格-->
      <!--查询提交-->
      <el-row>
        <el-col :span="6">
          年份：
          <el-date-picker
                  v-model="yearInfo"
                  type="year"
                  placeholder="选择年">
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          季度：
          <el-select v-model="value" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          月份：
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
      <el-row>
        <span>
          党员积分规则说明：
          <br>1党组织积分：关注微信或APP积分、党组织信息维护积分、党员信息维护积分、
          党组织定位积分、组织关系接转积分、党费管理积分、发展党员积分、流动党员维护积分、
          党员分类维护积分、活动积分、组织生活会积分、活动参与率积分、互动积分、志愿服务积分、问卷调查积分。
          <br>2党员积分：微信关注或app注册积分、活动参与积分、互动交流积分、学习教育积分、
          志愿服务积分、党费缴纳积分、民主评议积分、流动党员思想汇报积分。
          <br>3、系统管理员可以动态配置每次活动获取积分值
        </span>
      </el-row>
      <el-table
              :data="tableData"
              border
              stripe
              :default-sort = "{prop: 'points', order: 'descending'}"
              style="width: 100%">
        <el-table-column
                type="index"
                label="序号"
                width="80"
                align="center"
                :index="indexMethod">
        </el-table-column>
        <el-table-column
                prop="address"
                label="所属党组织"
                align="center"
                :formatter="formatter">
        </el-table-column>
        <el-table-column
                prop="name"
                label="党员姓名"
                align="center">
        </el-table-column>
        <el-table-column
                sortable
                prop="points"
                label="党员积分"
                align="center">
        </el-table-column>
        <el-table-column
                sortable
                prop="points"
                label="排名"
                align="center">
          <template slot-scope="scope">
            <!--排名-->
           {{sortPoints(scope.$index+1,scope.store.states.sortOrder)}}
          </template>
        </el-table-column>
        <el-table-column  label="操作"align="center">
          <template slot-scope="scope">
            <el-button
                    size="mini"
                    type="primary"
                    icon="el-icon-zoom-in"
                    round @click="handleEdit(scope, scope.row.id)">积分详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--table表格结束-->
      <el-dialog title="党员积分列表" :visible.sync="dialogTableVisible">
        <el-table :data="gridData">
          <el-table-column property="name" label="活动名称" width="500"></el-table-column>
          <el-table-column property="date" label="活动日期" width="150"></el-table-column>
          <el-table-column property="points" label="得分情况"></el-table-column>
        </el-table>
      </el-dialog>

    </el-main>
  </el-container>
</template>

<script>

    export default {
        data() {
            return {
                yearInfo:'2019',
                monthInfo:'',
                options: [{
                    value: '1',
                    label: '第一季度'
                }, {
                    value: '2',
                    label: '第二季度'
                }, {
                    value: '3',
                    label: '第三季度'
                }, {
                    value: '4',
                    label: '第四季度'
                }],
                value:'',
                tableData: [{
                    id:444,
                    points: 20,
                    name: '王虎',
                    address: '中共淮安区粮食局石港粮库支部委员会'
                }, {
                    id:434,
                    points: 70,
                    name: '陈小虎',
                    address: '中共淮安区粮食局石港粮库支部委员会'
                }, {
                    id:14,
                    points: 10,
                    name: '李虎',
                    address: '中共淮安区粮食局石港粮库支部委员会'
                }, {
                    id:554,
                    points: 50,
                    name: '路虎',
                    address: '中共淮安区粮食局石港粮库支部委员会'
                }, {
                    id:4341,
                    points: 30,
                    name: '王明',
                    address: '中共淮安区粮食局石港粮库支部委员会'
                }, {
                    id:134,
                    points: 60,
                    name: '金酷',
                    address: '中共淮安区粮食局石港粮库支部委员会'
                }, {
                    id:4434,
                    points: 45,
                    name: '陈子明',
                    address: '中共淮安区粮食局石港粮库支部委员会'
                }, {
                    id:124,
                    points: 10,
                    name: '李时针',
                    address: '中共淮安区粮食局石港粮库支部委员会'
                }],
                gridData: [{
                    date: '2019-03-02',
                    name: '开展爱绿护绿活动，践行“两山”理念，打造美丽粮库',
                    points: 5
                }, {
                    date: '2019-03-04',
                    name: '学习《求是》文章:加强党对全面依法治国的领导。作者:习近平',
                    points: 5
                }, {
                    date: '2019-04-01',
                    name: '围铙“思想政治、精神状态、工作现状、意识形态”召开民主生活会暨民主评议党员工作',
                    points: 5
                }, {
                    date: '2019-05-03',
                    name: '商务局石港支部书记万书记慰问困难群众耿金来、耿金宝',
                    points: 5
                }],
                dialogTableVisible: false,
                index:''
            }
        },
        name: 'BigScreen',
        methods: {
            handleEdit(index, row) {
                this.dialogTableVisible=true;
                this.index=row;
                console.log(index, row);
            },
            // 排序
            indexMethod(index) {
                return index +1;
            },
            // 格式化数据
            formatter(row, column) {
                return row.address;
            },
            // 排名
            sortPoints(index,sortOrder){
                let length=this.tableData.length;
                if (sortOrder === 'ascending') {
                    let sortIndex = (length-index)+1
                    return sortIndex
                }else {
                    return index;
                }


            }

        },

    }
</script>

<style>
.text_center{
  text-align: center;
}
</style>
