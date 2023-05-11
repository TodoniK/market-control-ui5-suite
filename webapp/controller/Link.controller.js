sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"LinkComponent/LinkComponent"
], function(Controller,LinkComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.Link", {
		
		createLink: function(view) {
			var btn = new LinkComponent();
			var oButton = btn.createButton("www.google.com", "Google", "GoogleSearch", "page");
			view.byId(btn.getAreaID()).addContent(oButton);
		}	
	});
});