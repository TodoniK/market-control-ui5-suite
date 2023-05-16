sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ButtonComponent"
], function(Controller,ButtonComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.Button", {
		
		createButton: function(view, url, text, description, areaID) {
			var btn = new ButtonComponent();
			var oBtn = btn.createButton(url, text, description, areaID);
			view.byId(btn.getAreaID()).addItem(oBtn);
		}	
	});
});