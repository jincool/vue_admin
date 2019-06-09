<template>
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="warningInfo" style="width: 100%;height: 300px;"></div>
</template>
<script>
    // import echarts from 'echarts'
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['正常','超时','未开展'],
                opinionDataZc:[18, 18, 18, 22, 16, 17, 16, 19, 16, 19, 12, 13,16,14,16,19],
                opinionDataCs:[12, 12, 8, 6, 6, 7, 8, 9, 8, 5, 2, 3,6,14,1,3],
                opinionDataWkz:[2, 8, 8, 2, 6, 1, 1, 1, 6, 1, 2, 3,6,4,6,2],
                opinionXz:['平桥镇', '车桥镇', '新材料产业园', '石塘镇', '顺河镇', '朱桥镇','复兴镇', '山阳街道',
                    '淮城街道','流均镇','河下街道','施河镇','漕运镇','博里镇','苏嘴镇','钦工镇'
                ],
            }
        },
        methods:{
            drawPie(id){
                this.charts = this.$echarts.init(document.getElementById(id))
                this.charts.setOption({
                    // color:['#49f61d','#ff8e3a','#ff2325'],
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        orient : 'vertical',
                        x : 'left',
                        textStyle:{//图例文字的样式
                            color:'#ccc',
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
                            name:'正常',
                            type:'bar',
                            barWidth : 11,//柱图宽度
                            data:this.opinionDataZc,
                            itemStyle:{
                                color:'#49f61d'
                            }
                        },
                        {
                            name:'超时',
                            type:'bar',
                            barWidth : 11,//柱图宽度
                            data:this.opinionDataCs,
                            itemStyle:{
                                color:'#ff8e3a'
                            }
                        },
                        {
                            name:'未开展',
                            type:'bar',
                            barWidth : 11,//柱图宽度
                            data:this.opinionDataWkz,
                            itemStyle:{
                                color:'#ff2325'
                            }
                        },
                    ]
                })
            }
        },
        //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('warningInfo')
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