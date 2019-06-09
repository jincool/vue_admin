<template>
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="numInfo" style="width: 100%;height: 425px;"></div>
</template>
<script>
    // import echarts from 'echarts'
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['应缴费党员数','实缴费党员数'],
                opinionData:[60, 40, 30, 54, 40, 70],
                opinionData2:[55, 35, 29, 51, 37, 60],
                opinionXz:['大湾村党支部', '城南村党支部', '清河村党支部', '大河党支部', '城南村党支部', '大河党支部'
                ],
            }
        },
        methods:{
            drawPie(id){
                this.charts = this.$echarts.init(document.getElementById(id))
                this.charts.setOption({
                    color:['#b330f5'],
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        orient : 'vertical',
                        x : 'left',
                        textStyle:{//图例文字的样式
                            color:'#df26f5',
                            fontSize:12
                        },
                        data:this.opinion
                    },
                    calculable : true,
                    xAxis : [
                        {
                            axisLine: {
                                lineStyle: {
                                    type: 'solid',
                                    color: '#220540',//左边线的颜色
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
                                    color: '#292840',//左边线的颜色
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
                            name:'缴费党员数',
                            type:'bar',
                            barWidth : 15,//柱图宽度
                            data:this.opinionData,
                            markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'},
                                    {type : 'min', name: '最小值'}
                                ]
                            },
                            // itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            }
                        },
                        {
                            name:'实缴党员数',
                            type:'bar',
                            barWidth : 15,//柱图宽度
                            data:this.opinionData2,
                            itemStyle:{
                                color:'#ccf66b'
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