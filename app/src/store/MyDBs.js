Ext.define('MyApp230111.store.MyDBs', {
    extend: 'Ext.data.Store',
    alias: 'store.mydbs-store',
    storeId: 'mydbs-store',
    model: 'MyApp230111.model.MyDB',
    proxy: {
        type: 'ajax',
        url: 'app/src/data/MyDBs.json',
        reader: {
            type: 'json',
        }
    },
    sorters: [{
        property: 'title',
        direction: 'DESC'
    }],

    grouper: {
        property: 'progress'
    },
    autoLoad: true
})