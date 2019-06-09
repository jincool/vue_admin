<template>
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="rantInfo" style="width: 100%;height: 300px;"></div>
</template>
<script>
    // import echarts from 'echarts'
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['学习参学率'],
                opinionData:[82, 88, 88, 92, 86, 87, 86, 89, 76, 89, 82, 83,86,84,86,89],
                opinionXz:['平桥镇', '车桥镇', '新材料产业园', '石塘镇', '顺河镇', '朱桥镇','复兴镇', '山阳街道',
                    '淮城街道','流均镇','河下街道','施河镇','漕运镇','博里镇','苏嘴镇','钦工镇'
                ],
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
                            data : this.opinionXz,
                            axisLabel:{
                                interval:0,
                                rotate:35,
                            },

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
                            name:'学习参学率',
                            type:'line',
                            barWidth : 15,//柱图宽度
                            data:this.opinionData,
                            markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'},
                                    {type : 'min', name: '最小值'}
                                ]
                            },
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
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
                this.drawPie('rantInfo')
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