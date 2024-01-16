Ext.define('MyApp230111.view.main.container.FolderContainer', {
    extend: 'Ext.Container',
    alias: 'widget.folder-container',
    cls: 'folder-container',
    items: [
        {
            xtype: 'componentdataview',
            cls:'card-container',
            layout: {
                type: 'hbox',
                wrap: true
            },
            bind: {
                store: `{foldersstore}`
            },
            itemConfig: {
                xtype: 'folder-card',
                cls: 'folder-cards',
                viewModel: true,
            }
        }
    ]
})