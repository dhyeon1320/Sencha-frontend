Ext.define('MyApp.model.MyDB', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'number' },
        { name: 'title', type: 'string' },
        { name: 'progress', type: 'int' },
        { name: 'transformTitle', calculate: function (data) {
            let title = data.title;
            title = title + ' progress: ' + data.progress;
            return title;
        } }
        
    ]
})