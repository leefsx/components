import PluginBehavior from '../pluginbehavior.js'
Component({

  behaviors: [PluginBehavior],

  properties: {

  },
  data: {
    richtext: '',
    textstyle:''
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {console.log(22)
    let app=getApp()
    this.formatText()
    let style=this.data.param.style;
    let stylestr='';
    for (let k in style) {
      let val = style[k]
      if (Number.isInteger(val) && k!='line-height') {
        val = app.px2rpx(val)
      } else {
        if (k == 'background-image') val = `url(${val})`;
      }
      stylestr += `${k}:${val};`;
    }
    this.setData({ textstyle: stylestr})
  },
  methods: {
    formatText() {
      this.setData({
        richtext: this.data.param.message.replace(/ /g, '\xa0'),
      })
    },
    onLoad(){
      console.log('title onload')
      let page = this._getPage();
      page.onShareAppMessage = this.onShareAppMessage.bind(this)
    },
    onShareAppMessage: function () {
      return {
        title: `${this.data.layerid}`
      }
    }

  }

})