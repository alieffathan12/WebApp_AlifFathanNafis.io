// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/ColorRecords.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"dijitInline dijitColorPalette" role\x3d"grid"\x3e\r\n\t\t\x3ctable data-dojo-attach-point\x3d"paletteTableNode" class\x3d"dijitPaletteTable" cellspacing\x3d"0" cellpadding\x3d"0" role\x3d"presentation"\x3e\r\n\t\t\t\x3ctbody data-dojo-attach-point\x3d"gridNode"\x3e\r\n\t\t\t\t\x3ctr tabindex\x3d"0" role\x3d"row" data-dojo-attach-point\x3d"container"\x3e\r\n\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/html dojo/on dojo/query dojo/_base/Color dojo/cookie dojo/text!./templates/ColorRecords.html dijit/a11yclick".split(" "),function(l,m,n,p,q,r,e,t,k,g,h,u,v){return m([n,p,q,l],{templateString:u,baseClass:"jimu-color-records",declaredClass:"jimu.dijit.ColorRecords",uid:"",recordsLength:10,colorList:null,postCreate:function(){this.inherited(arguments);this.colorList=
[];this._createCoustomRecord();""===this.uid&&(this.uid="wab_colorRecords");this.refresh()},push:function(a){this.colorList.unshift(a);this.colorList.length>this.recordsLength&&this.colorList.pop();this._setColors()},selecteColor:function(a){a=new g(a);for(var b=null,c=k("td",this.domNode),d=0,f=c.length;d<f;d++)e.removeClass(c[d],"dijitPaletteCellSelected");d=0;for(f=c.length;d<f;d++)if(a.toString()===e.getAttr(c[d],"title")){b=c[d];break}b&&(e.addClass(b,"dijitPaletteCellSelected"),this.onChoose(a))},
refresh:function(){this._getCookie(this.uid);this._setColors()},_setColors:function(){for(var a=0;a<this.recordsLength;a++){var b=this["record"+a];if(b&&this.colorList[a]&&this.colorList[a].toString){var c=this.colorList[a].toString();e.setAttr(b,"title",c);b=this._findImg(b);e.setStyle(b,"background-color",c);e.setAttr(b,"alt",c);e.setAttr(b,"title",c)}}this._setCookie(this.uid)},_createCoustomRecord:function(){for(var a=0;a<this.recordsLength;a++){this["record"+a]=e.create("td",{"class":"dijitPaletteCell",
tabindex:a,title:"",role:"gridcell"},this.container);var b=e.create("span",{"class":"dijitInline dijitPaletteImg"},this["record"+a]);e.create("img",{"class":"dijitColorPaletteSwatch",src:require.toUrl("dojo/resources/blank.gif"),style:"background-color: #ffffff"},b)}this.own(t(this.gridNode,v,r.hitch(this,this.onRecordClick)))},onRecordClick:function(a){for(var b=a.target;"TD"!==b.tagName;){if(!b.parentNode||b===this.gridNode)return;b=b.parentNode}b=e.getAttr(b,"title");b=(new g(b)).toString();this.onChoose(b);
a.stopPropagation();a.preventDefault()},onChoose:function(a){this.emit("choose",a)},_findImg:function(a){var b=null;return a.nodeName&&"IMG"===a.nodeName.toUpperCase()?a:b=k(".dijitColorPaletteSwatch",a)[0]},_setCookie:function(a){for(var b=[],c=0,d=this.recordsLength;c<d;c++){var f=this.colorList[c];f&&f.toString&&(b[c]=f.toString())}this._cleanCookie(a);try{var w=JSON.stringify(b);h(a,w,{expires:1E3,path:"/"})}catch(x){console.error("ColorRecords: cookieList JSON.stringify error."+x.stack)}},_getCookie:function(a){a=
h(a);if("undefined"!==typeof a)try{var b=JSON.parse(a);if(b&&"undefined"!==typeof b.length){a=0;for(var c=this.recordsLength;a<c;a++){var d=b[a];d&&d.toString&&(this.colorList[a]=new g(d.toString()))}}}catch(f){console.error("ColorRecords: cookieList JSON.parse error."+f.stack)}},_cleanCookie:function(a){h(a,null,{expires:-1})}})});