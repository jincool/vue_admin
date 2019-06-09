<template>
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="ycJy" style="width: 100%;height: 280px;"></div>
</template>
<script>
    // import echarts from 'echarts'
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['固定学习日','远教培训周'],
                opinionData:[
                    {value:335, name:'固定学习日'},
                    {value:110, name:'远教培训周'},

                ]
            }
        },
        methods:{
            drawPie(id){
                this.charts = this.$echarts.init(document.getElementById(id))
                this.charts.setOption({
                    color:['#4472C5','#ED7C30'],
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
                            name:'学习次数',
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
                                        fontSize : 12    //文字的字体大小
                                    },
                                    formatter: '{c}'


                                }
                            },
                        },

                    ]
                })
            }
        },
        //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('ycJy')
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