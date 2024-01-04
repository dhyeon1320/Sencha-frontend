Ext.define('MyApp.view.main.containerBox.TopContainer', {
    extend: 'Ext.Container',
    alias: 'widget.top-container',
    cls: 'top-container',
    controller: {
        type: 'top-container-controller'
    },
    layout: 'hbox',
    items: [
        {
            xtype: 'container',
            cls: 'secondary-container',
            align: 'center',
            layout: 'vbox',
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'button',
                            cls: 'top-button',
                            text: '감추기',
                            handler: 'onHideButtonClicked'
                        },
                        {
                            xtype: 'button',
                            cls: 'top-button',
                            text: '나타내기',
                            handler: 'onSeekButtonClicked'
                        },
                    ]
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'checkboxfield',
                            label: 'hiddenSwitch',
                            listeners: {
                                change: 'onCheckChanged',
                                show: 'showCheckbox'
                            }
                        },
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
                    xtype: 'card-component'
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'secondary-container',
            align: 'center',
            layout: 'hbox',
            items: [
                {
                    xtype: 'button',
                    cls: 'top-button',
                    text: '세번째',
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