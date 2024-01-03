/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    width: '100%',
    cls: 'main-container',
    items: [
        {
            xtype: 'container',
            height: '100%',
            scrollable: true,
            cls: 'primary-container',
            items: [
                {
                    xtype: 'container',
                    cls: 'top-container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'container',
                            cls: 'secondary-container',                
                            align: 'center',
                            layout : 'vbox',
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
                                    itemId: 'hideme',
                                    html:'날 감춰봐 ㅋㅋㅋㅋㅋ'
                                }
                                
                                
                            ]
                        },
                        {
                            xtype: 'container',
                            cls: 'secondary-container',  
                            align: 'center',
                            layout : 'hbox',
                            items: [
                                {
                                    xtype: 'button',
                                    cls: 'top-button',
                                    text: '세번째',
                                    handler: function() {
                                        alert('세번째')
                                    }
                                },
                                {
                                    xtype: 'button',
                                    cls: 'top-button',
                                    text: '네번째',
                                    handler: function() {
                                        alert('네번째')
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    cls: 'bottom-container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'container',
                            cls: 'left-container',
                            layout : 'hbox',
                            defaults: {
                                xtype: 'button',
                                cls: 'left-button',
                                handler: 'onButtonClicked'
                            },
                            items: [
                                {
                                    text: '다섯번째',
                                },
                                {
                                    text: '여섯번째'
                                },
                                {
                                    text: '일곱번째',
                                },
                                {
                                    text: '여덟번째',
                                },
                                {
                                    text: '아홉번째',
                                },
                                {
                                    text: '열번째',
                                }
                            ] 
                        },
                        {
                            xtype: 'container',
                            items: [
                                {
                                    xtype: 'container',
                                    cls: 'right-container',
                                    items: [
                                        {
                                            xtype: 'button',
                                            text: '공지사항'
                                        }
                                    ]

                                },
                                {
                                    xtype: 'container',
                                    cls: 'right-container',
                                    items: [
                                        {
                                            xtype: 'button',
                                            text: '이벤트'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    cls: 'right-container',
                                    items: [
                                        {
                                            xtype: 'button',
                                            text: '기능 업데이트'
                                        }
                                    ]
                                }
                            ]
                            
                        }
                        
                    ]

                }

            ]
        }
        
    ]
});
