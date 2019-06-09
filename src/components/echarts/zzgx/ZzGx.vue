<template>
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="zzGx" style="width: 100%;height: 280px;"></div>
</template>
<script>
    // import echarts from 'echarts'
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['申请','审核','接收'],
                opinionData:[12,8,4]
            }
        },
        methods:{
            drawPie(id){
                this.charts = this.$echarts.init(document.getElementById(id))
                this.charts.setOption({
                    color:['#4472C5','#ED7C30','#80FF80'],
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient : 'vertical',
                        x : 'left',
                        data:this.opinion,
                        textStyle:{//图例文字的样式
                            color:'#ccc',
                            fontSize:16
                        },
                    },
                    calculable: true,
                    grid: {
                        borderWidth: 0,
                        y: 80,
                        y2: 60
                    },
                    xAxis: [
                        {
                            type: 'category',
                            show: false,
                            data:this.opinion
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            show: false
                        }
                    ],
                    series: [
                        {
                            name: '',
                            type: 'bar',
                            barWidth : 50,//柱图宽度
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        // build a color map as your need.
                                        let colorList = [
                                            '#4472C5','#ED7C30','#80FF80'
                                        ];
                                        return colorList[params.dataIndex]
                                    },
                                    label: {
                                        show: true,
                                        position: 'top',
                                        formatter: '{b}\n{c}'
                                    }
                                }
                            },
                            data: this.opinionData,

                        }
                    ]
                })
            }
        },
        //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('zzGx')
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