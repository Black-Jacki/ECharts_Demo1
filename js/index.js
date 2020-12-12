// 定时器
(function () {
    setInterval(time, 1000)

    function time() {
        dt = new Date()
        let y = dt.getFullYear()
        let mt = dt.getMonth() + 1
        let day = dt.getDate()
        let h = dt.getHours()
        let m = dt.getMinutes()
        let s = dt.getSeconds()
        document.querySelector('.showTime').innerHTML = 'DATE：' + y + '-' + mt + '-' + day + '&nbsp; ' + h + ':' + m + ':' + s
    }
})();


// 左上角柱形图 纵向布局
(function () {
    // 基于准备好的dom，初始化echarts实例
    const myCharts = echarts.init(document.querySelector('.bar-left .chart',))

    // 指定图表的配置项和数据
    const option = {
        color: ['#40a9ff'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        // legend: {
        //     textStyle: {
        //         color: 'rgba(255, 255, 255, 0.6)',
        //         fontSize: 12,
        //     },
        // },
        grid: {
            left: '0%',
            right: '0',
            top: '5%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: 12
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.4)'
                },
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.4)'
                },
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
            },
        },
        series: [{
            name: '人员数量',
            type: 'bar',
            barWidth: '35%',
            data: [400, 500, 630, 900, 1500, 1200, 600],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
        },]
    }

    // 使用刚指定的配置项和数据显示图表。
    myCharts.setOption(option);

    // 让图表跟随屏幕自适应变化
    window.addEventListener('resize', function () {
        myCharts.resize()
    })
})();


// 右上角柱形图 横向布局
(function () {
    // 实例化对象
    const myCharts = echarts.init(document.querySelector('.bar-right .chart'))

    const myColor = ['#1089e7', '#f57474', '#56d0e3', '#f8b448', '#8b78f6']

    const option = {

        grid: {
            top: '5%',
            left: '8%',
            right: '8%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: 'category',
                inverse: true,
                data: ['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'VUE'],
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: 12
                },
            },
            {
                type: 'category',
                inverse: true,
                data: ['702', '350', '610', '793', '664'],
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: 12
                },
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 0,
                // 修改第一组柱子的圆角
                itemStyle: {
                    barBorderRadius: 20,
                    color: function ({ dataIndex }) {
                        const num = myColor.length
                        return myColor[dataIndex % num]
                    },
                },
                // 修改柱子间的距离
                barCategoryGap: 50,
                // 柱子宽度
                barWidth: 10,
                // 显示柱子内文字
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 15,
                yAxisIndex: 1,
                itemStyle: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100],
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myCharts.setOption(option);

    // 让图表跟随屏幕自适应变化
    window.addEventListener('resize', function () {
        myCharts.resize()
    })
})();


// 左中折线图
(function () {
    // 实例化对象
    const myCharts = echarts.init(document.querySelector('.line-left .chart'))

    const yearData = [
        {
            year: 2020,
            data: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 280, 210, 280, 260, 290],
            ]
        },
        {
            year: 2021,
            data: [
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
            ]
        },
    ]

    const option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            textStyle: {
                color: 'rgba(255, 255, 255, 0.6)',
            },
            right: '10%'
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '20%',
            bottom: '5%',
            show: true,
            borderColor: '#012f4a',
            containLabel: true
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {
        //             iconStyle: {
        //                 borderColor: 'rgba(255, 255, 255, 0.8)',
        //             }
        //         }
        //     },
        // },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.6)'
            },
            axisLine: {
                show: false
            },
            // 去掉轴内间距
            boundaryGap: false,
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.6)'
            }
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                // 折线修饰为圆滑
                smooth: true
            },
            {
                name: '新增游客',
                type: 'line',
                data: [40, 64, 191, 324, 290, 330, 310, 280, 210, 280, 260, 290],
                // 折线修饰为圆滑
                smooth: true
            },
        ]
    };

    // 使用刚指定的配置项和数据显示图表
    myCharts.setOption(option);

    // 让图表跟随屏幕自适应变化
    window.addEventListener('resize', function () {
        myCharts.resize()
    })

    // 点击切换效果
    $('.line-left h2').on('click', 'a', function () {

        const obj = yearData[$(this).index()]
        option.series[0].data = obj.data[0]
        option.series[1].data = obj.data[1]

        // 需要重新渲染
        myCharts.setOption(option);
    })
})();


// 右中折线图
(function () {
    // 实例化对象
    const myCharts = echarts.init(document.querySelector('.line-right .chart'))

    const option = {

        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: 0,
            textStyle: {
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: 12,
            }
        },
        grid: {
            left: '5%',
            right: '5%',
            top: '25%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: 12,
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.2)',
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.1)',
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: 12,
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.1)',
                    }
                }
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                // 平滑线条
                smooth: true,
                // 填充颜色
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [
                        {
                            offset: 0,
                            // 渐变起始颜色
                            color: 'rgba(1, 132, 213, 0.4)'
                        },
                        {
                            offset: 0.8,
                            // 渐变结束颜色
                            color: 'rgba(1, 132, 213, 0.1)'
                        },
                    ],
                        false
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.1)'
                },

                // 设置拐点 小圆点
                symbol: 'circle',
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: '#0184d5',
                    borderColor: 'rgba(221, 220, 107, 0.1)',
                    borderWidth: 12,
                },
                // 开始不显示  鼠标经过显示
                showSymbol: false,

                // 单独修改当前线条的样式
                lineStyle: {
                    color: '#0184d5',
                },
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 30, 40, 30, 40, 30, 40, 30, 60, 20, 30, 40, 30, 40, 30, 50, 40, 60, 50, 30, 40, 30]
            },
            {
                name: '联盟广告',
                type: 'line',
                // 平滑线条
                smooth: true,
                // 填充颜色
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [
                        {
                            offset: 0,
                            // 渐变起始颜色
                            color: 'rgba(0, 216, 135, 0.4)'
                        },
                        {
                            offset: 0.8,
                            // 渐变结束颜色
                            color: 'rgba(0, 216, 135, 0.1)'
                        },
                    ],
                        false
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.1)'
                },

                // 设置拐点 小圆点
                symbol: 'circle',
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: '#00d887',
                    borderColor: 'rgba(221, 220, 107, 0.1)',
                    borderWidth: 12,
                },
                // 开始不显示  鼠标经过显示
                showSymbol: false,

                // 单独修改当前线条的样式
                lineStyle: {
                    color: '#00d887',
                },
                data: [130, 80, 60, 70, 60, 80, 45, 30, 20, 30, 60, 100, 60, 90, 80, 120, 100, 80, 90, 80, 120, 100, 60, 80, 80, 60, 50, 70, 65, 120]
            },
        ]
    }

    // 使用刚指定的配置项和数据显示图表
    myCharts.setOption(option);

    // 让图表跟随屏幕自适应变化
    window.addEventListener('resize', function () {
        myCharts.resize()
    })
})();