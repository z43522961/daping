import DINPro_Medium from 'fonts/DINPro_Medium.ttf&&DINPro-Medium'//font-family: 'DINPro-Medium'
import echartsjs from 'lib/echarts'
import DINPro_Medium from 'fonts/DINPro_Medium.ttf&&DINPro-Medium'//font-family: 'DINPro-Medium'
import I73e6ec7cf713463c84fad4fc5992cfbc from 'img/77e1b319408f478abe63d57e5b9a9193.png'//内容背景.png
import I8928b41538fb4dcf9bb04161b70dea26 from 'img/57cd65735a9c4c8eb9e581f996a6d78b.png'//标题icon.png
import I3fe685d6a0ca4bd59bcb6a5047fa939e from 'img/eabb3f0b1b174b089ab76b8df462fc41.png'//标题背景.png
import I5b0f9c89f44f4b5ab1b7b03fdf6863c0 from 'img/944fe66c70b146eba66e6c3f7c4aeab8.png'//背景.png


return class item extends Base {
    constructor(dom, config) {
        super(dom, config);
        this.padding = [0, 0, 0, 0]


        this.option = {};
        this.myChart = {};
        this.theme = {}
        this.opts = {
            menu: {
                chart: {
                    title: "应用告急统计"
                }
            }
        }
        this.images = {
            background: I5b0f9c89f44f4b5ab1b7b03fdf6863c0,
            titleBackground: I3fe685d6a0ca4bd59bcb6a5047fa939e,
            titleIcon: I8928b41538fb4dcf9bb04161b70dea26,
            content: I73e6ec7cf713463c84fad4fc5992cfbc
        }

        this.data = [
            {
                name:'待分配',
                value:12
            }, {
                name: '待处理',
                value: 17
            }, {
                name: '处理中',
                value: 21,
            }, {
                name: '已完成',
                value: 28
            }, {
                name: '已取消',
                value: 32
            }
        ]
    }

    render(h, data, opts) {
        let total = 0;
        this.data.forEach(x => {
            total+= x.value
        })
        return (
            <div class="main" style={{ background: `url(${this.images.background})` }}>
                <div class="title" style={{ background: `url(${this.images.titleBackground})` }}>
                    <div class="title_icon" style={{ background: `url(${this.images.titleIcon})` }}></div>
                    <span class="title_text">{opts.menu.chart.title}</span>
                </div>
                <div class="content" style={{ background: `url(${this.images.content})` }}>
                    <div class="content_text">告警总数</div>
                    <div class="content_number">{total}</div>
                </div>
                <div class="chart" ref="chart">

                </div>
            </div>
        )
    }

    mounted() {
        this.myChart = echarts.init(this.instance.$refs.chart)

        this.updateChart()
    }

    updateChart() {

        this.option = {
            dataset: {
                source: this.data
            },
            grid: {
                top: 40,
                bottom: 10,
                left: 15,
                right: 0,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.6)"
                    }
                },
                axisLabel: {
                    fontSize: 14,
                    color: "#FFFFFF"
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitNumber: 4,
                splitLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.2)"
                    }
                }
            },
            series: [
                {
                    symbolClip: true,
                    label: {
                        show: true,
                        position: "top",
                        color: "rgba(255, 246, 111, 1)",
                        fontSize: 18,
                        fontFamily: 'DINPro-Medium',
                        z: 999
                    },
                    barWidth: 110,
                    symbolOffset: [0, 5],
                    symbol:
                        "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",

                    itemStyle: {
                        borderColor: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 1,
                                color: 'rgba(201, 231, 101, 1)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(109, 209, 154, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(41, 137, 116, 0)'
                            }
                        ]),
                        borderWidth: 5,
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 1,
                                color: 'rgba(201, 231, 101, 0.4)'
                            }, {
                                offset: 0,
                                color: 'rgba(109, 209, 154, 0.25)'
                            }
                        ])
                    },
                    type: 'pictorialBar'
                }
            ]
        }
        this.myChart.setOption(this.option)
    }

    setData(data) {
        this.data = data;
        this.render();
        this.updateChart()
    }

    setOption(opts) {
        this.opts = opts;
        this.render();
        this.updateChart()
    }
}
