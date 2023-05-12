sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function(Controller) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.App", {
		
		onInit: function() {
			var tableController = sap.ui.controller("sap.ui.mcsuite.controller.Table");
			tableController.createTable(this.getView());

			var buttonController = sap.ui.controller("sap.ui.mcsuite.controller.Button");
			buttonController.createButton(this.getView());

			var linkController = sap.ui.controller("sap.ui.mcsuite.controller.Link");
			linkController.createLink(this.getView());
		}	
	});
});