<template>
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="activity" style="width: 100%;height: 280px;"></div>
</template>
<script>
    // import echarts from 'echarts'
    export default {
        name: '',
        data () {
            return {
                charts: '活动开展数量',
                opinion:['支部大会','支委会','党小组会','组织生活会','主题党日','党课'],
                opinionData:[
                    {value:335, name:'支部大会'},
                    {value:310, name:'支委会'},
                    {value:234, name:'党小组会'},
                    {value:134, name:'组织生活会'},
                    {value:234, name:'主题党日'},
                    {value:135, name:'党课'},
                ]
            }
        },
        methods:{
            drawPie(id){
                this.charts = this.$echarts.init(document.getElementById(id))
                this.charts.setOption({
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    grid: {
                        top: '14%',
                        left: '13%',
                        right: '14%',
                        bottom: '13%',
                        containLabel: true
                    },
                    color:['#4472C5','#ED7C30','#80FF80','#FF8096','#C534A7','#1411c5'],
                    legend: {
                        orient : 'vertical',
                        x : 'left',

                        textStyle:{//图例文字的样式
                            color:'#ccc',
                            fontSize:12
                        },
                        data:this.opinion
                    },
                    toolbox: {
                        show : true,
                    },
                    calculable : true,
                    series : [
                        {
                            name:'开展次数',
                            type:'pie',
                            radius : ['50%', '70%'],
                            itemStyle : {
                                normal : {
                                    label : {
                                        show : false
                                    },
                                    labelLine : {
                                        show : false
                                    }
                                },
                            },
                            data:this.opinionData,
                            label:{            //饼图图形上的文本标签
                                normal:{
                                    show:true,
                                    position:'inner', //标签的位置
                                    textStyle : {
                                        fontWeight : 200 ,
                                        fontSize : 12    //文字的字体大小
                                    },
                                    formatter: '{c}'


                                }
                            },
                        }
                    ]
                })
            }
        },
        //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('activity')
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