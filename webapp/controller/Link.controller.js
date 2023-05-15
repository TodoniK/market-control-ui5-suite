sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"LinkComponent/LinkComponent"
], function(Controller,LinkComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.Link", {
		
		createLink: function(view) {
			var btn = new LinkComponent();
			var oLink1 = btn.createLink("/img/logo_marketControl.gif", "Redirect work", "Should show the market control gif", "flexBox3");
			view.byId(btn.getAreaID()).addItem(oLink1);

			var oLink2 = btn.createLink("www.google.fr", "Redirect not working", "Should redirect to root folder of the project", "flexBox3");
			view.byId(btn.getAreaID()).addItem(oLink2);	
		}	
	});
});