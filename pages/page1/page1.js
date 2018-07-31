var app = getApp();
var plugins = [{ "id": "layerCFE0FEB89FC466EC7A94ECAEDCB31F55", "pid": "1", "father_id": "", "type": "title", "left": 0, "top": 0, "width": 100, "height": "auto", "zindex": 0, "pageid": "1", "globalstyle": { "background-image": "none", "background-color": "transparent", "background-repeat": "repeat", "background-position": "top left", "border-color": "transparent", "border-style": "none", "border-width": 0, "border-radius": 0 }, "childprop": { "message": "我是任臻", "style": { "color": "#666", "font-size": 22, "font-weight": "normal", "font-style": "normal", "text-decoration": "none", "text-align": "left", "line-height": 1.4, "margin": 0, "padding": 0 }, "modclick": { "type": "none", "param": { "type": "", "value": "", "pagevalue": "", "idsvalue": "", "title": "" } } } }, { "id": "layer0A9C46EB720991C63FB2DF63C06B8A75", "pid": "1", "father_id": "", "type": "title", "left": 0, "top": 0, "width": 100, "height": "auto", "zindex": 1, "pageid": "1", "globalstyle": { "background-image": "http://sitestar2.wopop.com/upload/new07.jpg", "background-color": "transparent", "background-repeat": "repeat", "background-position": "top left", "border-color": "transparent", "border-style": "none", "border-width": 0, "border-radius": 0 }, "childprop": { "message": "测试改变22", "style": { "color": "#666", "font-size": 23, "font-weight": "normal", "font-style": "normal", "text-decoration": "none", "text-align": "left", "line-height": 1.4, "margin": 0, "padding": 0 }, "modclick": { "type": "func", "param": { "type": "callto", "value": "15921422715", "pagevalue": "", "idsvalue": "", "title": "" } } } }, { "id": "layerF20935F9A123E3F6A8111B74E217DA68", "pid": "1", "father_id": "layer4ABAF9847E73E3816B9E46BB87688BF6", "type": "title", "left": 71, "top": 26, "width": 100, "height": 50, "zindex": 1, "globalstyle": { "background-image": "none", "background-color": "transparent", "background-repeat": "repeat", "background-position": "top left", "border-color": "transparent", "border-style": "none", "border-width": 0, "border-radius": 0 }, "childprop": { "message": "沙发胜多负少发", "style": { "color": "#666", "font-size": 12, "font-weight": "normal", "font-style": "normal", "text-decoration": "none", "text-align": "left", "line-height": 1.2, "margin": 0, "padding": 0 }, "modclick": { "type": "none", "param": { "type": "", "value": "" } } } }, { "id": "layer869BF1E83C2C75CD07B89F4061EE2EF0", "pid": "1", "father_id": "layer4ABAF9847E73E3816B9E46BB87688BF6", "type": "media", "left": 227, "top": 16, "width": 100, "height": 76, "zindex": 2, "globalstyle": { "background-image": "none", "background-color": "transparent", "background-repeat": "repeat", "background-position": "top left", "border-color": "transparent", "border-style": "none", "border-width": 0, "border-radius": 0 }, "childprop": { "src": "http://sitestar2.wopop.com/upload/0aab10_fafa5efeaf3cbe3b23b2748d13e629a1_2a4i.JPG", "text-align": "left", "opacity": 100, "border-radius": 0, "modclick": { "type": "none", "param": { "type": "", "value": "" } } } }, { "id": "layerDE4A4BDDEF4E30F9F7BFC3EB1C95DBF9", "pid": "1", "father_id": "", "type": "title", "left": 0, "top": 0, "width": 100, "height": "auto", "zindex": 2, "pageid": "1", "globalstyle": { "background-image": "none", "background-color": "#ff00ff", "background-repeat": "repeat", "background-position": "top left", "border-color": "transparent", "border-style": "none", "border-width": 0, "border-radius": 0 }, "childprop": { "message": "Text1 Text1", "style": { "color": "#666", "font-size": 12, "font-weight": "normal", "font-style": "normal", "text-decoration": "none", "text-align": "center", "line-height": 1.4, "margin": 0, "padding": 0 }, "modclick": { "type": "none", "param": { "type": "", "value": "", "pagevalue": "", "idsvalue": "", "title": "" } } } }, { "id": "layer59B9B13386372649E8646425BBE31B71", "pid": "1", "father_id": "", "type": "media", "left": 0, "top": 0, "width": 375, "height": 285, "zindex": 3, "pageid": "1", "globalstyle": { "background-image": "none", "background-color": "transparent", "background-repeat": "repeat", "background-position": "top left", "border-color": "transparent", "border-style": "none", "border-width": 0, "border-radius": 0 }, "childprop": { "src": "http://sitestar2.wopop.com/upload/new015.jpg", "text-align": "left", "opacity": 43, "border-radius": 50, "modclick": { "type": "none", "param": { "type": "", "value": "", "pagevalue": "", "idsvalue": "", "title": "" } } } }, { "id": "layer4ABAF9847E73E3816B9E46BB87688BF6", "pid": "1", "father_id": "", "type": "freelayout", "left": 0, "top": 0, "width": 100, "height": "auto", "zindex": 4, "pageid": "1", "globalstyle": { "background-image": "none", "background-color": "#d9d9d9", "background-repeat": "repeat", "background-position": "top left", "border-color": "transparent", "border-style": "none", "border-width": 0, "border-radius": 0 }, "childprop": { "height": 140, "modclick": { "type": "none", "param": { "type": "", "value": "" } } } }];

