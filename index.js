// sap.ui.define([
// 	"sap/ui/core/mvc/XMLView"
// 	], function(XMLView){
// 		"use strict";
// 		XMLView.create({
// 			viewName:"search.INV.view.view1"
// 		}).then(function (oView) {
// 			oView.placeAt("content1");
// 		});
// 	}
// 	);
sap.ui.define([
"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";
	new ComponentContainer({
		name: "search.INV",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");

});		
	