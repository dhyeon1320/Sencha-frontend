Ext.define('MyApp.store.MyDBs', {
    extend: 'Ext.data.Store',
    alias: 'store.mydbs-store',
    storeId: 'mydbs-store',
    model: 'MyApp.model.MyDB',
    proxy: {
        type: 'ajax',
        url: 'app/data/MyDBs.json',
        reader: {
            type: 'json',
        }
    },
    sorters: [{
        property: 'progress',
        direction: 'DESC'
    }],
    autoLoad: true
})