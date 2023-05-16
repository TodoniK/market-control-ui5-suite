sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/m/MessageBox",
  ], function(UIComponent, MessageBox) {
    "use strict";
  
      return UIComponent.extend("mcsuite.writeCodeShouldGoToController", {
        metadata: {
          properties: {
            areaID: { type: "string", defaultValue: "" },
          }
      },
  
      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
      },

      // Setters
      setAreaID: function(sAreaID) {
        this.setProperty("areaID", sAreaID);
      },

      // Getters
      getAreaID: function() {
        return this.getProperty("areaID");
      },

      createForm: function(areaID) {
        this.setAreaID(areaID);

        var oForm = new sap.ui.layout.form.Form({
          layout: new sap.ui.layout.form.GridLayout()
        });
      
        var oTypeSelect = new sap.m.Select();
        this.getComponents().then(function(components) {
          components.forEach(function(component) {
            var fileName = component.substring(component.lastIndexOf('/') + 1);
            var componentName = fileName.replace("Component.js", "");
            oTypeSelect.addItem(new sap.ui.core.Item({ text: componentName, key: componentName }));
          });
        });
      
        var aComponentIDs = this.getAreas();
        var oLocationSelect = new sap.m.Select();
        aComponentIDs.forEach(function(sID) {
          oLocationSelect.addItem(new sap.ui.core.Item({ text: sID, key: sID }));
        });
      
        var oNameInput = new sap.m.Input({
          placeholder: "Nom"
        });
      
        var oDescriptionInput = new sap.m.Input({
          placeholder: "Description"
        });

        var actualComponent = this;
      
        var oSubmitButton = new sap.m.Button({
          text: "Valider",
          press: function() {
            // Logique de traitement du formulaire
            var selectedType = oTypeSelect.getSelectedKey();
            var selectedLocation = oLocationSelect.getSelectedKey();
            var name = oNameInput.getValue();
            var description = oDescriptionInput.getValue();

            actualComponent.writeCodeShouldGoToController(selectedType, selectedLocation, name, description);
          }
        });
      
        var oFormContainer = new sap.ui.layout.form.FormContainer({
          formElements: [
            new sap.ui.layout.form.FormElement({
              label: "Type de composant",
              fields: [oTypeSelect]
            }),
            new sap.ui.layout.form.FormElement({
              label: "Emplacement",
              fields: [oLocationSelect]
            }),
            new sap.ui.layout.form.FormElement({
              label: "Nom",
              fields: [oNameInput]
            }),
            new sap.ui.layout.form.FormElement({
              label: "Description",
              fields: [oDescriptionInput]
            }),
            new sap.ui.layout.form.FormElement({
              fields: [oSubmitButton]
            })
          ]
        });
      
        oForm.addFormContainer(oFormContainer);

        var oPanel = new sap.m.Panel({
          headerText: "Dynamic Component Adder",
          content: [oForm]
        });
      
        return oPanel;
      },

      getComponents: async function() {
        try {
          var response = await fetch("resources/");
          var html = await response.text();
      
          var parser = new DOMParser();
          var doc = parser.parseFromString(html, "text/html");
      
          var links = doc.querySelectorAll('a');
          var components = [];
      
          links.forEach(function(link) {
            var href = link.getAttribute('href');
            var fileName = href.substring(href.lastIndexOf('/') + 1);
      
            if (fileName.endsWith("Component.js")) {
              components.push(href);
            }
          });

          return components;
        } catch (error) {
          MessageBox.error("Erreur lors de la récupération des composants");
          return [];
        }
      },

      getAreas: function() {
        var sViewPath = "/view/app.view.xml"; // Chemin vers le fichier app.view.xml
      
        var aComponentIDs = [];
      
        // Charger le fichier XML de manière synchrone
        var oXMLHttpRequest = new XMLHttpRequest();
        oXMLHttpRequest.open("GET", sViewPath, false);
        oXMLHttpRequest.send(null);
      
        var sXMLContent = oXMLHttpRequest.responseText;
      
        // Créer un objet XMLDocument à partir du contenu XML
        var oParser = new DOMParser();
        var oXMLDocument = oParser.parseFromString(sXMLContent, "application/xml");
      
        // Utiliser XPath pour extraire tous les IDs des composants
        var aResult = oXMLDocument.evaluate("//@id", oXMLDocument, null, XPathResult.ANY_TYPE, null);
        var oNode = aResult.iterateNext();
        while (oNode) {
          var sID = oNode.textContent;
          aComponentIDs.push(sID);
          oNode = aResult.iterateNext();
        }
        return aComponentIDs;
      },

      addCodeToController: function(code) {
        var filePath = "controller/App.controller.js";
        $.get(filePath, function(data) {
          var newCode = "\n  " + code + "\n";
          var result = data.replace("// Insert new code here", newCode);
          $.post(filePath, {data: result}, function() {
            console.log("Code ajouté avec succès !");
          });
        });
      },

      writeCodeShouldGoToController: function(type, location, name, description) {
        // Écrivez le code correspondant dans le fichier App.controller.js
        var code = "";
        switch (type) {
          case "button":
            code = 'buttonController.createButton(this.getView());';
            break;
          case "link":
            code = 'linkController.createLink(this.getView());';
            break;
          case "dropdown":
            code = 'dropdownController.createMenu(this.getView());';
            break;
          case "fileUploader":
            code = 'fileUploaderController.createUploader(this.getView());';
            break;
          case "add":
            code = 'addController.createMenu(this.getView());';
            break;
        }

        this.addCodeToController(code);
      }      
    });
  });