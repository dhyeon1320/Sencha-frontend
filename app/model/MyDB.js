Ext.define('MyApp230111.model.MyDB', {
    extend: 'MyApp230111.model.Base',
    fields: [
        { name: 'id', type: 'number' },
        { name: 'title', type: 'string' },
        { name: 'progress', type: 'int' },
        {
            name: 'transformTitle', calculate: function (data) {
                let title = data.title;
                title = title + ' progress: ' + data.progress;
                return title;
            }
        }

    ]
})