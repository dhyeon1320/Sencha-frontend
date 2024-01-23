Ext.define('MyApp230111.view.mydb.dbcontainer.DbCardContainer', {
    extend: 'Ext.Container',
    alias: 'widget.db-card-container',
    cls: 'db-card-container',
    layout: 'vbox',
    defaults: {
        cls: 'db-card-container-items'
    },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                cls: 'db-card-container-button'
            },
            items: [
                {
                    xtype: 'button',
                    text: '+ 나만의 DB 만들기',
                    cls: 'db-card-container-button mydbmakebutton',
                    handler: 'onCardButtonClicked'
                },
                {
                    xtype: 'button',
                    text: '생성일시순',
                    cls: 'db-card-container-button sortbutton',
                    menu: {
                        items: [
                            {
                                text: '생성일시순',
                                handler: function() {
                                    this.up('button').setText('생성일시순');
                                }
                            },
                            {
                                text: '이름순',
                                handler: function() {
                                    this.up('button').setText('이름순');
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            xtype: 'list',
            bind: {
                store: `{mydbsstore}`
            },
            itemConfig: {
                xtype: 'db-card',
                cls: 'db-cards',
                viewModel: true
            },

        }
    ]
})