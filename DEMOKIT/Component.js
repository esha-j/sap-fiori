// COMPONENT CONFIGURATION: Encapsulate all UI assets in a component that is independent from our index.html file. 
// Components are independent and reusable parts used in SAPUI5 applications. 
// Whenever we access resources, we will now do this relatively to the component (instead of relatively to the index.html). 
// This architectural change allows our app to be used in more flexible environments than our static index.html page, such as in a surrounding container like the SAP Fiori launchpad.

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, ResourceModel) => {
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {

        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },
        //    metadata : {
        //       "interfaces": ["sap.ui.core.IAsyncContentCreation"],
        //       "rootView": {
        //          "viewName": "ui5.walkthrough.view.App",
        //          "type": "XML",
        //          "id": "app"
        //       }
        //    },

        init() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            const oData = {
                recipient: {
                    name: "User"
                }
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set i18n model
            const i18nModel = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");

            
			// create the views based on the url/hash
			this.getRouter().initialize();
            
        }
    });
});
