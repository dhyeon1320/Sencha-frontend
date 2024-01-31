Ext.define('MyApp230111.store.Notices', {
    extend: 'Ext.data.Store',
    alias: 'store.notices',
    storeId: 'notices',
    model: 'MyApp230111.model.Notice',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'app/src/data/Notices.json',
        reader: {
            type: 'json'
        }
    }
})