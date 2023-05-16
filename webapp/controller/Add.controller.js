sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"AddComponent",
], function(Controller,AddComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.Add", {
		
		createForm: function(view, areaID) {
			var addComp = new AddComponent();
			var oForm = addComp.createForm(areaID);
            view.byId(addComp.getAreaID()).addItem(oForm);
		}	
	});
});