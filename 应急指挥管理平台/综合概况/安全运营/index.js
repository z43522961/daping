import I91b5efe5ded242ce849d584196d906b7 from 'img/384bab838ec54b06946279d8b2040395.png'//卡片.png
import I35ba61ac50f1455caa8745b6a3152367 from 'img/8c4f2312021d4558ba5cb3273e915da5.png'//titlebk.png
import I30e46ff479004ee1bb979ee9e6f7942b from 'img/85d54ab5536c4fa18cc7c23da5abfad3.png'//icon.png
import I0c32e2ce7cf048578d1edcb22ac326ff from 'img/d903bd591bf14cfb9335bd5b7c17bd52.png'//编组 3.png



return class item extends Base {
    constructor(dom, config) {
        super(dom, config);

        // 用于控制图表边距，不可删除
        this.padding = [0, 0, 0, 0]

        this.sourceData = []

        this.currentData =[]
        this.newData = []

        this.theme = {}

        this.data = {
            day: 21438
        }

        this.opts = {}
    }

    render(h, data, opts) {

        let formatterArr = [...this.data.day]
        let numList = formatterArr.filter(x => !isNaN(x))

        this.currentData = this.currentData;
        this.newData = this.newData
        return (
            <div class="main" style={{ background: `url(${this.img.I0c32e2ce7cf048578d1edcb22ac326ff})` }}>
                <img class="icon1" src={this.img.I30e46ff479004ee1bb979ee9e6f7942b}></img>
                <div class="title" style={{ background: `url(${this.img.I35ba61ac50f1455caa8745b6a3152367})` }}>
                    安全运营 / 天
                </div>
                <div class="card_main">
                    {
                        numList.map((data, index) => {
                            const currentNumber = this.currentData[index] ||0;
                            const newNumber = this.newData[index] ||0
                            return (
                                <div class="card_contain">
                                    <div class={['card',currentNumber !== newNumber ? 'go' : null]} >
                                        <div class="font">
                                            <div class="before" style={{ background: `url(${I91b5efe5ded242ce849d584196d906b7})` }}>{currentNumber}</div>
                                            <div class="after" style={{ background: `url(${I91b5efe5ded242ce849d584196d906b7})` }}>{currentNumber}</div>
                                        </div>
                                        <div class="back">
                                            <div class="before" style={{ background: `url(${I91b5efe5ded242ce849d584196d906b7})` }}>{newNumber}</div>
                                            <div class="after" style={{ background: `url(${I91b5efe5ded242ce849d584196d906b7})` }}>{newNumber}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    setDay(data) {
        let str = "";
        if (data < 10000) {
            let temp = data;

            let length = 5;
            while (temp != 0) {
                length--;
                temp = Math.floor(temp / 10)
            }

            for (let i = 0; i < length; i++) {
                str += "0";
            }
        }

        return str + data
    }

    setData(data) {
        console.log(data)
        this.data.day = this.setDay(data.day)

        this.handleFlip()

        this.render()
    }

    handleFlip() {
        this.sourceData = [...this.data.day]

        this.newData = [...this.data.day]
        setTimeout(()=>{
            this.currentData = this.newData

            this.render()
        }, 700)
        this.render()
    }

    mounted() {
        this.handleFlip()
    }

    created() {
        this.data.day = this.setDay(this.data.day)
    }
}
