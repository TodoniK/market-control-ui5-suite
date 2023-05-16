sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"TableComponent",
], function(Controller,TableComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.Table", {
		
		createTable: function(view, tableName) {
			var table = new TableComponent();
			var oTable = table.createTable(tableName,"flexBox1");
			view.byId(table.getAreaID()).addItem(oTable);
		}	
	});
});