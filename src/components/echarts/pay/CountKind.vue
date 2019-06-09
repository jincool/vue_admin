<template>
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="kinds" style="width: 100%;height: 350px;"></div>
</template>
<script>
    // import echarts from 'echarts'
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['党费上划','党费下拨','党费支出'],
                opinionData:[
                    {value:3130, name:'党费上划'},
                    {value:2590, name:'党费下拨'},
                    {value:1200, name:'党费支出'},

                ]
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
                            fontSize:12
                        },
                    },
                    toolbox: {
                        show : true,
                    },
                    calculable : true,
                    series : [
                        {
                            name:'支出分类',
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
                this.drawPie('kinds')
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