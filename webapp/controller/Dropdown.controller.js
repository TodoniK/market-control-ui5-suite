sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"DropdownComponent/DropdownComponent",
    "LinkComponent/LinkComponent"
], function(Controller,DropdownComponent,LinkComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.Dropdown", {
		
		createMenu: function(view) {
			var menu = new DropdownComponent();
			var arrayLinks = [
                new LinkComponent().createLink("/img/logo_marketControl.gif", "Link 1", "Should show the market control gif"),
                new LinkComponent().createLink("/img/logo_marketControl.gif", "Link 2", "Should show the market control gif"),
                new LinkComponent().createLink("/img/logo_marketControl.gif", "Link 3", "Should show the market control gif"),
                new LinkComponent().createLink("/img/logo_marketControl.gif", "Link 4", "Should show the market control gif"),
            ];
            var areaID = "flexBox4";

            var linkItems = arrayLinks.map(function(link) {
                return new sap.ui.core.ListItem({
                  key: link.getText(),
                  text: link.getText()
                });
            });
            
            var oMenu = menu.createMenu("Menu", areaID, linkItems);
            view.byId(menu.getAreaID()).addItem(oMenu);
		}	
	});
});