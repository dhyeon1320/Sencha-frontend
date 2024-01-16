/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp230111.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes: {
        ':alias': {
            before: 'onBeforeRoute',
            action: 'onActionRoute'
        },

        'my-paper-view/:QuestionGroupId': {
            before: 'onBeforeQuestionGroupRoute',
            action: 'onActionQuestionGroupRoute'
        }
    },

    onBeforeRoute: function (alias, action) {
        const isExist = Ext.ClassManager.getByAlias('widget.' + alias);
        
        if (isExist) {
            action.resume();
        } else {
            alert('해당 '+ alias + '가 존재하지 않습니다');
            action.stop();
            window.history.back();
        }
    },
    
    onActionRoute: function (alias) {
        
        // 센터뷰를 찾는다.
        let centerView = this.getView().queryById('center-view');


        // 센터뷰를 비운다.
        centerView.removeAll();

        // alias 를 넣는다.
        centerView.add({xtype: alias});
    },
    
    onBeforeQuestionGroupRoute: function (QuestionGroupId, action) {
        const isExist = Ext.ClassManager.getByAlias('widget.my-paper-view/'+ QuestionGroupId);

        if (isExist) {
            action.resume();
        } else {
            alert('문제가 아직 존재하지 않습니다');
            action.stop();
            window.history.back();
        }
    },

    onActionQuestionGroupRoute: function (QuestionGroupId) {
        let centerView = this.getView().queryById('center-view');
        
        centerView.removeAll();

        centerView.add({xtype: 'my-paper-view/'+ QuestionGroupId})
    }


});
