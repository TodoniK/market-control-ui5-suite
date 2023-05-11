sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"TableComponent/TableComponent",
], function(Controller,TableComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.Table", {
		
		createTable: function(view) {
			var table = new TableComponent();
			var oTable = table.createTable("users");
			view.byId("page").addContent(oTable);
		}	
	});
});