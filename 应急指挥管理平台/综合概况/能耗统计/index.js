import DINPro_Medium from 'fonts/DINPro_Medium.ttf&&DINPro-Medium' //font-family: 'DINPro-Medium'
import Ia59da2263d504afaa0d136756144b263 from 'img/f1a1d5b5beae465d9c3a0c2bb7081831.png' //标题背景.png
import I11b494c6a4b84f16bad0f9f0179bdcda from 'img/54a2429fdf904ddf9c7bf909cec2b2f6.png' //标题icon.png
import I4c47028c71dc4fddb886c2f39eb30ceb from 'img/6f553bb488a14b66ad21eac2ee1e04b2.png' //下.png
import I8610134630f64b70a6170656c86310d4 from 'img/557e78dd5cab4a99be203fa8a9534c6f.png' //上.png
import I86d3aa4e9e32406faf5fb78656ab885c from 'img/5a92d7c840044abc81ffefd24e905475.png' //背景.png


return class item extends Base {
    constructor(dom, config) {
        super(dom, config);

        this.padding = [0, 0, 0, 0]

        this.theme = {}

        this.opts = {
            menu: {
                chart: {
                    title: "能耗统计"
                }
            }
        }

        this.data = {
            power: {
                num: "4258.7"
            },
            water: {
                num: "1632.5"
            }
        }

    }

    render(h, data, opts) {
        return
    }

}