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
						
			oModel.setData(table.getDataFromApi("users"));

			// Recuperer la table de la vue
			var oTable = this.getView().byId("table");
			console.log(oTable);
			
			// On suppose que les données sont stockées dans le modèle oModel
			var aData = oModel.getData();
			console.log(aData);

			if (aData.length > 0) {
				// On récupère les propriétés de l'objet JSON de l'élément 0
				var aKeys = Object.keys(aData[0]);
				console.log(aKeys);

				// On crée une colonne pour chaque propriété
				aKeys.forEach(function(sKey) {
					console.log(sKey);
					oTable.addColumn(new sap.m.Column({
						header: new sap.m.Label({ text: sKey })
					}));
				});

				oTable.setModel(oModel);
				oTable.bindItems("/", new sap.m.ColumnListItem({
					cells: aKeys.map(function(sKey) {
						return new sap.m.Text({
							text: "{" + sKey + "}"
						});
					}
					)
				}));
			}
		}
		
	});
});