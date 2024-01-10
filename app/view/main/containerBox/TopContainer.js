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
                    store: {
                        data: [
                            {id:1, title: '내신 2023년 서울 양천구 목동고 고2공통 1학기기말 수학1', progress: 'DB화 진행중'},
                            {id:2, title: '내신 2023년 서울 양천구 목동고 고1공통 1학기기말 수학상', progress: 'DB화 진행중'},
                            {id:3, title: '내신 2023년 부산 동래구 동인고 고2공통 2학기기말 미적분', progress: 'DB화 완료 및 추가결제 가능'},
                            {id:4, title: '내신 2023년 서울 양천구 목동고 고1공통 2학기중간 수학하', progress: 'DB화 완료 및 추가결제 가능'},
                            {id:5, title: '내신 2022년 서울 양천구 광영여고 고1공통 2학기기말 수학하', progress: 'DB화 완료 및 추가결제 가능'},
                            {id:6, title: '내신 2023년 안양 동안구 부흥고 고2공통 2학기중간 수학2', progress: 'DB화 완료 및 추가결제 가능'},
                            {id:7, title: '내신 2023년 서울 서대문구 이화금란고 고1공통 1학기중간 수학상', progress: 'DB화 완료 및 추가결제 가능'},
                        ]
                    },
                    itemConfig: {
                        xtype: 'card-component',
                        viewModel: true,
                        bind: {
                            html : '{id}',
                            html : '{title}',
                            html : '{progress}'
                        }

                    }
                }
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