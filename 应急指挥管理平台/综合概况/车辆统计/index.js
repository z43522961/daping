import echartsjs from 'lib/echarts'
import DINPro_Medium from 'fonts/DINPro_Medium.ttf&&DINPro-Medium'//font-family: 'DINPro-Medium'
import SourceHanSansCN_Medium from 'fonts/SourceHanSansCN_Medium.otf&&SourceHanSansCN-Medium'//font-family: 'SourceHanSansCN-Medium'
import I14754fef31d644ba88460bc342c126d6 from 'img/516654319f9c4fcbb5c4e3ca9e954b89.png'//title_bk.png
import Ia9c2cd1fa4044867abc67f4986c5179c from 'img/b884f9d83c214e4aae51f7199192bac2.png'//bg3.png
import I11b494c6a4b84f16bad0f9f0179bdcda from 'img/54a2429fdf904ddf9c7bf909cec2b2f6.png'//形状_815.png
import Ie75eeb0f0e4840cdae821e30b3682365 from 'img/973423ea5ee44766aef7b9d88a41c1b1.png'//right.png
import I18c1d00cbb4e411bb93c3fbe1babcec0 from 'img/d835792049424700acd97b70bb0c1f1e.png'//left.png
import Id557798a4e044fc7b18562c94c5cb453 from 'img/030a49a332b74826a1ef31395269662f.png'//background.png

return class item extends Base {
    constructor(dom, config) {
        super(dom, config);

        this.padding = [0, 0, 0, 0]

        this.leftChart = null
        this.rightChart = null

        this.theme = {}

        this.opts = {
            menu: {
                chart: {
                    title: "车辆统计"
                }
            }
        }

        this.data = {
            total: 313,
            occupy: 178
        }

    }

    render(h, data, opts) {
        this.data.unengaged = this.data.total - this.data.occupy
        return (
            <div class="main" style={{ background: `url(${Ia9c2cd1fa4044867abc67f4986c5179c})` }}>
                <div style={{ background: `url(${Id557798a4e044fc7b18562c94c5cb453})`, width: '100%', height: '100%' }}>
                    <div class="title" style={{ background: `url(${I14754fef31d644ba88460bc342c126d6})` }} >
                        <div class="title_icon" style={{ background: `url(${I11b494c6a4b84f16bad0f9f0179bdcda})` }}></div>
                        <span class="title_text">{opts.menu.chart.title}</span>
                    </div>
                    <div class="left" style={{ background: `url(${I18c1d00cbb4e411bb93c3fbe1babcec0})` }}>
                        <div class="left_chart" ref="left_chart"></div>
                        <div class="left_title">占用车位</div>
                        <div class="left_number">{this.data.occupy}</div>
                    </div>
                    <div class="right" style={{ background: `url(${Ie75eeb0f0e4840cdae821e30b3682365})` }}>
                        <div class="right_chart" ref="right_chart"></div>
                        <div class="right_title">空闲车位</div>
                        <div class="right_number">{this.data.unengaged}</div>
                    </div>
                </div>
            </div>
        )
    }

    mounted() {
        this.leftChart = echarts.init(this.instance.$refs.left_chart)
        this.rightChart = echarts.init(this.instance.$refs.right_chart)

        this.leftChartUpdate();
        this.rightChartUpdate();
    }

    leftChartUpdate() {
        this.leftChart_option = {
            series: {
                type: 'pie',
                silent: true,
                radius: ['90%', '100%'],
                labelLine: {
                    show: false
                },
                data: [
                    {
                        value: this.data.occupy,
                        name: 'occupy',
                        itemStyle: {
                            color: "#2CDBFF"
                        }
                    },
                    {
                        value: this.data.unengaged,
                        name: 'total',
                        itemStyle: {
                            color: "rgba(255, 0, 0, 0)"
                        }
                    }]
            }
        }
        this.leftChart.setOption(this.leftChart_option)
    }

    rightChartUpdate() {
        this.rightChart_option = {
            series: {
                type: 'pie',
                silent: true,
                radius: ['90%', '100%'],
                labelLine: {
                    show: false
                },
                data: [
                    {
                        value: this.data.unengaged,
                        name: 'unengaged',
                        itemStyle: {
                            color: "#FFF66F"
                        }
                    },
                    {
                        value: this.data.occupy,
                        name: 'total',
                        itemStyle: {
                            color: "rgba(255, 0, 0, 0)"
                        }
                    }]
            }
        }

        this.rightChart.setOption(this.rightChart_option)
    }

    setData(data) {
        this.data = data;
        this.data.unengaged = this.data.total - this.data.occupy

        this.leftChartUpdate()
        this.rightChartUpdate()
        this.render()
    }




}
