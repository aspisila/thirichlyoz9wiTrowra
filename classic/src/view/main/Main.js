/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FS2_01.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    controller: 'main',

    items: [{
        xtype: 'menubar',
        dock: 'bottom',
        items: [{
            text: 'File',
            menu: [
                {text: 'Open...'},
                '-',
                {text: 'Close'}
            ]
        }, {
            text: 'Edit',
            menu: [
                {text: 'Cut'},
                {text: 'Copy'},
                {text: 'Paste'}
            ]
        },
            {
                text: 'Grid Window',
                to: 'phaseone' // flag used by Maincontroller = xtype of window
            }
        ],
        listeners: {
            click: 'onMenuClick' // = Method in the MainController
        }
    }]

});
