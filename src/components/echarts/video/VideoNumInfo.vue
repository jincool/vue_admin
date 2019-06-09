<template>
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="numInfo" style="width: 100%;height: 300px;"></div>
</template>
<script>
    // import echarts from 'echarts'
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['会议次数'],
                opinionData:[2, 8, 8, 2, 6, 7, 6, 8, 6, 9, 2, 3,6,4,6,9],
                opinionXz:['平桥镇', '车桥镇', '新材料产业园', '石塘镇', '顺河镇', '朱桥镇','复兴镇', '山阳街道',
                    '淮城街道','流均镇','河下街道','施河镇','漕运镇','博里镇','苏嘴镇','钦工镇'
                ],
            }
        },
        methods:{
            drawPie(id){
                this.charts = this.$echarts.init(document.getElementById(id))
                this.charts.setOption({
                    color:['#8a4bcc'],
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
                            name:'会议次数',
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
                this.drawPie('numInfo')
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