//柱形图
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    //2.指定配置项和数据
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //修改图表大小
        grid: {
            left: '0%',
            right: '0%',
            bottom: '4%',
            top: "10px",
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['旅游行业', '教训培育', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'], //刻度标签
            axisTick: {
                alignWithLabel: true
            },
            //修改刻度标签相关样式
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            axisLine: {
                show: false //X轴第一条横线样式
            }
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,.6)", //Y轴字体大小
                fontSize: "12"
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)" //Y轴样式
                }
            },
            //Y轴分割线颜色
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }, ],
        series: [{
            name: '直接访问',
            type: 'bar', //类型 柱形
            barWidth: '35%', //主子宽度
            data: [200, 300, 300, 900, 1500, 1200, 600], //数据
            itemStyle: {
                barBorderRadius: 5 //柱子圆角
            }
        }]
    };
    //3.把配置给实例对象
    myChart.setOption(option);
    //让图表跟随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

//柱形图2
(function () {
    var myColor = ["#1089E7", "#F57474", "#56D0e3", "#F8B448", "#8B78F6"]; //定义柱形图的颜色
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
        grid: {
            left: '22%',
            top: '10%',
            bottom: '10%',
            containLabel: false //让距离为0
        },
        xAxis: {
            //不显示X轴信息
            show: false
        },
        yAxis: [
            //第一组显示左侧数值 第二组显示右侧数值
            {
                type: 'category',
                data: ['html', 'css', 'javascript', 'vue', 'echart'],
                axisLine: {
                    show: false //不显示Y轴
                },
                axisTick: {
                    show: false //不显示刻度
                },
                axisLabel: {
                    color: "#fff" //刻度标签文字为白色
                },
                inverse: true
            },
            //设定两组Y轴数据
            {
                show: true,
                data: [702, 350, 610, 793, 664],
                axisLine: {
                    show: false //不显示Y轴
                },
                axisTick: {
                    show: false //不显示刻度
                },
                axisLabel: {
                    color: "#fff" //刻度标签文字为白色
                },
                inverse: true
            }
        ],
        series: [{
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 0,
                //修改第一组柱子圆角
                itemStyle: {
                    barBorderRadius: 20,
                    //修改柱子颜色 运用函数的方式 params代表6个柱子对象 dataIndex对应柱子对应的下标 返回局部变量myColor的对应颜色
                    color: function (params) {
                        return myColor[params.dataIndex]
                    }
                },
                //修改柱子距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 12,
                //显示柱子内的文字
                label: {
                    show: true,
                    position: "inside",
                    //C会自动解析data的数据
                    formatter: "{c}%"
                }
            },
            {
                name: '框',
                type: 'bar',
                //修改柱子距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 15,
                data: [100, 100, 100, 100, 100],
                yAxisIndex: 1,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                }
            }
        ]
    };
    //3.把配置给实例对象
    myChart.setOption(option);
    //让图表跟随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

