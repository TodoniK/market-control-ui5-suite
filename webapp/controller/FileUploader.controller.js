sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"FileUploaderComponent"
], function(Controller,FileUploaderComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.FileUploader", {
		
		createUploader: function(view) {
			var fileUploader = new FileUploaderComponent();
			var fileUploader1 = fileUploader.createFileUploader("flexBox5", ["jpg", "png", "gif", "txt"], "/upload");
            view.byId(fileUploader.getAreaID()).addItem(fileUploader1);
		}

	});
});