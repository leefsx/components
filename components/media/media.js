import PluginBehavior from '../pluginbehavior.js'
Component({

  behaviors: [PluginBehavior],

  properties: {

  },
  data: {
    mediastyle:''
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {
    let app=getApp();
    let style = this.data.param;
    let keys = ['border-radius', 'opacity','text-align']
    let stylestr = '';
    for (let k of keys) {
      let val = style[k]
      if (Number.isInteger(val) && k != 'opacity') {
        val = app.px2rpx(val)
      } else {
        if (k == 'opacity') val = val/100;;
      }
      stylestr += `${k}:${val};`;
    }
    this.setData({ mediastyle: stylestr })
  },
  methods: {
    
  }

})