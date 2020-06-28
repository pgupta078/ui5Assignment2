sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/m/MessageToast"
], function (UIComponent, JSONModel, ResourceModel, MessageToast) {
	"use strict";
	return UIComponent.extend("search.INV.Component", {
		metadata: {
			//rootView: {
			//   "viewName": "search.PO.view.App",
			//   "type": "XML",
			//   "async": true,
			//   "id": "app"
			//}
			manifest: "json"
		},

		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			// Set data model on view.
			var invInput = {
				invInput: {
					invNumber: "",
					invType: "",
					companyCode: ""
				}
			};
			var oModel = new JSONModel(invInput);
			this.setModel(oModel);

			//var i18nModel = new ResourceModel({
			//   bundleName: "search.PO.i18n.i18n"
			//});
			//       this.setModel(i18nModel, "i18n");
		}
	});
});