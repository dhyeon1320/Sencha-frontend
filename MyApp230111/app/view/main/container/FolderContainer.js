Ext.define('MyApp230111.view.main.container.FolderContainer', {
    extend: 'Ext.Container',
    alias: 'widget.folder-container',
    cls: 'folder-container',
    items: [
        {
            xtype: 'componentdataview',
            layout: {
                type: 'hbox'
            },
            bind: {
                store: `{foldersstore}`
            },
            itemConfig: {
                xtype: 'folder-card',
                viewModel: true
            }
        }
    ]
})