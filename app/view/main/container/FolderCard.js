Ext.define('MyApp230111.view.main.container.FolderCard', {
    extend: 'Ext.Container',
    alias: 'widget.folder-card',
    classCls: 'folder-card',
    items: [
        {
            bind: {
                html: `<i class="x-fa fa-folder"></i> ({record.done}/{record.total})`
            }
        },
        {
            bind: {
                html: `{record.title}`
            }
        }
    ]
})