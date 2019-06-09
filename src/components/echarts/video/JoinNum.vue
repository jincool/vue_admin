<template>
    <!--每个月参与人数-->
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="joinNum" style="width: 100%;height: 300px;"></div>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['参会人数'],
                opinionData:[782, 844, 687, 1188, 885, 976, 985, 992, 682, 1090, 886, 933],
            }
        },
        methods:{
            drawPie(id){
                this.charts = this.$echarts.init(document.getElementById(id))
                this.charts.setOption({
                    color:['#ba37cc'],
                    tooltip : {
                        trigger: 'axis'
                    },
                    calculable : true,
                    xAxis : [
                        {
                            axisLine: {
                                lineStyle: {
                                    type: 'solid',
                                    color: '#fff',//左边线的颜色
                                    width:'1'//坐标线的宽度
                                }
                            },
                            type : 'category',
                            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                        },

                    ],
                    yAxis : [
                        {
                            axisLine: {
                                lineStyle: {
                                    color: '#fff',//左边线的颜色
                                    width:'1'//坐标线的宽度
                                }
                            },
                            type : 'value'
                        }
                    ],
                    splitLine: {
                        show: false,
                    },
                    series : [
                        {
                            name:'参会人数',
                            type:'bar',
                            barWidth : 15,//柱图宽度
                            data:this.opinionData,
                            markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'},
                                    {type : 'min', name: '最小值'}
                                ]
                            },
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            }
                        },
                    ]
                })
            }
        },
        //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('joinNum')
            })
        }
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>