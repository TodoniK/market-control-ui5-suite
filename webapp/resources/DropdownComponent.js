sap.ui.define([
    "sap/ui/core/UIComponent",
  ], function(UIComponent) {
    "use strict";
  
      return UIComponent.extend("mcsuite.DropdownComponent", {
        metadata: {
          properties: {
            menuName: { type: "string", defaultValue: "" },
            areaID: { type: "string", defaultValue: "" },
            linkArray: { type: "array", defaultValue: [] },
          }
      },
  
      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
      },

      // Setters
      setMenuName: function(sMenuName) {
          this.setProperty("menuName", sMenuName);
      },

      setAreaID: function(sAreaID) {
          this.setProperty("areaID", sAreaID);
      },

      setLinkArray: function(sLinkArray) {
          this.setProperty("linkArray", sLinkArray);
      },

      // Getters
      getMenuName: function() {
          return this.getProperty("menuName");
      },

      getAreaID: function() {
          return this.getProperty("areaID");
      },

      getLinkArray: function() {
          return this.getProperty("linkArray");
      },

      createMenu: function(menuName, areaID, linkArray) {
          this.setMenuName(menuName);
          this.setAreaID(areaID);
          this.setLinkArray(linkArray);

          var combo = new sap.m.ComboBox({
              id: this.getMenuName() + Math.random(),
              items: linkArray
          });

          return combo;
      }
        
  });
});