sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zdepotportal.controller.stocktransferorder", {
            onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                this.oModel = this.getOwnerComponent().getModel();
                this.oRouter.getRoute("stocktransferorder").attachPatternMatched(this._onRouteMatched, this);
            },
            _onRouteMatched : function(oEvent){

            },
            onNavBack : function(oEvent){
                this.oRouter.navTo("Routemain");
            }
        });
    });
