Ext.define('MyApp230111.view.main.container.FolderCard', {
    extend: 'Ext.Container',
    alias: 'widget.folder-card',
    classCls: 'folder-card',
    items: [
        {
            iconCls: 'x-fa fa-folder',
            bind: {
                html: `({record.done}/{record.total})`
            }
        },
        {
            bind: {
                html: `{record.title}`
            }
        }
    ]
})