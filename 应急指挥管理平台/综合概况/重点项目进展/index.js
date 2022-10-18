import jqueryjs from 'lib/jquery'
import I618a8e23abf44ecd92d03a93faa327a2 from 'img/434a00745f6f413f89f472dd960d5aba.png'//重点项目进展背景.png
import I9af7d41a599e457da59c7cc94f52cd57 from 'img/e3cd6c88ca924a4f8a4b3a9e308c9e9d.png'//重点项目进展_图表选中背景.png
import I05f412191e774839ae37c05fdbd257e8 from 'img/413f2cec29ac4ed285ec655cd2f3c888.png'//重点项目进展_图表背景.png
import I5d525619ed2a4c6180084e8d6091da84 from 'img/7fbc3558cb7f47f7a007c02f87403852.png'//重点项目进展_标题背景.png
import I99a2d34c78a74765af83dc04ad10e7e1 from 'img/0c0b196b73f74722bbec5c0b7db64627.png'//重点项目进展_标题icon.png
import I0d78a6b29a2149119381aad821032dbd from 'img/759995a3ea004a34a68de409f1368b05.png'//下一页.png
import I8a5f07a8f8c84afbab8766da7bfc71e2 from 'img/530b878106494a2b9e0303b5756237bd.png'//上一页.png



return class item extends Base {
    constructor(dom, config) {
        super(dom, config);

        this.padding = [0, 0, 0, 0]

        this.theme = {}

        this.paged = {
            currentPage: 1,
            totalPage: 1,
            currentDatas: [],
        }

        this.currentProject = null

        this.data = [
            {
                project: "创新项目1",
                functionary: "李子明",
                timeLimit: "一年半",
                site: "三号场馆"
            },
            {
                project: "创新项目2",
                functionary: "李子明",
                timeLimit: "一年半",
                site: "三号场馆"
            },
            {
                project: "创新项目3",
                functionary: "李子明",
                timeLimit: "一年半",
                site: "三号场馆"
            },
            {
                project: "创新项目4",
                functionary: "李子明",
                timeLimit: "一年半",
                site: "三号场馆"
            },
            {
                project: "创新项目5",
                functionary: "李子明",
                timeLimit: "一年半",
                site: "三号场馆"
            },
            {
                project: "创新项目6",
                functionary: "李子明",
                timeLimit: "一年半",
                site: "三号场馆"
            },
            {
                project: "创新项目7",
                functionary: "李子明",
                timeLimit: "一年半",
                site: "三号场馆"
            }
        ]

        this.opts = {
            menu: {
                chart: {
                    title: "重点项目进展"
                }
            }
        }

    }

    render(h, data, opts) {
        this.initPaged(this.paged, this.data)
        return (
            <div class="main" style={{ background: `url(${I618a8e23abf44ecd92d03a93faa327a2})` }}>
                <div class="title" style={{ background: `url(${I5d525619ed2a4c6180084e8d6091da84})` }}>
                    <div class="title_icon" style={{ background: `url(${I99a2d34c78a74765af83dc04ad10e7e1})` }}></div>
                    <span class="title_text">{this.opts.menu.chart.title}</span>
                </div>
                <div class="table">
                    <div class="table_header" id="test" style={{ background: `url(${I05f412191e774839ae37c05fdbd257e8})` }}>
                        <span>项目名称</span>
                        <span>负责人</span>
                        <span>工期</span>
                        <span>施工地点</span>
                    </div>
                    <div class="table_body" id="table_body">
                        {
                            this.paged.currentDatas.map(data => {
                                const style = {
                                    background: `url(${I05f412191e774839ae37c05fdbd257e8})`,
                                    color: '#FFFFFF'
                                }
                                if (data.project === this.currentProject) {
                                    style.color = '#FFF66F'
                                    style.background = `url(${I9af7d41a599e457da59c7cc94f52cd57})`
                                }

                                return (
                                    <div class="t_content" onmouseover={(e) => {
                                        this.currentProject = data.project
                                        this.render()
                                    }} onmouseout={(e) => { this.currentProject = null; this.render() }} style={style}>
                                        <span>{data.project}</span>
                                        <span>{data.functionary}</span>
                                        <span>{data.timeLimit}</span>
                                        <span>{data.site}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div class="paging" >
                    <div ref="pre" style={{
                        width: '21px',
                        height: '21px',
                        background: 'rgba(255,255,255,0.2)',
                        'border-radius': '2px',
                        display: 'flex',
                        'align-items': 'center'
                    }}>
                        <div style={{
                            background: `url(${I8a5f07a8f8c84afbab8766da7bfc71e2})`,
                            width: '9px',
                            height: '12px',
                            opacity: 1,
                            margin: 'auto auto',
                        }}></div>
                    </div>

                    <div class="skip">
                        <input type='number' onkeydown={(e) => { this.skipPage(e) }} value={this.paged.currentPage} />
                        <span>&nbsp;&nbsp;/&nbsp;&nbsp;{this.paged.totalPage}</span>
                    </div>

                    <div ref="next" style={{
                        width: '21px',
                        height: '21px',
                        background: 'rgba(255,255,255,0.2)',
                        'border-radius': '2px',
                        display: 'flex',
                        'align-items': 'center'
                    }}>
                        <div style={{
                            background: `url(${I0d78a6b29a2149119381aad821032dbd})`,
                            width: '9px',
                            height: '12px',
                            opacity: 1,
                            margin: 'auto auto',
                        }}></div>
                    </div>
                </div>
            </div>
        )
    }

    /**
     *
     */
    initPaged(paged, totalData) {

        let pageSize = 3;

        if (totalData.length % pageSize === 0) {
            paged.totalPage = totalData.length / pageSize;
        } else {
            paged.totalPage = Math.floor(totalData.length / pageSize) + 1;
        }

        if (paged.currentPage >= paged.totalPage) {
            paged.currentPage = paged.totalPage;
        }

        if (paged.currentPage < 1) {
            paged.currentPage = 1
        }

        paged.currentDatas = totalData.slice((paged.currentPage - 1) * pageSize, paged.currentPage * pageSize)

    }

    pageUp() {
        this.paged.currentPage++;

        this.render()
    }

    pageDown() {

        this.paged.currentPage--;

        this.render()
    }

    mounted() {
        let preButton = this.instance.$refs.pre;
        preButton.addEventListener("click", () => {
            this.pageDown();
        });


        let nextButton = this.instance.$refs.next;
        nextButton.addEventListener("click", () => {
            this.pageUp();
        })

    }

    // mouseIn(e) {
    //   if (e.target.className === 't_content')
    //     e.target.style.background = `url(${I9af7d41a599e457da59c7cc94f52cd57})`
    //   else {
    //     e.path[1].style.background = `url(${I9af7d41a599e457da59c7cc94f52cd57})`
    //   }

    // }

    // mouseOut(e) {
    //   if (e.target.className === 't_content')
    //     e.target.style.background = `url(${I05f412191e774839ae37c05fdbd257e8})`
    //   else {
    //     e.path[1].style.background = `url(${I05f412191e774839ae37c05fdbd257e8})`
    //   }

    // }

    skipPage(e) {
        if (e.keyCode === 13) {
            this.paged.currentPage = e.target.value
            this.render()
        }
    }

    setData(data) {
        this.data = data;
        this.render();
    }
}
