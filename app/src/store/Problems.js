Ext.define('MyApp230111.store.Problems', {
    extend: 'Ext.data.Store',
    alias: 'store.problems-store',
    storeId: 'problems-store',
    model: 'MyApp230111.model.Problem',
    proxy: {
        type: 'ajax',
        url: 'app/src/data/Problems.json',
        reader: {
            type: 'json',
        }
    },
    sorters: [{
        property: 'Id',
        direction: 'ASC'
    }],
    autoLoad: true
})