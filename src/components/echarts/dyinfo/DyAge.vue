<template>
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="age" style="width: 100%;height: 280px;"></div>
</template>
<script>
    // import echarts from 'echarts'
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['25岁以下','25-34岁','35-44岁','45-59岁','60岁及以上'],
                opinionData:[
                    {value:335, name:'25岁以下'},
                    {value:610, name:'25-34岁'},
                    {value:834, name:'35-44岁'},
                    {value:1534, name:'45-59岁'},
                    {value:3234, name:'60岁及以上'},
                ]
            }
        },
        methods:{
            drawPie(id){
                this.charts = this.$echarts.init(document.getElementById(id))
                this.charts.setOption({
                    color:['#4472C5','#ED7C30','#80FF80','#FF8096','#C534A7'],
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
                            name:'年龄区间',
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
                this.drawPie('age')
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