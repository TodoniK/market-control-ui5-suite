sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../resources/TableComponent/TableComponent",
  	"sap/ui/core/ComponentContainer"
], function(Controller,TableComponent) {
	"use strict";
	return Controller.extend("sap.ui.demo.todo.controller.App", {
		
		onInit: function() {
			var table = new TableComponent();
			var oModel = new sap.ui.model.json.JSONModel();
						
			oModel.setData(table.getDataFromApi("orders"));

			this.getView().setModel(oModel, 'dataModel');
			console.log(this.getView().getModel('dataModel').oData);
		}
		
	});
});