//折线图1
(function () {
    var yearDate = [{
            year: "2020",
            data: [
                [24, 400, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [24, 400, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            ]
        },
        {
            year: "2021",
            data: [
                [24, 400, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [220, 182, 191, 234, 290, 330, 310, 213, 180, 200, 180, 79],
            ]
        }
    ]
    //实例化对象
    var myChart = echarts.init(document.querySelector(".line .chart"));
    //指定配置
    var option = {
        //修改折线颜色
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            //series name设定有 legend可省略data
            textStyle: {
                color: "#4c9bfd" //修改图例组件文字颜色
            },
            right: "10%" //图例距离右边10%
        },
        grid: {
            top: "20%",
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true, //显示边框
            borderColor: "#012f4a", //边框颜色
            containLabel: true //刻度+文字
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', ],
            axisTick: {
                show: false //去掉刻度线
            },
            axisLabel: {
                color: "#4c9bfd" //x轴文本颜色
            },
            axisLine: {
                show: false //去除刻度线
            },
            boundaryGap: false //去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisLine: false,
            axisTick: {
                show: false //去掉刻度线
            },
            axisLabel: {
                color: "#4c9bfd" //x轴文本颜色
            },
            axisLine: {
                show: false //去除刻度线
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a" //分割线颜色 ||||||
                }
            }
        },
        series: [{
                name: '数据1',
                type: 'line',
                data: yearDate[0].data[0],
                smooth: true //使折现变得圆滑 有弧度 默认直线
            },
            {
                name: '数据2',
                type: 'line',
                data: yearDate[0].data[1],
                smooth: true //使折现变得圆滑 有弧度 默认直线
            }
        ]
    };

    //把配置给实例对象
    myChart.setOption(option)
    //适配屏幕
    window.addEventListener('resize', function () {
        myChart.resize();
    })
    //点击切换数据效果
    $('.line h2').on('click', 'a', function () {
        console.log(yearDate[$(this).index()])
        var obj = yearDate[$(this).index()]
        option.series[0].data = obj.data[0]
        option.series[1].data = obj.data[1]
        //切换完成后数据渲染
        myChart.setOption(option)
    })
})();

//折线图2
(function () {
    var myChart = echarts.init(document.querySelector(".line2 .chart"))
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: "0%",
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        grid: {
            left: '10',
            right: '10',
            bottom: '30',
            top: "30",
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.2)"
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            }, //不显示刻度标签
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)" //y轴颜色
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)", //修改文字
                    fontSize: "12"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)" //修改分割线颜色
                }
            }
        }],
        series: [{
                name: '邮件营销',
                type: 'line',
                areaStyle: {},
                data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
                smooth: true,
                lineStyle: { //修改单条线颜色
                    color: "#0184d5",
                    fontSize: "3"
                },
                //填充颜色设置
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: "rgba(1,132,213,0.4)"
                            }, //渐变开始颜色
                            {
                                offset: 0.8,
                                color: "rgba(1,132,213,0.1)"
                            } //渐变结束颜色
                        ], false
                    ),
                    shadowColor: "rgba(0,0,0,0.1)" //影子颜色 阴影
                },
                //线上圈点 拐点 小圆点
                symbol: "circle", //拐点类型
                symbolSize: 8, //拐点大小
                showSymbol:false, //默认不显示
                itemStyle:{//拐点的样式
                    color:"#0184d5",
                    borderColor:"rgba(221,220,107,.1)", //拐点边框颜色
                    borderWidth:12 //拐点大小
                }
            },
            {
                name: '联盟广告',
                type: 'line',
                areaStyle: {},
                data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
                smooth: true,
                lineStyle: { //修改单条线颜色
                    color: "#00d887",
                    fontSize: "3"
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: "rgba(0,216,135,0.4)"
                            }, //渐变开始颜色
                            {
                                offset: 0.8,
                                color: "rgba(0,216,135,0.1)"
                            } //渐变结束颜色
                        ], false
                    ),
                    shadowColor: "rgba(0,0,0,0.1)" //影子颜色 阴影
                },
                //线上圈点 拐点 小圆点
                symbol: "circle", //拐点类型
                symbolSize: 8, //拐点大小
                showSymbol:false, //默认不显示
                itemStyle:{//拐点的样式
                    color:"#00d887",
                    borderColor:"rgba(221,220,107,.1)", //拐点边框颜色
                    borderWidth:12 //拐点大小
                }
            },
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

//饼形图1
(function(){
    var myChart = echarts.init(document.querySelector(".pie .chart"))
    var option = {
        color:["#065aab","#066eab","#0682ab","#0696ab","#06a0ab"],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            //orient: 'vertical', //垂直居中
            bottom:"0%",
            itemWidth:10,
            itemHeight:10,
            textStyle:{ //图例组件文字
                color:"rgba(255,255,255,.5)",
                fontSize:"12"
            },
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                center:["50%","45%"], //修改饼图位置
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    show: false, //是否显示名字
                    position: 'center'
                },
                labelLine: {
                    show: false //连接名字线是否显示
                },
                data: [
                    {value: 1, name: '0岁以下'},
                    {value: 4, name: '20-29岁'},
                    {value: 2, name: '30-39岁'},
                    {value: 2, name: '40-49岁'},
                    {value: 1, name: '50-59岁'}
                ]
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

//地区分布模块
(function(){
    var myChart = echarts.init(document.querySelector(".pie2 .chart"))
    var option = {
        color:["#006cff","#60cda0","#ed8884","#ff9f7f","#0096ff","#32c5e9","#1d9dff"],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            bottom:"0%",
            itemWidth:10,
            itemHeight:10,
            textStyle:{
                color:"rgba(255,255,255,.5)",
                fontSize:"10"
            }
        },
        series: [
            {
                name: '地区分布',
                type: 'pie',
                radius: ["10%", "70%"],
                center: ['50%', '50%'],
                roseType: 'radius',
                label:{
                    fontSize:10
                },
                //链接字条长度的样式
                labelLine:{
                    lenght:6,
                    lenght2:8
                },
                data: [
                    {value: 20, name: '云南'},
                    {value: 26, name: '北京'},
                    {value: 24, name: '山东'},
                    {value: 25, name: '河北'},
                    {value: 20, name: '四川'},
                    {value: 35, name: '上海'},
                    {value: 30, name: '杭州'},
                    {value: 42, name: '浙江'}
                ]
            }
        ]
    };
    
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
