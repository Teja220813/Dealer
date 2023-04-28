sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/m/MessageToast",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("dpadmin.controller.home", {
            onInit: function () {
                      this._oTable = this.byId("table0");
            },
            onOpenAddDialog: function () {
                this.getView().byId("OpenDialog").open();
             },
             onCancelDialog: function (oEvent) {
                oEvent.getSource().getParent().close();
             },
             onCreate: function () {
                var oSo = this.getView().byId("idId").getValue();
                if (oSo !== "") {
                    const oList = this._oTable;
                        const oBinding = oList.getBinding("items");
                        const oContext = oBinding.create({
                            "Id": this.byId("idId").getValue(),
                            "Name": this.byId("idName").getValue(),
                            "Active": this.byId("idActive").getValue(),
                            "Description": this.byId("iddescription").getValue(),
                            "Category": this.byId("idcategory").getValue()      
                        });
                        oContext.created()
                        .then(()=>{
                                // that._focusItem(oList, oContext);
                                this.getView().byId("OpenDialog").close();
                        });
  
                }else {
                    MessageToast.show("So cannot be blank");
                }
    
            },
            onEditMode: function(){
                this.byId("editModeButton").setVisible(false);
                this.byId("saveButton").setVisible(true);
                this.byId("deleteButton").setVisible(true);
                this.rebindTable(this.oEditableTemplate, "Edit");
           },
           onDelete: function(){

            var oSelected = this.byId("table0").getSelectedItem();
            if(oSelected){
                var oLOvType = oSelected.getBindingContext("mainModel").getObject().Id;
            
                oSelected.getBindingContext("mainModel").delete("$auto").then(function () {
                    MessageToast.show(oLOvType + " SuccessFully Deleted");
                }.bind(this), function (oError) {
                    MessageToast.show("Deletion Error: ",oError);
                });
            } else {
                MessageToast.show("Please Select a Row to Delete");
            }
            
        },
        });
    });
