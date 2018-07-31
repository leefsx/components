import PluginBehavior from '../pluginbehavior.js'
Component({

  behaviors: [PluginBehavior],

  properties: {

  },
  data: {
    layoutstyle:''
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {
    let app=getApp();
    let layoutheight=this.data.param.height;
    if (Number.isInteger(layoutheight)){
      layoutheight = app.px2rpx(layoutheight)
    }
    this.setData({ layoutstyle: `height:${layoutheight}`});
  },
  methods: {

  }

})