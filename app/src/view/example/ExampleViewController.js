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
    },

    onSubmitButtonClicked: function (button) {
        // console에 나오게 만들기
        const formpanel = button.up('formpanelid');
        console.log(formpanel.getValues());

        // dialog 나오게 만들기
        const view = this.getView();
        let submitdialog = this.DialogSubmit;

        if (!submitdialog || submitdialog.destroyed) {
            submitdialog = Ext.apply({
                ownerCmp: view
            }, view.dialogs.submitDialog);

            this.DialogSubmit = submitdialog = Ext.create(submitdialog);
        }

        submitdialog.setData(formpanel.getValues())
        submitdialog.show();
    }

})