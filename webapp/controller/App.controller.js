sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"TableComponent/TableComponent",
  	"sap/ui/core/ComponentContainer"
], function(Controller,TableComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.App", {
		
		onInit: function() {
			var viewedTable = this.getView().byId("table");
			var tableComponent = new TableComponent();
			tableComponent.fillTable(viewedTable);
		}	
	});
});