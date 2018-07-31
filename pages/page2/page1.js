import title from '../../plugins/title/title.js';
import media from '../../plugins/media/media.js';
var app = getApp();
var modrel={'title':title,'media':media};
var plugins={"layerCFE0FEB89FC466EC7A94ECAEDCB31F55":{"id":"layerCFE0FEB89FC466EC7A94ECAEDCB31F55","pid":"1","father_id":"","type":"title","left":0,"top":0,"width":100,"height":"auto","zindex":0,"pageid":"1","globalstyle":{"background-image":"none","background-color":"transparent","background-repeat":"repeat","background-position":"top left","border-color":"transparent","border-style":"none","border-width":0,"border-radius":0},"childprop":{"message":"Text1 Text1","style":{"color":"#666","font-size":22,"font-weight":"normal","font-style":"normal","text-decoration":"none","text-align":"left","line-height":1.4,"margin":0,"padding":0},"modclick":{"type":"none","param":{"type":"","value":"","pagevalue":"","idsvalue":"","title":""}}}},"layerDE4A4BDDEF4E30F9F7BFC3EB1C95DBF9":{"id":"layerDE4A4BDDEF4E30F9F7BFC3EB1C95DBF9","pid":"1","father_id":"","type":"title","left":0,"top":0,"width":100,"height":"auto","zindex":1,"pageid":"1","globalstyle":{"background-image":"none","background-color":"transparent","background-repeat":"repeat","background-position":"top left","border-color":"transparent","border-style":"none","border-width":0,"border-radius":0},"childprop":{"message":"Text1 Text1","style":{"color":"#666","font-size":21,"font-weight":"normal","font-style":"normal","text-decoration":"none","text-align":"left","line-height":1.4,"margin":0,"padding":0},"modclick":{"type":"none","param":{"type":"","value":""}}}},"layer6A445EF9DA19135859602A9EEDEF7FD7":{"id":"layer6A445EF9DA19135859602A9EEDEF7FD7","pid":"1","father_id":"","type":"media","left":0,"top":0,"width":375,"height":280,"zindex":2,"pageid":"1","globalstyle":{"background-image":"none","background-color":"transparent","background-repeat":"repeat","background-position":"top left","border-color":"transparent","border-style":"none","border-width":0,"border-radius":0},"childprop":{"src":"http:\/\/sitestar2.wopop.com\/upload\/0aab10_fafa5efeaf3cbe3b23b2748d13e629a1_2a4i.JPG","text-align":"left","opacity":100,"border-radius":0,"modclick":{"type":"none","param":{"type":"","value":""}}}}};
var pageconf={
  data: {
    plugins:plugins,
	pageid: 'page1/page1',
	showBar: false,
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
  },
  viewtap: function(e){
    var layerid=e.currentTarget.dataset.layerid;
    var plugindata=this.data.plugins[layerid];
    if(plugindata){
      var modclick=plugindata.childprop.modclick;
      app.moduleBindTap(modclick);
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
  formReset: function(form){
	if (!Array.isArray(form)) return false;
	form.forEach(c => {
	  let _default_ = null;
	  switch (typeof c.reval) {
		case 'string': _default_ = '';break;
		case 'number': _default_ = -1;break;
		case 'object':
		  _default_ = Array.isArray(c.reval)?[]:{};
		  break;
	  }
	  let newobj = {[`${c.id}._value_`]: _default_};
	  // for 'chooseImage'
	  const pluginobj = this.data[c.id]||{};
      if (pluginobj.isImageFile === true) {
		newobj[`${c.id}.showClear`] = false;
		newobj[`${c.id}.inptext`] = pluginobj.param.inpval
      }
	  this.setData(newobj)
	})
  },
  formSubmit: function(e){
    // 表单验证
	const frmid = e.currentTarget.dataset.id;
	let formId = e.detail.formId;
	if (!/^[a-z0-9]+$/i.test(frmid)) return false;
	let errln = 0, formmap = [], uploading = [];
	const frmdata = e.detail.value;
	const image = '/static/icons/warning.png';
	if (! Object.keys(frmdata).length) return false;
	for (let k in frmdata) {
	  const dataobj = this.data[k];
	  formmap.push({id: k,reval: dataobj._value_});
	  if (dataobj.isUploading === true) uploading.push(k);
      if (true != dataobj.param.required||false) continue;
      if (frmdata[k].length == 0) {
        errln++;
        let newobj = {[`${k}.haswarn`]: true};
        this.setData(newobj)
      }
	}
	if (errln > 0) wx.showToast({title: '请先完善表单数据',image})
	else if (uploading.length > 0) {
      wx.showToast({title: '正在传送文件，请稍后再试',icon: 'none'})
	} else {
	  const self = this;
	  const submitips = e.detail.target.dataset.tips;
	  wx.showLoading({title: '处理中',mask: true});
	  app.apiRequest('form_submit', 'index', {
		method: 'POST',
		data: {frmid, frmdata: JSON.stringify(frmdata), formId},
		success (res){
		  wx.hideLoading();
		  if (res.data.result == 'ERROR') {
			wx.showToast({title: res.data.errmsg,image});
			return false
		  }
		  wx.showToast({
			title: submitips,
			icon: 'success',
			complete (){
			  self.formReset(formmap)
			}
		  })
		},
		fail (exp){
		  wx.showToast({
			title: exp.errMsg,
			icon: 'none',
			duration: 2500,
			complete (){
				wx.hideLoading()
			}
		  })
		},
	  })
	}
  },
	onShareAppMessage: function(res){}
}
for(var modid in plugins){
  (function(){
    var moddata=plugins[modid];
    var cls=modrel[moddata.type];
	if(cls){
		cls().install(pageconf, {scope:modid,
		static:{
		  param:moddata.childprop,
		  layerid: modid
		}
		})
	}
  })(modid)
}
Page(pageconf)


