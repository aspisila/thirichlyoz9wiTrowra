/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Ext.app.Application',

    name: 'FS2_01',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has update! Do you wish to reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    requires: [
        // This will automatically load all classes in the FS2_01 namespace
        // so that application classes do not need to require each other.
        'FS2_01.*'
    ],

    // The name of the initial view to create.
    mainView: 'FS2_01.view.main.Main'
});

