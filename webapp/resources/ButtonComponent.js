sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/m/MessageBox",
  ], function(UIComponent, MessageBox) {
    "use strict";
  
    return UIComponent.extend("mcsuite.ButtonComponent", {
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
    },

    setImageReference: function(sImageReference) {
        this.setProperty("imageReference", sImageReference);
    },

    setText: function(sText) {
        this.setProperty("text", sText);
    },

    setDescription: function(sDescription) {
        this.setProperty("description", sDescription);
    },

    setAreaID: function(sAreaID) {
        this.setProperty("areaID", sAreaID);
    },

    // Getters
    getUrlReference: function() {
        return this.getProperty("urlReference");
    },

    getImageReference: function() {
        return this.getProperty("imageReference");
    },

    getText: function() {
        return this.getProperty("text");
    },

    getDescription: function() {
        return this.getProperty("description");
    },

    getAreaID: function() {
        return this.getProperty("areaID");
    },

    // Methods
    checkIfTargetExists: function() {
        var result;
        var href = this.getUrlReference();
        
        result = $.ajax({
            url: href,
            type: "HEAD",
            'async': false,
            success: function() {
            },
            error: function() {
            }
        });

        if(result.status == 200) {
            return true;
        } else {
            return false;
        }
    },

    createButton: function(url, text, description, areaID) {
        this.setUrlReference(url);
        this.setText(text);
        this.setDescription(description);
        this.setAreaID(areaID);
        
        var href = this.getUrlReference();
        var targetExists = this.checkIfTargetExists();

        var oButton = new sap.m.Button({
            text: this.getText(),
            press: function() {
                if(targetExists){
                    window.open(href, '_blank');
                } else {
                    MessageBox.error("Link redirect to nothing!");
                }
            },
            tooltip: this.getDescription()
        });
        return oButton;            
    }
        
  });
});