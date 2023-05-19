sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function(Controller) {
	"use strict";
	
	return Controller.extend("sap.ui.mcsuite.controller.App", {
		
		onInit: function() {

			var linkController = sap.ui.controller("sap.ui.mcsuite.controller.Link");
			linkController.createLink(this.getView(),"assets/img/logo_marketControl.gif", 'link', "Redirect work", "Should show the market control gif", "flexBox3");
			linkController.createLink(this.getView(),"www.google.fr", 'trash', "Redirect not working", "Should redirect to root folder of the project", "flexBox3");
			linkController.createLink(this.getView(),"www.google.fr", 'link');

			// var tableController = sap.ui.controller("sap.ui.mcsuite.controller.Table");
			// tableController.createTable(this.getView(),"users");

			// var buttonController = sap.ui.controller("sap.ui.mcsuite.controller.Button");
			// buttonController.createButton(this.getView(),"/img/logo_ui5.png", "Redirect work", "Gonna get an image", "flexBox2");
			// buttonController.createButton(this.getView(),"www.google.fr", "Redirect not working", "Gonna get an error message", "flexBox2");

			// var headerController = sap.ui.controller("sap.ui.mcsuite.controller.Header");
			// headerController.createHeader(this.getView(), "page", "assets/img/logo_marketControl.png", "Market Control Suite", []);

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