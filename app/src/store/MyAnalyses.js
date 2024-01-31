Ext.define('MyApp230111.store.MyAnalyses', {
    extend: 'Ext.data.Store',
    alias: 'store.myanalyses-store',
    storeId: 'myanalyses-store',
    model: 'MyApp230111.model.MyAnalysis',
    groupField: 'isComplete',
    sorters: [
        {
            property: 'id',
            direction: 'DESC'
        }
    ],
    proxy: {
        type: 'ajax',
        url: 'app/src/data/MyAnalyses.json',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true

})