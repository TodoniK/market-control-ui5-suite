sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"FileUploaderComponent"
], function(Controller,FileUploaderComponent) {
	"use strict";
	return Controller.extend("sap.ui.mcsuite.controller.FileUploader", {
		
		createUploader: function(view, areaID, allowedExtensions, uploadUrl) {
			var fileUploader = new FileUploaderComponent();
			var oFileUploader = fileUploader.createFileUploader(areaID, allowedExtensions, uploadUrl);
            view.byId(fileUploader.getAreaID()).addItem(oFileUploader);
		}

	});
});