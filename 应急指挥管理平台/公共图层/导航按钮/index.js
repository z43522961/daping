import SourceHanSansCN_Medium from 'fonts/SourceHanSansCN_Medium.otf&&SourceHanSansCN-Medium'//font-family: 'SourceHanSansCN-Medium'
import I7411c3dc3c9c49d298b2b0e9f8190787 from 'img/b7634e5510454465a04ee3002d38edfd.png'//被选中背景.png
import Ie1e816ec5b9c4c09839a0388bbd36e05 from 'img/5960544f0ac24644a167ebeaabbafae3.png'//导航背景.png

return class item extends Base {
    constructor(dom, config) {
        super(dom, config);

        this.padding = [0, 0, 0, 0]

        this.theme = {

        }

        this.opts = {
            menu: {
                chart: {
                    title: "综合概况",
                    switch: false
                }
            }
        }

        this.currentPage = 0;

        this.images = {
            selected: I7411c3dc3c9c49d298b2b0e9f8190787,
            unselected: Ie1e816ec5b9c4c09839a0388bbd36e05
        }

    }

    render(h, data, opts) {
        return (
            <div class="main" name="btn1" onclick={(e) => {
                console.log(e)
                if (e.target.className === "main") {
                    let allBtns = document.querySelectorAll('div[name=btn1]')
                    allBtns.forEach(x => {
                        x.style.background = `url(${this.images.unselected})`
                    })

                    e.target.style.background = `url(${this.images.selected})`
                } else {
                    let allBtns = document.querySelectorAll('div[name=btn1]')
                    allBtns.forEach(x => {
                        x.style.background = `url(${this.images.unselected})`
                    })

                    e.path[1].style.background = `url(${this.images.selected})`
                }



            }} style={{ background: `url(${this.opts.menu.chart.switch?this.images.selected:this.images.unselected})` }}>
                <div class="title">{this.opts.menu.chart.title}</div>
            </div>
        )
    }

    setOption(opts) {
        this.opts = opts;
        this.render()
    }
}
