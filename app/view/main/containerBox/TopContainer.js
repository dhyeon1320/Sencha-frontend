Ext.define('MyApp.view.main.containerBox.TopContainer', {
    extend: 'Ext.Container',
    alias: 'widget.top-container',
    cls: 'top-container',
    controller: {
        type: 'top-container-controller'
    },
    viewModel: {
        type: 'top-container-viewmodel'
    },
    layout: 'hbox',
    items: [
        {
            xtype: 'container',
            cls: 'secondary-container left-container',
            align: 'center',
            scrollable: true,
            layout: 'vbox',
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'button',
                            bind:{
                                text: `{isChecked ? 'isLoading...' : 'active'}`,
                                disabled: '{isChecked}',
                                ui: `{isChecked ? 'disabled' : 'active'}`
                            },
                            handler: 'onToggleButtonClicked'
                        },
                        {
                            xtype: 'checkboxfield',
                            boxLabel: 'LoadingCheckBox',
                            bind:{
                                checked: '{isChecked}'
                            },
                            listeners: {
                                change: 'onCheckBoxChanged'
                            }
                        },
                    ]
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'textfield',
                            listeners: {
                                change: 'onTextChanged'
                            }
                        },
                        {
                            html: 'hello',
                            itemId: 'hideme',
                        }

                    ]
                },
                {
                    xtype: 'card-component',
                    itemId: 'card',
                    bind: {
                        hidden: '{isHidden}'
                    }
                },
                {
                    xtype: 'componentdataview',
                    layout:{
                        type: 'hbox'
                    },
                    bind: {
                        store: `{mydbsstore}`
                    },
                    itemConfig: {
                        xtype: 'card-component',
                        viewModel: true,
                    }
                },
            ]
        },
        {
            xtype: 'container',
            cls: 'secondary-container right-container',
            align: 'center',
            layout: 'hbox',
            items: [
                {
                    xtype: 'button',
                    cls: 'top-button',
                    text: '세번째',
                    ui: 'first-ui',
                    disabled: true,
                    handler: function () {
                        alert('세번째')
                    }
                },
                {
                    xtype: 'button',
                    cls: 'top-button',
                    text: '네번째',
                    handler: function () {
                        alert('네번째')
                    }
                }
            ]
        }
    ]
});