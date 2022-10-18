import SourceHanSansCN_Medium from 'fonts/SourceHanSansCN_Medium.otf&&SourceHanSansCN-Medium'//font-family: 'SourceHanSansCN-Medium'


return class item extends Base {
    constructor(dom, config) {
        super(dom, config);

        this.padding = [0, 0, 0, 0]

        this.theme = {}

        this.opts = {
            "menu": {
                "chart": {
                    "width": 476,
                    "height": 50,
                    "fontSize": 38,
                    "fontWeight": 500,
                    "text": "景区应急指挥管理平台"
                }
            }
        }

    }

    render(h, data, opts) {
        return (<div class="main" style={{
            width: opts.menu.chart.width + "px",
            height: opts.menu.chart.height + "px",
            "font-size": opts.menu.chart.fontSize + "px",
            "font-weight": opts.menu.chart.fontWeight
        }}>
            {opts.menu.chart.text}
        </div>)
    }

}
