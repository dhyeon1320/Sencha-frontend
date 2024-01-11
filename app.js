/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyApp230111.Application',

    name: 'MyApp230111',

    requires: [
        // This will automatically load all classes in the MyApp230111 namespace
        // so that application classes do not need to require each other.
        'MyApp230111.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyApp230111.view.main.Main'
});
