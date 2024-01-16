Ext.define('MyApp230111.view.main.container.DbCard', {
    extend: 'Ext.Container',
    alias: 'widget.db-card',
    classCls: 'db-card',
    controller: {
        type: 'db-card-controller'
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
                    bind: {
                        html: `{record.title}`
                    },
                    cls: 'text-medium'
                },
                {
                    bind: {
                        html: `{record.transformTitle}`
                    },
                    cls: 'text-medium'
                },
                {
                    bind: {
                        html: `{record.progress}`
                    },
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