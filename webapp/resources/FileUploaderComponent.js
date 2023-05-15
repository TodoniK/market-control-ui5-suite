sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/unified/FileUploader",
    "sap/m/MessageBox"
  ], function(UIComponent, FileUploader, MessageBox) {
    "use strict";
  
    return UIComponent.extend("mcsuite.FileUploaderComponent", {
      metadata: {
        properties: {
          areaID: { type: "string", defaultValue: "" },
          uploadUrl: { type: "string", defaultValue: "" },
          allowedFileTypes: { type: "string[]", defaultValue: [] }
        },
        events: {
          uploadComplete: {}
        }
      },
  
      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
      },
  
      setUploadUrl: function(sUploadUrl) {
        this.setProperty("uploadUrl", sUploadUrl);
      },
  
      getUploadUrl: function() {
        return this.getProperty("uploadUrl");
      },
  
      setAllowedFileTypes: function(aAllowedFileTypes) {
        this.setProperty("allowedFileTypes", aAllowedFileTypes);
      },
  
      getAllowedFileTypes: function() {
        return this.getProperty("allowedFileTypes");
      },

      setAreaID: function(sAreaID) {
        this.setProperty("areaID", sAreaID);
      },

      getAreaID: function() {
        return this.getProperty("areaID");
      },
  
      createFileUploader: function(areaID, allowedFileTypes, uploadUrl) {
        this.setAreaID(areaID);
        this.setAllowedFileTypes(allowedFileTypes);
        this.setUploadUrl(uploadUrl);

        var that = this;

        var fileUploader = new FileUploader({
            name: "fileUploader",
            uploadUrl: this.getUploadUrl(),
            fileType: this.getAllowedFileTypes(),
            buttonText: "Upload",

            change: function(oEvent) {
                var file = oEvent.getParameter("files")[0];
                var fileType = file.name.split(".");
                fileType = fileType[fileType.length - 1];

                if (that.getAllowedFileTypes().indexOf(fileType) === -1) {
                    MessageBox.error("Invalid file type. Allowed file types are: " + that.getAllowedFileTypes().join(","));
                    fileUploader.clear();
                } else {
                    fileUploader.upload();
                }
            },
            uploadComplete: function(oEvent) {
                var response = oEvent.getParameter("response");
                var status = oEvent.getParameter("status");

                if (status === 200) {
                    MessageBox.success("File uploaded successfully");
                    that.fireEvent("uploadComplete", { response: response });
                } else {
                    MessageBox.error("File upload failed. You are not authorized to upload files.");
                }
            }
        });
  
        return fileUploader;
      }
      
    });
});  