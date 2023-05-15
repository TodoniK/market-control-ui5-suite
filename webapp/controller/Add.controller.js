sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"AddComponent",
], function(Controller,AddComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.Add", {
		
		createMenu: function(view) {
			var addComp = new AddComponent();
			var oForm = addComp.createForm();

            view.byId("flexBox6").addItem(oForm);
		}	
	});
});