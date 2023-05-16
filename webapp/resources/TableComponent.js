sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/m/MessageBox",
], function(UIComponent, MessageBox) {
  "use strict";

  return UIComponent.extend("mcsuite.TableComponent", {
    metadata: {
      properties: {
        tableName: { type: "string", defaultValue: "" },
      }
    },

    init: function() {
      UIComponent.prototype.init.apply(this, arguments);
    },

    setTableName: function(sTableName) {
      this.setProperty("tableName", sTableName);
    },

    getTableName: function() {
      return this.getProperty("tableName");
    },

    createTable: function(tableName) {
    
      this.setTableName(tableName);

      var viewedTable = new sap.m.Table({
        id: "viewedTable",
        inset: true,
        headerText: this.getTableName(),
        columns: []
      });

      var oModel = new sap.ui.model.json.JSONModel();
						
			oModel.setData(this.getDataFromApi(this.getTableName()));

      if(oModel.getData() != undefined) {

        // On suppose que les données sont stockées dans le modèle oModel
        var aData = oModel.getData();

        if (aData.length > 0) {
          // On récupère les propriétés de l'objet JSON de l'élément 0
          var aKeys = Object.keys(aData[0]);

          // On crée une colonne pour chaque propriété
          aKeys.forEach(function(sKey) {
            viewedTable.addColumn(new sap.m.Column({
              header: new sap.m.Label({ text: sKey })
            }));
          });

          viewedTable.setModel(oModel);
          viewedTable.bindItems("/", new sap.m.ColumnListItem({
            cells: aKeys.map(function(sKey) {
              return new sap.m.Text({
                text: "{" + sKey + "}"
              });
            })
          }));
        }

        return viewedTable;

      } else {
        MessageBox.error("No db connection for this table!");
      }
    },

    getDataFromApi: function(sTableName) {
      this.setTableName(sTableName);

      var sUrl = "http://localhost:3000/api/" + this.getTableName();
      var result = false;

      result = $.ajax({
        url: sUrl,
        async: false,
        dataType: 'json',
        success: function(sResult){},
        error: function(sResult){},
      })
      .responseJSON;

      return result;
    }
  });
});