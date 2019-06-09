<template>
    <!--各个月份的缴费金额情况-->
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="studyRant" style="width: 100%;height: 300px;"></div>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['缴费金额'],
                opinionData:[1182.0, 1634.9, 1187.0, 1388.2, 1385.6, 1276.7, 1085.6, 992.2, 882.6, 1190.0, 1286.4, 1193.3],
            }
        },
        methods:{
            drawPie(id){
                this.charts = this.$echarts.init(document.getElementById(id))
                this.charts.setOption({
                    color:['#5fc5c5'],
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
                            name:'缴费金额',
                            type:'bar',
                            barWidth : 10,//柱图宽度
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
                this.drawPie('studyRant')
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