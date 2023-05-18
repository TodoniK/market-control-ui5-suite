sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/m/MessageBox",
  ], function(UIComponent, MessageBox) {
    "use strict";
  
    return UIComponent.extend("mcsuite.HeaderComponent", {
      metadata: {
        properties: {
          logo: { type: "string", defaultValue: "" },
          title: { type: "string", defaultValue: "" },
          arrayBtn: { type: "array", defaultValue: [] },
        }
    },

    init: function() {
    UIComponent.prototype.init.apply(this, arguments);
    },

    // Setters
    setlogo: function(slogo) {
        this.setProperty("logo", slogo);
    },

    setTitle: function(sTitle) {
        this.setProperty("title", sTitle);
    },

    setArrayBtn: function(sArrayBtn) {
        this.setProperty("arrayBtn", sArrayBtn);
    },

    // Getters
    getlogo: function() {
        return this.getProperty("logo");
    },

    getTitle: function() {
        return this.getProperty("title");
    },

    getArrayBtn: function() {
        return this.getProperty("arrayBtn");
    },

    createHeader: function(logo, title, arrayBtn) {
        this.setlogo(logo);
        this.setTitle(title);
        this.setArrayBtn(arrayBtn);

        var oNavbar = new sap.m.Bar({
            design: sap.m.BarDesign.Header,
            contentLeft: [
                new sap.m.Image({
                    src: this.getlogo(),
                    height: "40px",
                    width: "40px"
                }),
                new sap.m.Label({
                    text: this.getTitle(),
                    design: "Bold"
                })
            ],
            contentRight: this.getArrayBtn()
        });
        return oNavbar;
    }

  });
});