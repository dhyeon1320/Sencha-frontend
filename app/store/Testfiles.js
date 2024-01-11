Ext.define('MyApp230111.store.Testfiles', {
    extend: 'Ext.data.Store',
    alias: 'store.testfiles-store',
    storeId: 'testfiles-store',
    model: 'MyApp230111.model.Testfile',
    proxy: {
        type: 'ajax',
        url: 'app/data/Testfiles.json',
        reader: {
            type: 'json',
        }
    },
    sorters: [{
        property: 'title',
        direction: 'ASC'
    }],
    groupField: 'done',
    autoLoad: true
})