Ext.define('FS2_01.view.phaseone.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.phaseone',
    viewModel: 'phaseone',
    title: 'GRID Phase One',
    width: '60%',
    height: '70%',
    layout: 'fit',
    items: [{
        xtype: 'phaseone-grid',
        reference: 'phaseOndeGrid',
        bind: {
            store: '{users}' //here is done the link with ViewModel... we do not use a normal store (/stores/Users.js), we use the ViewModel
        }
    }]
});