Ext.define('MyApp230111.model.MyAnalysis', {
    extend: 'MyApp230111.model.Base',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'standardCount', type: 'int' },
        { name: 'analysisCount', type: 'int' },
        { name: 'createdAt', type: 'date' },
        { name: 'completedAt', type: 'date' },
        { name: 'isComplete', type: 'boolean', calculate: data => !!data.completedAt }
    ]
})