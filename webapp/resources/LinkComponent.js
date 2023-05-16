sap.ui.define([
    "sap/ui/core/UIComponent",
  ], function(UIComponent) {
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
        checkIfImageExists: function() {
            var result;
            var href = this.getImageReference();
            
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
        createLink: function(url, text, description, areaID) {
            this.setUrlReference(url);
            this.setText(text);
            this.setDescription(description);
            this.setAreaID(areaID);
            
            var targetTest = this.checkIfTargetExists();
            var href = this.getUrlReference();

            var oLink = new sap.m.Link({
            text: this.getText(),
            href: "#",
            target: "_blank",
            tooltip: this.getDescription(),
            press: function() {
                if (targetTest) {
                    window.open(href, '_blank');
                } else {
                    Swal.fire({icon: 'error', title: 'Oops...', text: 'Link redirect to nothing!'});
                }
             }
            });

            return oLink;
        }
        
    });
  });