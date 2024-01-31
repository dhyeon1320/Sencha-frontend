Ext.define('MyApp230111.model.Notice', {
    extend: 'MyApp230111.model.Base',
    fields: [
        { name: 'id', type: 'number' },
        { name: 'headTitle', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'content', type: 'string' },
        { name: 'createdAt', type: 'date' },
        { name: 'isRead', type: 'boolean' }
    ]
})