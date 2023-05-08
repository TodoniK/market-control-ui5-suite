sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../components/TableComponent",
  	"sap/ui/core/ComponentContainer"
], function(Controller,TableComponent) {
	"use strict";
	return Controller.extend("sap.ui.demo.todo.controller.App", {
		
		onInit: function() {
			var table = new TableComponent();
			
			table.createContent("orders");
			
			
		}
		
	});
});