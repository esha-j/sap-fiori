sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/library",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/library",
    "sap/m/Text"
], function (Controller, MessageToast, coreLibrary, Dialog, Button, mobileLibrary, Text) {
    "use strict";
    // shortcut for sap.m.ButtonType
    var ButtonType = mobileLibrary.ButtonType;

    // shortcut for sap.m.DialogType
    var DialogType = mobileLibrary.DialogType;

    // shortcut for sap.ui.core.ValueState
    var ValueState = coreLibrary.ValueState;

    return Controller.extend("ui5.walkthrough.controller.ButtonInputPanel", {
        onButtonClick() {
            // read msg from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("TextMsg", [sRecipient]);

            // show message
            MessageToast.show(sMsg);
        },

        onOpenDialog() {
            if (!this.oDefaultMessageDialog) {
                this.oDefaultMessageDialog = new Dialog({
                    type: DialogType.Message,
                    title: "Dialog Message",
                    content: new Text({
                        text: "Dialog Body. Click OK to close this dialog."
                    }),
                    beginButton: new Button({
                        type: ButtonType.Emphasized,
                        text: "OK",
                        press: function () {
                            this.oDefaultMessageDialog.close();
                        }.bind(this)
                    })
                });
            }

            this.oDefaultMessageDialog.open();
        }


        // async onOpenDialog() {
        //     // create dialog lazily
        //     this.oDialog ??= await this.loadFragment({
        //         name: "ui5.walkthrough.view.DialogButton"
        //     });

        //     this.oDialog.open();
        // },

        // onCloseDialog() {
        // 	// note: We don't need to chain to the pDialog promise, since this event handler
        // 	// is only called from within the loaded dialog itself.
        // 	this.byId("dialogButton").close();
        // }
    });
});