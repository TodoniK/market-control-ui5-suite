sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"TableComponent",
], function(Controller,TableComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.Table", {
		
		createTable: function(view) {
			var table = new TableComponent();
			var oTable = table.createTable("users");
			view.byId("flexBox1").addItem(oTable);
		}	
	});
});