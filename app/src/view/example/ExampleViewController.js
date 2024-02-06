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
        const formpanel = button.up('formpanelid');
        const formValues = formpanel.getValues();
        // viewmodel에 data를 넣을 때
        this.getViewModel().setData(formValues);

        // console에 data 나오게 만들기
        console.log(formValues);

        // dialog 나오게 만들기
        const view = this.getView();
        let submitdialog = this.DialogSubmit;

        if (!submitdialog || submitdialog.destroyed) {
            submitdialog = Ext.apply({
                ownerCmp: view
            }, view.dialogs.submitDialog);

            this.DialogSubmit = submitdialog = Ext.create(submitdialog);
        }
        // dialog에 data를 직접 삽입할 때
        // submitdialog.setData(formValues);
        submitdialog.show();
    },

    onCreateDialog3ButtonClicked: function () {
        const dialog = this.DialogExample;
        
        dialog.show();

    }

})