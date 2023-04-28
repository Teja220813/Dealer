sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zdepotportal.controller.main", {
            onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                this.oModel = this.getOwnerComponent().getModel();
                this.oRouter.getRoute("Routemain").attachPatternMatched(this._onRouteMatched, this);
            },
            _onRouteMatched:function(oEvent){

            },
            handleGoodsReceipt : function(oEvent){
                this.oRouter.navTo("goodsreceipt");
            },
            handleInvoiceProcess : function(oEvent){
                this.oRouter.navTo("invoiceprocess");
            },
            handleInvoiceReportPrint:function(oEvent){
                this.oRouter.navTo("invoicereportprint");
            },
            handleStockTransferOrder:function(oEvent){
                this.oRouter.navTo("stocktransferorder");
            },
            handleStockTransferInvoice:function(oEvent){
                this.oRouter.navTo("stocktransferinvoice");
            },
            handleStockTransferInvoiceReport:function(oEvent){
                this.oRouter.navTo("stocktransferinvoicereport");
            }
        });
    });
