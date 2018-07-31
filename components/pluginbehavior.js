module.exports = Behavior({
  properties: {
    param: Object,
    layerid: String
  },
  data: {
    $parent: null
  },
  methods: {
    onLoad(options){},
    onShow(){},
    onHide() {},
    onUnload(){},
    onReady(){},
    setWxPageObj(pageobj){
      this.data.$parent=pageobj;
    },
    _getPage(){
      return this.data.$parent;
    },
    viewtap() {
      let app = getApp()
      var modclick = this.data.param.modclick;
      app.moduleBindTap(modclick);
    }
  }
})