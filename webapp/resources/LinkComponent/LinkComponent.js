sap.ui.define([
    "sap/ui/core/UIComponent",
  ], function(UIComponent) {
    "use strict";
  
    return UIComponent.extend("mcsuite.LinkComponent", {
      metadata: {
        properties: {
          urlReference: { type: "string", defaultValue: "" },
          imageReference: { type: "string", defaultValue: "" },
          text: { type: "string", defaultValue: "" },
          description: { type: "string", defaultValue: "" },
          targetExists: { type: "boolean", defaultValue: false },
          areaID: { type: "string", defaultValue: "" },
        }
      },
  
      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
      },

        // Setters
        setUrlReference: function(sUrlReference) {
            this.setProperty("urlReference", sUrlReference);
        }
        ,
        setImageReference: function(sImageReference) {
            this.setProperty("imageReference", sImageReference);
        }
        ,
        setText: function(sText) {
            this.setProperty("text", sText);
        }
        ,
        setDescription: function(sDescription) {
            this.setProperty("description", sDescription);
        }
        ,
        setAreaID: function(sAreaID) {
            this.setProperty("areaID", sAreaID);
        }
        ,

        // Getters
        getUrlReference: function() {
            return this.getProperty("urlReference");
        }
        ,
        getImageReference: function() {
            return this.getProperty("imageReference");
        }
        ,
        getText: function() {
            return this.getProperty("text");
        }
        ,
        getDescription: function() {
            return this.getProperty("description");
        }
        ,
        getAreaID: function() {
            return this.getProperty("areaID");
        }
        ,

        // Methods
        checkIfTargetExists: function() {

        }
        ,
        createButton: function(url, text, description, areaID) {
            this.setUrlReference(url);
            this.setText(text);
            this.setDescription(description);
            this.setAreaID(areaID);
            
            var oButton = new sap.m.Button({
                text: this.getText(),
                press: function() {
                    window.location.href = "/img/logo_ui5.png";
                },
                tooltip: this.getDescription()
            });
            return oButton;            
        }
        
    });
  });