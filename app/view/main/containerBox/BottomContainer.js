Ext.define('MyApp.view.main.containerBox.BottomContainer', {
    extend: 'Ext.Container',
    alias: 'widget.bottom-container',
    cls: 'bottom-container',
    controller: {
        type: 'bottom-container-controller'
    },
    layout: 'hbox',
    items: [
        {
            xtype: 'container',
            cls: 'left-container',
            layout: 'hbox',
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
            defaults: {
                xtype: 'container',
                cls: 'right-container',
            },
            items: [
                {
                    items: [
                        {
                            xtype: 'button',
                            text: '공지사항',
                            handler: 'onButtonClicked'
                        }
                    ]

                },
                {
                    items: [
                        {
                            xtype: 'button',
                            text: '이벤트',
                            handler: 'onButtonClicked'
                        }
                    ]
                },
                {
                    items: [
                        {
                            xtype: 'button',
                            text: '기능 업데이트',
                            handler: 'onButtonClicked'
                        }
                    ]
                }
            ]
        }
    ]
});