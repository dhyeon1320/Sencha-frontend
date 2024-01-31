Ext.define('MyApp230111.view.example.ExampleViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.example-view-controller',

    onCreateDialogButtonClicked: function () {
        Ext.create('MyApp230111.view.components.DialogExample').show();
    },


    onCreateDialog2ButtonClicked: function () {
        const view = this.getView();
        let dialog = this.DialogExample;

        if (!dialog || dialog.destroyed) {
            dialog = Ext.apply({
                ownerCmp: view
            }, view.dialogs.examleDialog );

            this.DialogExample = dialog = Ext.create(dialog);
        }

        dialog.show();
    },

    onGetValuesButtonClicked: function (button) {
        const formPanel = button.up();

        console.log(formPanel.getValues());
    }


})