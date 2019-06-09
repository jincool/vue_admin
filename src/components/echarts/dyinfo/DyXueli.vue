<template>
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="xueli" style="width: 100%;height: 280px;"></div>
</template>
<script>
    // import echarts from 'echarts'
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['小学','初中','高中','中专','大专','本科','硕士','博士','其他'],
                opinionData:[
                    {value:4649, name:'小学'},
                    {value:11281, name:'初中'},
                    {value:5441, name:'高中'},
                    {value:1012, name:'中专'},
                    {value:1886, name:'大专'},
                    {value:2138, name:'本科'},
                    {value:141, name:'硕士'},
                    {value:8, name:'博士'},
                    {value:0, name:'其他'},
                ]
            }
        },
        methods:{
            drawPie(id){
                this.charts = this.$echarts.init(document.getElementById(id))
                this.charts.setOption({
                    color:['#4472C5','#ED7C30','#80FF80','#FF8096','#C534A7','#52c9ed','#fbffa6','#ce6eff','#5fc5c5'],
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
                            name:'学历',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:this.opinionData,

                        }
                    ]
                })
            }
        },
        //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('xueli')
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