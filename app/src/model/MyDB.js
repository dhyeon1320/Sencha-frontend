Ext.define('MyApp230111.model.MyDB', {
    extend: 'MyApp230111.model.Base',
    fields: [
        { name: 'id', type: 'number' },
        { name: 'title', type: 'string' },
        { name: 'createdAt', type: 'date'},
        { name: 'updatedAt', type: 'date'},
        { name: 'isRecent', type: 'boolean', calculate: function (data) {
            let date = data.updatedAt || data.createdAt;
            const days = (new Date() - date) / (24 * 60 * 60 * 1000);

            return days <= 7;
        }},
        { name: 'questionCount', type: 'int'},
        { name: 'explanationCount', type: 'int'},
        { name: 'paidQuestionCount', type: 'int'},
        { name: 'paidExplanationCount', type: 'int'},
        // { name: 'hmlQuestionCount', type: 'int'}, // 완료된 문제 개수
        // { name: 'hmlExplanationCount', type: 'int'}, // 완료된 해설 개수
        { name: 'sourceTypeCode', type: 'int'},
        { name: 'source', convert: function (data) {
            if (data) {
                switch (data.sourceTypeCode) {
                    case 0 : data.sourceTypeName = '학교시험'; break;
                    case 1 : data.sourceTypeName = '공공 모의고사'; break;
                    case 2 : data.sourceTypeName = '학교 보충자료'; break;
                    case 3 : data.sourceTypeName = '시중교재'; break;
                    case 4 : data.sourceTypeName = '사설 모의고사'; break;
                    case 5 : data.sourceTypeName = '개인자료'; break;
                    default: data.sourceTypeName = '일반'; break;
                }
            }
            return data;
        }},
        { name: 'averageDifficulty', type: 'number'},
        { name: 'checked', type: 'boolean', defaultValue: false, persist: false},
        { name: 'progress', type: 'int'},
        {
            name: 'transformTitle', calculate: function (data) {
                let title = data.title;
                title = title + ' progress: ' + data.progress;
                return title;
            }
        },
        { name: 'isRejected', type: 'boolean'},
        { name: 'isQuickAnswers', type: 'boolean'},
        { name: 'rejectComment', type: 'string'}

    ]
})