Ext.define('MyApp230111.model.Problem', {
    extend: 'MyApp230111.model.Base',
    fields: [
        {name: 'Id', type: 'number'},
        {name: 'QuestionFileUrl', type: 'string', mapping: data => 'http://mathsecr-stage.postmath.co.kr' + data.QuestionFileUrl },
        {name: 'ExplanationFileUrls', type: 'auto'},
        {name: 'QuestionGroupId', type: 'string'},
        {name: 'Code', type: 'string'},
        {name: 'Description', type: 'string'},
        {name: 'Descriptions', type: 'string', mapping: function(data) {
            let line = data.Descriptions.substring(1);
            line = line.replace(/\//g, '>')
            return line
        }},
        {name: 'OcrData', type: 'string'}
    ]
})
