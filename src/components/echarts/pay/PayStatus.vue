<template>
    <!--缴纳与未缴纳占比图-->
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="payStatus" style="width: 100%;height: 280px;"></div>
</template>
<script>
    // import echarts from 'echarts'
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['已缴纳数','未缴纳数'],
                opinionData:[
                    {value:335, name:'已缴纳数'},
                    {value:110, name:'未缴纳数'},

                ]
            }
        },
        methods:{
            drawPie(id){
                this.charts = this.$echarts.init(document.getElementById(id))
                this.charts.setOption({
                    color:['#49f61d','#ed721a'],
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
                            fontSize:12
                        },
                    },
                    toolbox: {
                        show : true,
                    },
                    calculable : true,
                    series : [
                        {
                            name:'缴纳',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:this.opinionData,
                            label:{            //饼图图形上的文本标签
                                normal:{
                                    show:true,
                                    position:'inner', //标签的位置
                                    textStyle : {
                                        fontWeight : 200 ,
                                        fontSize : 11    //文字的字体大小
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
                this.drawPie('payStatus')
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