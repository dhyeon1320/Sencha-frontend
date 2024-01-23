Ext.define('MyApp230111.view.components.TestfileCardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.testfile-card-controller',

    onTestfileButtonClicked: function(button) {
        const QuestionGroupId = this.getView().$bindings.itemId.lastValue
        this.redirectTo('my-paper-view/'+ QuestionGroupId, true)
    }
})