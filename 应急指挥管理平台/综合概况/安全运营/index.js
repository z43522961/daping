import I3b2fad2259364da69a54b82c05cc4847 from 'img/70b09f5e03f14d6bb8f61543b330a459.png' //数字.png
import I35ba61ac50f1455caa8745b6a3152367 from 'img/8c4f2312021d4558ba5cb3273e915da5.png' //titlebk.png
import I30e46ff479004ee1bb979ee9e6f7942b from 'img/85d54ab5536c4fa18cc7c23da5abfad3.png' //icon.png
import I0c32e2ce7cf048578d1edcb22ac326ff from 'img/d903bd591bf14cfb9335bd5b7c17bd52.png' //编组 3.png

return class item extends Base {
    constructor(dom, config) {
        super(dom, config);

        // 用于控制图表边距，不可删除
        this.padding = [0, 0, 0, 0]

        this.currentData = [],
            this.newData = [],

            this.theme = {}

        this.data = {
            day: 21438
        }

        this.opts = {}
    }

    render(h, data, opts) {
        this.data.day = this.setDay(this.data.day)
        return
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
        this.data = data
        this.render()
    }
}