//@ui5-bundle lovvalue/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"lovvalue/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("lovvalue.Component",{metadata:{manifest:"json"}})});
},
	"lovvalue/i18n/i18n.properties":'# This is the resource bundle for lovvalue\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Referencedatalovvalue\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"lovvalue/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"lovvalue","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.9.3","toolsId":"c9843f9c-41f5-418f-9658-f408e1dda09c"},"dataSources":{"mainService":{"uri":"projectservice/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.112.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"lovvalue.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"LovValueList","target":"LovValueList"},{"pattern":"LovValue({key}):?query:","name":"LovValueObjectPage","target":"LovValueObjectPage"}],"targets":{"LovValueList":{"type":"Component","id":"LovValueList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"LovValue","variantManagement":"Page","navigation":{"LovValue":{"detail":{"route":"LovValueObjectPage"}}}}}},"LovValueObjectPage":{"type":"Component","id":"LovValueObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"LovValue"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
}});
