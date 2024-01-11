Ext.define('MyApp230111.model.Testfile', {
    extend: 'MyApp230111.model.Base',
    fields: [
        { name: 'id', type: 'number' },
        { name: 'title', type: 'string' },
        { name: 'done', type: 'string' },
        { name: 'date', type: 'string' },
        { name: 'count', type: 'int' },
        { name: 'difficulty', type: 'number'}  
    ]
})