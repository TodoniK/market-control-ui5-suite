sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ButtonComponent"
], function(Controller,ButtonComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.Button", {
		
		createButton: function(view) {
			var btn = new ButtonComponent();
			var oButton1 = btn.createButton("/img/logo_ui5.png", "Redirect work", "Gonna get an image", "flexBox2");
			view.byId(btn.getAreaID()).addItem(oButton1);

			var oButton2 = btn.createButton("www.google.fr", "Redirect not working", "Gonna get an error message", "flexBox2");
			view.byId(btn.getAreaID()).addItem(oButton2);	
		}	
	});
});