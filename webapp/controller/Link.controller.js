sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"LinkComponent"
], function(Controller,LinkComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.Link", {
		
		createLink: function(view, url, icon, text, description, areaID) {
			var link = new LinkComponent();
			var oLink = link.createLink(url, icon, text, description, areaID);

			var oPanel = new sap.m.Panel({
				headerText: "Link Component",
				content: [oLink]
			});

			view.byId(link.getAreaID()).addItem(oPanel);
		}	
	});
});