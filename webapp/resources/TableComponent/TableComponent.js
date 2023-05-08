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

    getDataFromApi: function(sTableName) {
      this.setTableName(sTableName);

      if(this.getProperty("tableName") == "") {
          console.log("You must enter a table name");
      } else {
          var sUrl = "http://localhost:3000/api/" + this.getTableName();
          var result = false;
    
          result = $.ajax({
            url: sUrl,
            async: false,
            dataType: 'json',
            success: function(sResult){}})
          .responseJSON;

          return result;
      }
    }
    
  });
});