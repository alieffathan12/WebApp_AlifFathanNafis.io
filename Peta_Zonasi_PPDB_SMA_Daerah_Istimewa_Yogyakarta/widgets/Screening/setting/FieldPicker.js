// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Screening/setting/FieldPicker.html":'\x3cdiv style\x3d"padding-right: 20px;"\x3e\r\n  \x3cfieldset class\x3d"esriCTFieldSet esriCTDownloadTabFieldSet"\x3e\r\n    \x3clegend class\x3d"esriCTFieldSetLegend"\x3e${nls.analysisTab.addFieldsPopupTitle}\x3c/legend\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"tableArea" class\x3d"esriCTLayerFieldSelector esriCTReportSettingsContainer"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"btnAddField" class\x3d"esriCTBtnAddSection"\x3e\r\n        \x3cspan class\x3d"esriCTBtnAddIcon"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"esriCTBtnAddLabel" data-dojo-attach-point\x3d"addFieldLabel"\x3e\r\n          ${nls.analysisTab.addFieldsLabel}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTGroupByFieldContainer"\x3e\r\n        \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"groupByFieldCheckBox"\r\n          class\x3d"esriCTGroupByFieldCheckBox" checked\x3d"true"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTGroupByFieldColumnLabel"\x3e\r\n          ${nls.analysisTab.allowGroupingLabel}\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTHint"\x3e${nls.analysisTab.groupingHintDescription}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTHidden esriCTNoLayersOrFieldsForAnalysisLabel" data-dojo-attach-point\x3d"lblNoValidFields"\x3e\r\n        ${nls.analysisTab.noValidFieldsForAnalysis}\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"fieldTable"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/fieldset\x3e\r\n  \x3cfieldset class\x3d"esriCTFieldSet esriCTDownloadTabFieldSet"\x3e\r\n    \x3clegend class\x3d"esriCTFieldSetLegend"\x3e${nls.analysisTab.sortingSettingsLegend}\x3c/legend\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"sortFieldSettingsNode"\x3e\r\n      \x3cdiv class\x3d"esriCTRadioBtnContainer esriCTReportSettingsContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTRadioBtn"\x3e\r\n          \x3cinput data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group: \'g1\'" type\x3d"radio" name\x3d"jimuradiobtn"\r\n            data-dojo-attach-point\x3d"ascRadioBtn" aria-label\x3d"${nls.analysisTab.ascendingLabel}"\x3e\r\n          \x3clabel class\x3d"esriCTRadioLabel" for\x3d"ascRadio"\x3e\r\n            ${nls.analysisTab.ascendingLabel}\r\n          \x3c/label\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTRadioBtn"\x3e\r\n          \x3cinput data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group: \'g1\'" type\x3d"radio" name\x3d"jimuradiobtn"\r\n            data-dojo-attach-point\x3d"descRadioBtn" aria-label\x3d"${nls.analysisTab.descendingLabel}"\x3e\r\n          \x3clabel class\x3d"esriCTRadioLabel" for\x3d"descRadio"\x3e\r\n            ${nls.analysisTab.descendingLabel}\r\n          \x3c/label\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"margin-top: 15px;"\x3e\r\n        \x3cdiv class\x3d"esriCTRadioBtnContainer esriCTReportSettingsContainer"\x3e\r\n          \x3cdiv class\x3d"esriCTSelectLabel esriCTEllipsis" title\x3d"${nls.analysisTab.sortFieldSelectLabel}"\x3e\r\n            ${nls.analysisTab.sortFieldSelectLabel}\r\n          \x3c/div\x3e\r\n          \x3cdiv\x3e\r\n            \x3cselect class\x3d"esriCTDropBox esriCTSortFieldSelectLabelWidth" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"fieldsDropdown"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/fieldset\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dijit/form/Select dijit/form/ValidationTextBox dojo/_base/array dojo/_base/lang dojo/_base/html dojo/on jimu/BaseWidget dojo/text!./FieldPicker.html dojo/Evented jimu/dijit/SimpleTable dojo/query dojo/dom-class jimu/utils jimu/dijit/CheckBox jimu/dijit/RadioBtn".split(" "),function(k,l,m,n,f,e,p,g,q,r,t,u,v,h,w){return k([q,l,t],{templateString:r,baseClass:"jimu-widget-screening-setting",_fieldsTable:null,_entireFieldsArr:[],_selectedFieldsArr:[],
_entireFieldObj:{},_configuredField:null,_configuredLabel:null,selectedSortingField:null,constructor:function(a){this._fieldsTable=null;this._entireFieldsArr=[];this._selectedFieldsArr=[];this._entireFieldObj={};this.selectedSortingField=this._configuredLabel=this._configuredField=null;e.mixin(this,a)},postMixInProperties:function(){this.nls.common={};e.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this.selectedSortingField=null;this.inherited(arguments);this._init();this.own(g(this.fieldsDropdown,
"change",e.hitch(this,function(a){this.selectedSortingField=a;this._setSortFieldDropdownLabel()})))},_init:function(){this._clearData();this._addValidFields();this._createFieldsTable();this._attachEventsToElement();this._displayPreviousConfiguredFields();this._setPreviousGroupByFieldCheckboxStatus();this.currentRow.sortInfo&&"Desc"===this.currentRow.sortInfo.sortOrder?this.descRadioBtn.set("checked",!0):this.ascRadioBtn.set("checked",!0);this._onFieldsSelectionChange();var a=this.currentRow.sortInfo&&
""!==this.currentRow.sortInfo.sortingField?this._getSortFieldValue():this.fieldsDropdown.getOptions(this.fieldsDropdown.options.length-1).value;this.fieldsDropdown.set("value",a);this._setSortFieldDropdownLabel()},_clearData:function(){this._entireFieldsArr=[];this._selectedFieldsArr=[]},_displayPreviousConfiguredFields:function(){var a;if(this.selectedFields)for(a in this.selectedFields)this._configuredField=a,this._configuredLabel=this.selectedFields[a].label,this.btnAddField.click()},_addValidFields:function(){var a;
var c="esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeSmallInteger esriFieldTypeDouble esriFieldTypeString esriFieldTypeDate".split(" ");var d=["string","number","date"];f.forEach(this.featureLayer.fields,e.hitch(this,function(b){this._entireFieldObj[b.name]=b;-1<c.indexOf(b.type)&&(this._entireFieldsArr.push(b.name),this._entireFieldObj[b.name]=e.clone(b),this.selectedFields&&this.selectedFields[b.name]&&(this._entireFieldObj[b.name].label=this.selectedFields[b.name].label))}));this.layerInfo&&
this.layerInfo.originOperLayer&&this.layerInfo.originOperLayer.popupInfo?a=this.layerInfo.originOperLayer.popupInfo:this.layerInfo&&this.layerInfo.getPopupInfo&&this.layerInfo.getPopupInfo()&&(a=this.layerInfo.getPopupInfo());a&&a.expressionInfos&&f.forEach(a.expressionInfos,e.hitch(this,function(b){b=e.clone(b);b.name="expression/"+b.name;this._entireFieldObj[b.name]=b;-1<d.indexOf(b.returnType)&&(this._entireFieldsArr.push(b.name),this._entireFieldObj[b.name].alias=b.title+" {"+b.name+"}",this.selectedFields&&
this.selectedFields[b.name]&&(this._entireFieldObj[b.name].label=this.selectedFields[b.name].label))}));0===this._entireFieldsArr.length&&this._disableAddFieldButton()},_createFieldsTable:function(){this._fieldsTable=new u({fields:[{name:"layer",title:this.nls.analysisTab.addFieldsNameTitle,"class":"label",type:"empty",width:"40%"},{name:"field",title:this.nls.common.label,type:"empty",editable:"true",width:"40%"},{name:"actions",title:this.nls.common.actions,"class":"actions",type:"actions",actions:["up",
"down","delete"],width:"20%"}]});this._fieldsTable.placeAt(this.fieldTable);p.setStyle(this._fieldsTable.domNode,{height:"100%"});this._fieldsTable.startup()},_attachEventsToElement:function(){this.own(g(this.btnAddField,"click",e.hitch(this,function(){if(!h.contains(this.btnAddField,"esriCTDisabled")){var a=this._getDistinctFields(this._entireFieldsArr,this._selectedFieldsArr);this._addFieldsRow(a);this._onFieldsSelectionChange()}})));this.own(g(this._fieldsTable,"row-delete",e.hitch(this,function(a){this._deleteFieldRow(a);
this._setSortFieldDropdownLabel()})))},_addFieldsRow:function(a){var c=this._fieldsTable.addRow({});if(c.success&&c.tr){c=c.tr;var d=v(".simple-table-cell",c);var b=d[0];d=d[1];this._addFieldDropdown(a,b,c);this._addLabelTextbox(d,c)}},_deleteFieldRow:function(a){h.remove(this.btnAddField,"esriCTDisabled");var c=this._selectedFieldsArr.indexOf(a.fieldDropdownInstance.value);-1<c&&this._selectedFieldsArr.splice(c,1);this.fieldsDropdown.removeOption(c);this._addSelectedFieldInOtherDropdown(a.fieldDropdownInstance.value,
null)},_addFieldDropdown:function(a,c,d){a=this._getDistinctFieldsOptionsObj(a);a=new m({"class":"esriCTFieldChooserDropdown",options:a});a.placeAt(c);a.startup();this._configuredField&&a.set("value",this._configuredField,!1);d.fieldDropdownInstance=a;this.own(g(a,"change",e.hitch(this,function(b){var x=this._selectedFieldsArr[d.rowIndex];this._selectedFieldsArr[d.rowIndex]=b;this._addSelectedFieldInOtherDropdown(x,b);this._removeSelectedFieldFromOtherDropdown(b);this._setLayerFieldsDropdownLabel();
this._onFieldsSelectionChange()})));this._selectedFieldsArr.push(a.value);this._removeSelectedFieldFromOtherDropdown(a.value);this._disableAddFieldButton();this._setLayerFieldsDropdownLabel()},_disableAddFieldButton:function(){this._selectedFieldsArr.length===this._entireFieldsArr.length&&h.add(this.btnAddField,"esriCTDisabled")},_addLabelTextbox:function(a,c){var d=new n({"class":"esriCTFieldValidationTextBox"});d.placeAt(a);d.startup();this._configuredLabel&&(d.set("value",this._configuredLabel),
this._configuredLabel=null);c.fieldLabelInstance=d},_getDistinctFieldsOptionsObj:function(a){var c=[];f.forEach(a,e.hitch(this,function(d){c.push({label:this._entireFieldObj[d].alias||this._entireFieldObj[d].name,value:d})}));return c},_removeSelectedFieldFromOtherDropdown:function(a){var c=this._fieldsTable.getRows();f.forEach(c,e.hitch(this,function(d){a!==d.fieldDropdownInstance.value&&d.fieldDropdownInstance.removeOption(a)}))},_addSelectedFieldInOtherDropdown:function(a,c){var d=this._fieldsTable.getRows();
f.forEach(d,e.hitch(this,function(b){c!==b.fieldDropdownInstance.value&&b.fieldDropdownInstance.addOption({label:this._entireFieldObj[a].alias,value:a})}))},okButtonClicked:function(){var a={};var c={};var d=this._fieldsTable.getRows();0===d.length?this.selectedFields=null:(f.forEach(d,e.hitch(this,function(b){this._entireFieldObj[b.fieldDropdownInstance.value].label=w.stripHTML(e.trim(b.fieldLabelInstance.value));a[b.fieldDropdownInstance.value]=this._entireFieldObj[b.fieldDropdownInstance.value]})),
this.selectedFields=a);c.selectedFields=this.selectedFields;c.groupbyfieldCheckBoxStatus=this.groupByFieldCheckBox.get("checked");c.sortInfo=this._getSortInfo();return c},_getDistinctFields:function(a,c){return a.filter(function(d){return 0>c.indexOf(d)})},_setPreviousGroupByFieldCheckboxStatus:function(){""!==this.groupbyfieldCheckBoxStatus&&null!==this.groupbyfieldCheckBoxStatus&&void 0!==this.groupbyfieldCheckBoxStatus&&this.groupByFieldCheckBox.setValue(this.groupbyfieldCheckBoxStatus)},_getSortInfo:function(){return{sortOrder:this.ascRadioBtn.checked?
"Asc":"Desc",sortingField:this.fieldsDropdown.value}},_onFieldsSelectionChange:function(){this.fieldsDropdown.options=[];f.forEach(this._selectedFieldsArr,e.hitch(this,function(a){this.fieldsDropdown.addOption({label:this._entireFieldObj[a].alias||this._entireFieldObj[a].name,value:a})}));this._addStatisticsFieldOption();this.fieldsDropdown.set("value",this.selectedSortingField);this._setSortFieldDropdownLabel()},_getFieldText:function(a,c){return a.label?a.label:a.alias?a.alias:c},_addStatisticsFieldOption:function(){"esriGeometryPoint"===
this.featureLayer.geometryType&&this.fieldsDropdown.addOption({label:this.nls.analysisTab.statisticsCountLabel,value:"esriCTCountField"});"esriGeometryPolyline"===this.featureLayer.geometryType&&this.fieldsDropdown.addOption({label:this.nls.analysisTab.statisticsTotalLengthLabel,value:"esriCTTotalLengthField"});"esriGeometryPolygon"===this.featureLayer.geometryType&&this.fieldsDropdown.addOption({label:this.nls.analysisTab.statisticsTotalAreaLabel,value:"esriCTTotalAreaField"})},_getSortFieldValue:function(){var a=
this.currentRow.sortInfo.sortingField;if(-1===this.fieldsDropdown.options.map(function(b){return b.value}).indexOf(a))for(var c in this._entireFieldObj){var d=this._entireFieldObj[c];d=this._getFieldText(d,c);d===a&&(a=c)}return a},_setSortFieldDropdownLabel:function(){this.fieldsDropdown.set("title",this.fieldsDropdown.getOptions(this.fieldsDropdown.value).label)},_setLayerFieldsDropdownLabel:function(){var a;var c=this._fieldsTable.getRows();f.forEach(c,e.hitch(this,function(d){(a=d.fieldDropdownInstance.value)&&
d.fieldDropdownInstance.set("title",d.fieldDropdownInstance.getOptions(a).label)}))}})});