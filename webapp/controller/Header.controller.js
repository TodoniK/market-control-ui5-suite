sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"HeaderComponent"
], function(Controller,HeaderComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.Header", {
		
		createHeader: function(view, areaID, logo, title, arrayBtn) {
			var header = new HeaderComponent();
			var oHeader = header.createHeader(logo, title, arrayBtn);

			view.byId(areaID).insertContent(oHeader, 0);
		}	
	});
});