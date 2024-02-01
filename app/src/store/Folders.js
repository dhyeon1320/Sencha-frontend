Ext.define('MyApp230111.store.Folders', {
    extend: 'Ext.data.Store',
    alias: 'store.folders-store',
    storeId: 'folders-store',
    model: 'MyApp230111.model.Folder',
    proxy: {
        type: 'ajax',
        url: 'app/src/data/Folders.json',
        reader: {
            type: 'json',
        }
    },
    sorters: [{
        property: 'title',
        direction: 'ASC'
    }],
    autoLoad: true
})