sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/m/MessageBox",
  ], function(UIComponent, MessageBox) {
    "use strict";
  
    return UIComponent.extend("mcsuite.LinkComponent", {
      metadata: {
        properties: {
          urlReference: { type: "string", defaultValue: "" }, // required
          iconReference: { type: "string", defaultValue: "" }, 
          text: { type: "string", defaultValue: "" }, // required
          description: { type: "string", defaultValue: "Click me" },
          areaID: { type: "string", defaultValue: "defaultFlexBox" },
        }
    },

    init: function() {
    UIComponent.prototype.init.apply(this, arguments);
    },

    // Setters
    setUrlReference: function(sUrlReference) {
        this.setProperty("urlReference", sUrlReference);
    },

    setIconReference: function(siconReference) {
        siconReference = '<i class="fa-solid fa-' + siconReference + '">&nbsp;</i>';
        this.setProperty("iconReference", siconReference);
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

    getIconReference: function() {
        return this.getProperty("iconReference");
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
    checkIfTargetsExists: function(href) {
        var result = $.ajax({
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

    checkAllNecessaryProperties: function() {
        var textReturn = "";

        if (this.getUrlReference() == "") {
            textReturn += "urlReference should be setted\n";
        }

        if (this.getText() == "") {
            textReturn += "text should be setted\n";
        }

        return textReturn;
    },

    createLink: function(url, icon, text, description, areaID) {
        this.setUrlReference(url);
        this.setIconReference(icon);
        this.setText(text);
        this.setDescription(description);
        this.setAreaID(areaID);
        
        var propTests = this.checkAllNecessaryProperties();
        var urlTest = this.checkIfTargetsExists(this.getUrlReference());
        var icon = this.getIconReference();
        var url = this.getUrlReference();

        if(propTests == "") {
            var oLinkWithIcon = new sap.m.FlexBox({
                justifyContent: sap.m.FlexJustifyContent.Start,
                alignItems: sap.m.FlexAlignItems.Center,
                items: [
                    new sap.ui.core.HTML({
                        content: icon,
                        preferDOM: false
                    }),
                    new sap.m.Link({
                        text: this.getText(),
                        href: "#",
                        target: "_blank",
                        tooltip: this.getDescription(),
                        press: function() {
                            if (urlTest) {
                                window.open(url, '_blank');
                            } else {
                                MessageBox.error("URL not found");
                            }
                        }
                    }),
                ]
            });
                
            return oLinkWithIcon;
            
        } else {
            MessageBox.error(propTests, "Error - Link Component");
            return new sap.m.Label({
                text: "Error"
            });
        }              
    }
  });
});