import DINPro_Medium from 'fonts/DINPro_Medium.ttf&&DINPro-Medium'//font-family: 'DINPro-Medium'
import I24fdf15a61aa40c0ac68959c17391c60 from 'img/8697b9cd85504e82b7377d5d7ae43805.png'//应急演练.png
import Iadd90b6066a549deab80b0240f45865d from 'img/5ecf4b0adece4e4197843219aebf4adc.png'//巡检次数.png
import I102d2e1f81a645b8b1c6ef7ee15ad202 from 'img/c7f2aa0a20c94c4e90a1ce08f2354816.png'//事故次数.png
import I26e0b81542224e8089c7e2a80243403c from 'img/a0cfef68fcb54d4083bbd6a81cdec925.png'//安全隐患.png
import Ibdc4c6bfc14a48fea22702bf47d908cd from 'img/fbf0059be82945fb98c7dfa47b340c20.png'//教育培训.png
import I0ce86daafe9f43f8934af8405288489f from 'img/d9bbc36fcede4771ad5abdec407cd472.png'//安全会议.png
import I99a2d34c78a74765af83dc04ad10e7e1 from 'img/0c0b196b73f74722bbec5c0b7db64627.png'//标题icon.png
import I58a2130118f94de3b2a6f9b291397a70 from 'img/8e21449f15134f9a918cbeba66bfd596.png'//标题背景.png
import Ib353ea8e98a240bcbf5758e7cdb20d33 from 'img/7e8fd205fe824bc0a91bb85ed3d85253.png'//背景.png


return class item extends Base {
    constructor(dom, config) {
        super(dom, config);

        this.padding = [0, 0, 0, 0]

        this.theme = {}
        this.opts = {
            menu: {
                chart: {
                    title: "事件统计"
                }
            }
        }
        this.images = {
            background: Ib353ea8e98a240bcbf5758e7cdb20d33,
            titleBackground: I58a2130118f94de3b2a6f9b291397a70,
            titleIcon: I99a2d34c78a74765af83dc04ad10e7e1,
            accident: I102d2e1f81a645b8b1c6ef7ee15ad202,
            polling: Iadd90b6066a549deab80b0240f45865d,
            safe: I0ce86daafe9f43f8934af8405288489f,
            hiddenDanger: I26e0b81542224e8089c7e2a80243403c,
            educate: Ibdc4c6bfc14a48fea22702bf47d908cd,
            manoeuvre: I24fdf15a61aa40c0ac68959c17391c60
        }

        this.data = [
            {
                text: '事故次数',
                num: 34
            },
            {
                text: '发现隐患',
                num: 34
            },
            {
                text: '巡检次数',
                num: 34
            },
            {
                text: '教育培训',
                num: 34
            },
            {
                text: '安全会议',
                num: 34
            },
            {
                text: '应急演习',
                num: 34
            }
        ]

    }

    render(h, data, opts) {
        return (
            <div class="main" style={{ background: `url(${this.images.background})` }}>
                <div class="title" style={{ background: `url(${this.images.titleBackground})` }}>
                    <div class="title_icon" style={{ background: `url(${this.images.titleIcon})` }}></div>
                    <span class="title_text">{opts.menu.chart.title}</span>
                </div>

                <div class="left">
                    <div class="legend" style={{ background: `url(${this.images.accident})` }}>
                        <div class="legend_text">{this.data[0].text}</div>
                        <div class="legend_num">{this.data[0].num}</div>
                    </div>
                    <div class="legend" style={{ background: `url(${this.images.polling})` }}>
                        <div class="legend_text">{this.data[1].text}</div>
                        <div class="legend_num">{this.data[1].num}</div>
                    </div>
                    <div class="safe legend" style={{ background: `url(${this.images.safe})` }}>
                        <div class="legend_text">{this.data[2].text}</div>
                        <div class="legend_num">{this.data[2].num}</div>
                    </div>

                </div>

                <div class="right">
                    <div class="legend" style={{ background: `url(${this.images.hiddenDanger})` }}>
                        <div class="legend_text">{this.data[3].text}</div>
                        <div class="legend_num">{this.data[3].num}</div>
                    </div>
                    <div class="legend" style={{ background: `url(${this.images.educate})` }}>
                        <div class="legend_text">{this.data[4].text}</div>
                        <div class="legend_num">{this.data[4].num}</div>
                    </div>
                    <div class="legend" style={{ background: `url(${this.images.manoeuvre})` }}>
                        <div class="legend_text">{this.data[5].text}</div>
                        <div class="legend_num">{this.data[5].num}</div>
                    </div>
                </div>
            </div>
        )
    }

    setOption(ops) {
        this.opts = ops;
        this.render();
    }

    setData(data) {
        this.data = data;
        this.render();
    }
}
