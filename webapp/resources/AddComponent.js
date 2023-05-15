sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/m/MessageBox"
  ], function(UIComponent, MessageBox) {
    "use strict";
  
    return UIComponent.extend("mcsuite.AddComponent", {
      metadata: {
        properties: {
          
        }
      },
  
      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
      },

      createForm: function() {
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
      
        var oLocationSelect = new sap.m.Select({
          items: [
            new sap.ui.core.Item({ text: "Emplacement 1", key: "loc1" }),
            new sap.ui.core.Item({ text: "Emplacement 2", key: "loc2" }),
            new sap.ui.core.Item({ text: "Emplacement 3", key: "loc3" })
          ]
        });
      
        var oNameInput = new sap.m.Input({
          placeholder: "Nom"
        });
      
        var oDescriptionInput = new sap.m.Input({
          placeholder: "Description"
        });
      
        var oSubmitButton = new sap.m.Button({
          text: "Valider",
          press: function() {
            // Logique de traitement du formulaire
            var selectedType = oTypeSelect.getSelectedKey();
            var selectedLocation = oLocationSelect.getSelectedKey();
            var name = oNameInput.getValue();
            var description = oDescriptionInput.getValue();
      
            // Effectuez les actions nécessaires en fonction des valeurs soumises
            // Par exemple, ajouter des lignes dans les fichiers correspondants
            MessageBox.success("Component added successfully");
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
      
        return oForm;
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
      }                    
  
    });
  });