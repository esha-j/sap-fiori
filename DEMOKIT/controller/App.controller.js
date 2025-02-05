// The handling of the button's press event is implemented in the controller of the view.

// 1. Controller names are capitalized
// 2. Controllers carry the same name as the related view (if there is a 1:1 relationship)
// 3. Event handlers are prefixed with on
// 4. Controller names always end with *.controller.js

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    // Replacing Alert with Message Toast
    "sap/m/MessageToast"
    // //  Creating Model 
    // "sap/ui/model/json/JSONModel",
    // // Adding for Translatable Texts - i18n 
    // "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
        // Moved to Component.js
        // onInit() {
        //     // set data model on view
        //     const oData = {
        //         recipient: {
        //             name: "World"
        //         }
        //     };
        //     const oModel = new JSONModel(oData);
        //     this.getView().setModel(oModel);


        //     // set i18n model on view
        //     const i18nModel = new ResourceModel({
        //         bundleName: "ui5.walkthrough.i18n.i18n"
        //     });
        //     this.getView().setModel(i18nModel, "i18n");
        // },  
        // Moved to Component.js

        // onButtonClick() {
        //     // show a native JavaScript alert
        //     //   alert("Learning UI5 !!! ");
        //     // MessageToast.show("Message Toast: Hello");

        //     const oBundle = this.getView().getModel("i18n").getResourceBundle();
        //     const sRecipient = this.getView().getModel().getProperty("/recipient/name");
        //     const sMsg = oBundle.getText("TextMsg", [sRecipient]);

        //     // show message
        //     MessageToast.show(sMsg);
        // }
    });
});