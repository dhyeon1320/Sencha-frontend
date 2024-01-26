Ext.define('MyApp230111.view.mydb.MyDbView', {
    extend: 'Ext.Container',
    alias: 'widget.my-db-view',
    cls: 'my-db-view',
    scrollable: true,
    viewModel: {
        type: 'my-db-viewmodel'
    },
    controller: {
        onCardButtonClicked: function(button) {
            alert('db 만들기입니다');
        }
    },
    layout: 'hbox',
    items: [
        {
            xtype: 'side-panel'
        },
        {
            scrollable: true,
            height: '95%',
            width: '100%',
            weighted: true,
            items: {
                AdContainer:{
                    xtype:'ad-container'
                },
                MenuContainer:{
                    xtype:'container',
                    layout: 'hbox',
                    cls: 'menu-container',
                    items: [
                        {
                            html: '나만의 DB',
                            cls: 'menu-components'
                        },
                        {
                            xtype: 'button',
                            text: '작업공간',
                            iconCls: 'x-fa fa-folder',
                            cls: 'menu-components'
                        }
                    ]
                },
                FolderContainer:{
                    xtype: 'folder-container'
                },
                DbCardContainer:{
                    xtype: 'db-card-container'
                }
            }
        }
    ]
    
})