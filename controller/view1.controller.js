sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller,MessageToast,Filter,FilterOperator) {
   "use strict";
   return Controller.extend("search.INV.controller.po", {
   	  onInit: function(){
   	  },
      onSearchInv   : function () {
      	debugger;
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
   //      MessageToast.show(oBundle.getText("searchINV"));
 //------------Filter
 
			// build filter array
			var aFilter = [];
			var invNumber = this.getOwnerComponent().getModel().oData.invInput.invNumber;
			debugger;
			if (invNumber) {
				aFilter.push(new Filter("invNumber", FilterOperator.Contains, invNumber));
			}

			// filter binding
			var oList = this.getView().byId("invList");
			var oBinding = oList.getBinding("{inv>Invoices}");
			oBinding.filter(aFilter);
      },
      onFilterInvoices : function (oEvent) {

		}
   });
});