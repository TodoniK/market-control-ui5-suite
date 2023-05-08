sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/core/ComponentSupport",
  "sap/ui/model/json/JSONModel",
  "jquery.sap.global",
], function(UIComponent, JSONModel, jQuery) {
  "use strict";

  return UIComponent.extend("openui5-sample-app.TableComponent", {
    metadata: {
      properties: {
        tableName: { type: "string", defaultValue: "" }
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

    createContent: function(sTableName) {

      this.setTableName(sTableName);

      if(this.getProperty("tableName") == "") {
          console.log("You must enter a table name");
      } else {
          var oModel = new sap.ui.model.json.JSONModel();
          var sUrl = "http://localhost:3000/api/" + this.getTableName();
          var oTable = new sap.ui.table.Table();
    
          /*$.ajax({
            url: sUrl,
            oModel: oModel,
            oTable: oTable,
            success: function(sResult) {
                console.log(sResult);
                oModel.setData(sResult);
                oTable.setModel(oModel);
            }
          });

          var oColumnListItem = new sap.m.ColumnListItem();

          var oTemplate = new sap.m.Text({
            text: "{id}"
          });
          oColumnListItem.addCell(oTemplate);

          oTemplate = new sap.m.Text({
            text: "{name}"
          });
          oColumnListItem.addCell(oTemplate);

          oTemplate = new sap.m.Text({
            text: "{price}"
          });
          oColumnListItem.addCell(oTemplate);

          oTable.bindItems("/", oColumnListItem);
          oTable.placeAt("content");*/
      }

      return 0;

    }
  });
});