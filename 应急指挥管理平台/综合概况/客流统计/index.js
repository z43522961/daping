import I1a823b6a2aa548819fc5f672b37c5f26 from 'img/0b9145deba104290bd0cc89e506d5810.png'//1111.png
import I40783160a1f04bf988c4a327e8723a85 from 'img/489179f6375c42a2bca2091333bcd346.png'//symbol2.png
import Ifbfa94e810684589890191ac9eecec37 from 'img/cc550475588c4879bf0a50997acea5b7.png'//symbol.png
import DINPro_Bold from 'fonts/DINPro_Bold.ttf&&DINPro-Bold'//font-family: 'DINPro-Bold'
import echartsjs from 'lib/echarts'
import I841167baec7b4c749bc06b9fd023c8c5 from 'img/ca64e8558f034e1c86bb09ce7c1d4101.png'//刻度背景.png
import I513a7e53fe524dda9726e50e3e82ed05 from 'img/852d26c80cf04ce394c81428efb55fca.png'//标题背景.png
import I236d5c20175e4baab30f1e7821afe1c6 from 'img/b2d417e385e144789150f23656d7f46e.png'//标题icon.png
import I05832aa14a9843bf92bdd785690d62fb from 'img/b9566a9ce64a4f95b698ad8c826ca486.png'//背景.png



return class item extends Base {
    constructor(dom, config) {
        super(dom, config);
        this.padding = [0, 0, 0, 0]

        this.myChart = null;
        this.option = {}

        this.theme = {}

        this.opts = {
            menu: {
                chart: {
                    title: "客流统计"
                }
            }
        }

        this.data = [
            {
                name: "散客",
                number: 878
            }, {
                name: "团队",
                number: 123
            }, {
                name: "年卡",
                number: 878,
            }, {
                name: "网络",
                number: 312
            }, {
                name: "免费",
                number: 1000
            }
        ]

        this.images = {
            background: I05832aa14a9843bf92bdd785690d62fb,
            titleBackground: I513a7e53fe524dda9726e50e3e82ed05,
            titleIcon: I236d5c20175e4baab30f1e7821afe1c6,
            axisBackground: I841167baec7b4c749bc06b9fd023c8c5,
            axis: Ifbfa94e810684589890191ac9eecec37,
            axis2: I40783160a1f04bf988c4a327e8723a85,
            axisBK: I1a823b6a2aa548819fc5f672b37c5f26
        }
    }


    render(h, data, opts) {
        return (
            <div class="main" style={{ background: `url(${this.images.background})` }}>
                <div class="title" style={{ background: `url(${this.images.titleBackground})` }}>
                    <div class="title_icon" style={{ background: `url(${this.images.titleIcon})` }}></div>
                    <span class="title_text">{opts.menu.chart.title}</span>
                </div>

                <div class="yAxis">

                    {
                        this.data.map((x, index) => {
                            if (index % 2 == 0) {
                                return (
                                    <div class="axisLabel" style={{ background: `url(${this.images.axisBackground})` }}>
                                        <div class="axisLabel_text">
                                            {x.name}
                                        </div>
                                        <div class="axisLabel_value">
                                            {x.number}
                                        </div>
                                        <div class="axisLabel_total">
                                            /1000
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <div class="axisLabel" style={{ background: `url(${this.images.axisBackground})` }}>
                                    <div class="axisLabel_text">
                                        {x.name}
                                    </div>
                                    <div class="axisLabel_value" style={{ color: '#8BF2FF' }}>
                                        {x.number}
                                    </div>
                                    <div class="axisLabel_total">
                                        /1000
                                    </div>
                                </div>
                            )
                        })
                    }
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
        let datas = []

        this.data.forEach((x, index) => {
            datas[index] = {}
            datas[index].value = x.number
            if (index % 2 === 1) {
                datas[index].symbol = `image://${this.images.axis}`
            }
        })


        this.option = {
            grid: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            xAxis: {
                max: 1000,
                type: 'value',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: [this.data[0].name, this.data[1].name, this.data[2].name, this.data[3].name, this.data[4].name]
            },
            series: [
                {
                    z: 4,
                    silent: true,
                    type: 'pictorialBar',
                    barWidth: 20,
                    symbol: `image://${this.images.axis2}`,
                    symbolBoundingData: 1000,
                    symbolClip: true,
                    data: datas
                }, {
                    z: 2,
                    silent: true,
                    type: 'pictorialBar',
                    barWidth: 20,
                    symbol: `image://${this.images.axisBK}`,
                    symbolBoundingData: 1000,
                    symbolClip: true,
                    data: [1000, 1000, 1000, 1000, 1000],
                    symbolOffset: [-1, 0]
                }

            ]
        }
        this.myChart.setOption(this.option)
    }

    setData(data) {
        this.data = data;
        this.render()
        this.updateChart()
    }

    setOption(opts) {
        this.opts = opts;
        this.render();
        this.updateChart();
    }
}
