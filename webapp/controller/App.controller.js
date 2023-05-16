sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function(Controller) {
	"use strict";
	
	return Controller.extend("sap.ui.mcsuite.controller.App", {
		
		onInit: function() {
			// var tableController = sap.ui.controller("sap.ui.mcsuite.controller.Table");
			// tableController.createTable(this.getView(),"users");

			// var buttonController = sap.ui.controller("sap.ui.mcsuite.controller.Button");
			// buttonController.createButton(this.getView(),"/img/logo_ui5.png", "Redirect work", "Gonna get an image", "flexBox2");
			// buttonController.createButton(this.getView(),"www.google.fr", "Redirect not working", "Gonna get an error message", "flexBox2");

			var linkController = sap.ui.controller("sap.ui.mcsuite.controller.Link");
			linkController.createLink(this.getView(),"/img/logo_marketControl.gif", "Redirect work", "Should show the market control gif", "flexBox3");
			linkController.createLink(this.getView(),"www.google.fr", "Redirect not working", "Should redirect to root folder of the project", "flexBox3");

			// var dropdownController = sap.ui.controller("sap.ui.mcsuite.controller.Dropdown");
			// dropdownController.createMenu(this.getView(), "LinkMenu", "flexBox4");
			// dropdownController.createMenu(this.getView(), "LinkMenu", "flexBox4");

			// var fileUploaderController = sap.ui.controller("sap.ui.mcsuite.controller.FileUploader");
			// fileUploaderController.createUploader(this.getView(),"flexBox5", ["jpg", "png", "gif", "txt"], "/upload");
			// fileUploaderController.createUploader(this.getView(),"flexBox5", ["jpg", "png", "gif", "txt"], "/upload");

			// var addController = sap.ui.controller("sap.ui.mcsuite.controller.Add");
			// addController.createForm(this.getView(), "flexBox6");
			// addController.createForm(this.getView(), "flexBox6");
		}	
	});
});