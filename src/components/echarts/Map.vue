<template>
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="map" style="width: 100%;height: 300px;"></div>
</template>
<script>
     import huaianqu from '@/assets/json/huaianqu.json'
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['参学率'],
                opinionData:[82.0, 84.9, 87.0, 88.2, 85.6, 76.7, 85.6, 92.2, 82.6, 90.0, 86.4, 93.3],
            }
        },
        methods:{
            drawMap(id){

                this.charts = this.$echarts.init(document.getElementById(id))
                this.$echarts.registerMap("淮安区",huaianqu);
                this.charts.setOption({

                    title: "", //标题
                    tooltip: { //此处是根据后端数据进行hover 展示的提示框，可用官网上默认的
                        trigger: "item",
                        formatter: function(params) {
                            // return params.name + " ( " + params.data.value[2] + " ) " + "</br>"
                            //     +"飞机" + " : " + params.data.aircraftNum + "</br>";
                        }
                    },
                    // legend: { //标签
                    //     orient: 'vertical',
                    //     y: 'bottom',
                    //     x:'right',
                    //     data:['行踪轨迹'],
                    //     textStyle: {
                    //         color: '#fff'
                    //     }
                    // },
                    // visualMap: {//颜色轴，可以根据数据点的值大小，展示不同的颜色，或用来展示地图块的不同颜色
                    //     min: 0,
                    //     max: 200,
                    //     calculable: true,
                    //     inRange: {
                    //         color: ["#3dda8e", "#eac736", "#d94e5d"]
                    //     },
                    //     textStyle: {
                    //         color: "#fff"
                    //     }
                    // },
                    geo: {//配置地图参数
                        map: "淮安区",
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: "#058bd2",
                                borderColor: "#111"
                            },
                            emphasis: {
                                areaColor: "#1e67b2"
                            }
                        }
                    },
                    series: [
                        {//根据数据展示点，并显示为波纹效果
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            zlevel: 2,
                            //波纹效果
                            rippleEffect: {
                                period: 2,
                                brushType: 'stroke',
                                scale: 3
                            },
                            label: {
                                normal: {
                                    show: true,
                                    color: '#fff',
                                    position: 'right',
                                    formatter: '{b}'
                                }
                            },
                            //圆点大小
                            symbolSize: 16,
                            // data: convertData(data),
                        }
                    ]




                })
            }
        },
        //调用
        mounted(){
            this.$nextTick(function() {
                this.drawMap('map')
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