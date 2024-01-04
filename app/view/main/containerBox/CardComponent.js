Ext.define('MyApp.view.main.containerBox.CardComponent', {
    extend: 'Ext.Container',
    alias: 'widget.card-component',
    cls: 'card-component',
    controller: {
        type: 'card-component-controller'
    },
    layout: 'hbox',
    items: [
        {
            xtype: 'container',
            cls: 'card-text',
            items: [
                {
                    html: '수익: 해설',
                    cls: 'text-top'
                },
                {
                    html: '내신 2023년 서울 양천구 목동고 고2공통 1학기 기말 수학1',
                    cls: 'text-medium'
                },
                {
                    html: 'DB화 진행중',
                    cls: 'text-bottom'
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'card-image',
            items: [
                {
                    html: '내신',
                    cls: 'image-image'
                },
                {
                    xtype: 'button',
                    cls: 'image-button',
                    text: '해설 작성중',
                    handler: 'onCardButtonClicked'
                }
            ]
        }
    ]

});