var pageconf={
  data: {
  plugins:plugins,
	pageid: 'page1/page1',
	showBar: false,
  plugindatas:[],
	tabs: {}
  },
  onLoad: function(o){
    let curpage = this.data.pageid;
    let tabs = getApp().globalData.config.tabBar || {};
    if (tabs.list) {
      this.setData({tabs});
      let _has_ = tabs.list.findIndex(c => {
		  const lnkid = c.pagePath;
        return lnkid == curpage
      });
      this.setData({
        showBar: _has_ > -1 ? true : false
      })
    }

    this.generatePluginData();
    for (let p of this.data.plugins) {
      let comp = this.selectComponent("#comp_" + p.id);
        if (comp) {
         comp.setWxPageObj(this);
         comp.onLoad(o)
        }
    }
    // wx.showLoading({
    //   title: '加载模块中...',
    // })
    // let that=this
    // app.apiRequest('weixin', 'getmodules', {
    //     data: {},
    //     success(res) {
    //       if (!res.data.errcode) {
    //         if (res.data.plugins){
    //           console.log(JSON.stringify(res.data.plugins))
    //           that.setData({ "plugins": res.data.plugins })
    //           that.generatePluginData()
    //         } 
    //         console.log(res.data.plugins)
    //         for (let p of that.data.plugins) {
    //           let comp = that.selectComponent("#comp_" + p.id);
    //           if (comp) {
    //             comp.setWxPageObj(that);
    //             comp.onLoad(o)
    //           }
    //         }
    //       }
    //       wx.hideLoading()
    //     }
    // })

    
    
  },
  onShow(){
    for (let p of this.data.plugins) {
      let comp = this.selectComponent("#comp_" + p.id);
      if (comp) comp.onShow()
    }
  },
  switchTab: function(e){
      let url = e.currentTarget.dataset.url;
      let tab = e.currentTarget.dataset.tab;
      if(tab.type=='func'){
        getApp().moduleBindTap(tab)
      }else{
        getApp().turnToPage(url, true)
      }
  },
  generatePluginData(){
    let app=getApp();
    let plugins=this.data.plugins;
    let rootplugins=[]
    let hasparentplugins=[]
    let layeridpluginrel={}
    for(let ori_item of plugins){
      let item={...ori_item}
      let globalstyle={...item.globalstyle};
      let stylestr=''
      if (!globalstyle.height){
        globalstyle.height=item.height;
      }
      for (let k in globalstyle){
        let val = globalstyle[k]
        if (Number.isInteger(val)){
          val = app.px2rpx(val)
        }else{
          if(k=='background-image') val=`url(${val})`;
        }
        stylestr+=`${k}:${val};`;
      }
      item.globalstylestr = stylestr;
      if(item.father_id!=''){
        hasparentplugins.push(item)
      }else{
        item._children=[]
        rootplugins.push(item)
        layeridpluginrel[item.id] = item
      }
    }
    for (let p of hasparentplugins){
      let parentitem=layeridpluginrel[p.father_id]
      if (parentitem){
        if (parentitem.type=='freelayout'){
          let stylestr = p.globalstylestr;
          stylestr+="position:absolute;"
          let params=['left','top','width']
          for (let k of params){
            let val=p[k]
            if (Number.isInteger(val)) {
              val = app.px2rpx(val)
            } 
            stylestr += `${k}:${val};`;
          }
          p.globalstylestr = stylestr;
        }
        parentitem._children.push(p)
      }
    }
    this.setData({plugindatas: rootplugins})
    console.log('123',this.data.plugindatas)
  },
  onHide() {
    for (let p of this.data.plugins) {
      let comp = this.selectComponent("#comp_" + p.id);
      if (comp) comp.onHide()
    }
  },
  onUnload() {
    for (let p of this.data.plugins) {
      let comp = this.selectComponent("#comp_" + p.id);
      if (comp) comp.onUnload()
    }
  },
  onReady() {
    for (let p of this.data.plugins) {
      let comp = this.selectComponent("#comp_" + p.id);
      if (comp) comp.onReady()
    }
  },

	onShareAppMessage: function(res){}
}

Page(pageconf)


