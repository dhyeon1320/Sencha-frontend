Ext.define('MyApp230111.view.example.ExampleView', {
    extend: 'Ext.Container',
    alias: 'widget.example-view',
    weighted: true,
    viewModel: {
        type: 'example-view-model'
    },
    controller: {
        type: 'example-view-controller'
    },
    scrollable: true,
    height: 870,
    items: {
        dialogButtons: {
            width: '100%',
            layout: 'hbox',
            items: [
                {
                    xtype: 'button',
                    text: '다이얼로그 만들기',
                    handler: 'onCreateDialogButtonClicked'
                }, {
                    xtype: 'button',
                    text: '다이얼로그 만들기2',
                    handler: 'onCreateDialog2ButtonClicked'
                }
            ]

        },
        tpls: {
            bind: {
                data: {
                    name: '{name}',
                    student: '{student}'
                }
            },
            tpl: `
                <div>안녕하세요 저의 이름은 {name} 입니다.</div>
                <div>지금 {student}님을 알려드리고 있습니다.</div>
            `
        },
        formPanel: {
            xtype: 'formpanelid',
        }
        // formPanel: {
        //     xtype: 'formpanel',
        //     items: [
        //         {
        //             xtype: 'fieldset',
        //             title: 'name',
        //             items: [
        //                 {
        //                     xtype: 'textfield',
        //                     name : 'firstName',
        //                     label: 'First Name'
        //                 },
        //                 {
        //                     xtype: 'textfield',
        //                     name : 'lastName',
        //                     label: 'Last Name'
        //                 }
        //             ]
        //         }, {
        //             xtype: 'emailfield',
        //             name: 'email',
        //             label: 'Email'
        //         }, {
        //             xtype: 'passwordfield',
        //             name: 'password',
        //             label: 'Password'
        //         },
        //         {
        //             xtype: 'button',
        //             text: 'getValues',
        //             handler: 'onGetValuesButtonClicked'
        //         }
        //     ]
        // }
    },

    dialogs: {
        examleDialog: {
            xtype: 'dialog-example'
        },
        submitDialog: {
            xtype: 'dialog-submit'
        }
    }
})