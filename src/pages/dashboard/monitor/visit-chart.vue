<template>
    <div ref="visitChart" v-height="400"></div>
</template>
<script>
    import echarts from 'echarts';

    function getDate (d) {
        const date = new Date(d);
        const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        return `${hour}:${mins}`;
    }

    export default {
        data () {
            return {
                xData: [],
                y1Data: [],
                y2Data: []
            }
        },
        methods: {
            handleGetData () {
                const date = (new Date()).getTime();
                this.xData = [
                    getDate(date),
                    getDate(date - 60000 * 5),
                    getDate(date - 60000 * 10),
                    getDate(date - 60000 * 15),
                    getDate(date - 60000 * 20),
                    getDate(date - 60000 * 25),
                    getDate(date - 60000 * 30),
                    getDate(date - 60000 * 35),
                    getDate(date - 60000 * 40),
                    getDate(date - 60000 * 45),
                    getDate(date - 60000 * 50)
                ].reverse();
                this.y1Data = [45, 169, 400, 285, 316, 148, 150, 234, 158, 100, 266];
                this.y2Data = [15, 39, 152, 94, 102, 86, 39, 38, 95, 30, 86];
            },
            handleSetVisitChart () {
                this.visitChart = echarts.init(this.$refs.visitChart);
                this.visitChart.setOption(
                    {
                        xAxis: {
                            type: 'category',
                            axisLine: {
                                lineStyle: {
                                    color: '#D7DDE4'
                                }
                            },
                            axisTick: {
                                alignWithLabel: true,
                                lineStyle: {
                                    color: '#D7DDE4'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#7F8B9C'
                                }
                            },
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: '#F5F7F9'
                                }
                            },
                            data: this.xData,
                            boundaryGap: false
                        },
                        yAxis: {
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#7F8B9C'
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#F5F7F9'
                                }
                            },
                            type: 'value'
                        },
                        legend: {
                            data: ['浏览量（PV）', '访客数（UV）'],
                            x: 'right'
                        },
                        series: [
                            {
                                data: this.y1Data,
                                name: '浏览量（PV）',
                                type: 'line',
                                tooltip: true,
                                smooth: true,
                                symbol: 'none',
                                areaStyle: {
                                    normal: {
                                        opacity: 0.2
                                    }
                                }
                            },
                            {
                                data: this.y2Data,
                                name: '访客数（UV）',
                                type: 'line',
                                tooltip: true,
                                smooth: true,
                                symbol: 'none',
                                areaStyle: {
                                    normal: {
                                        opacity: 0.2
                                    }
                                }
                            }
                        ],
                        color: ['#1495EB', '#00CC66', '#F9D249', '#ff9900', '#9860DF'],
                        grid: {
                            left: 20,
                            right: 20,
                            bottom: 20,
                            top: 40,
                            containLabel: true
                        },
                        tooltip: {
                            trigger: 'axis'
                        }
                    }
                );
            },
            handleResize () {
                this.visitChart.resize();
            }
        },
        mounted () {
            this.handleGetData();
            this.handleSetVisitChart();
        },
        beforeDestroy () {
            if (this.visitChart) {
                this.visitChart.dispose();
                this.visitChart = null;
            }
        }
    }
</script>
