Ext.define('FS2_01.view.phaseone.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.phaseone',
    viewModel: 'phaseone',
    controller: 'phaseone',
    title: 'GRID Phase One',
    width: '60%',
    height: '70%',
    layout: 'fit',
    tbar: [{
        text: 'Add',
        handler: 'onAdd'
    }],
    items: [{
        xtype: 'phaseone-grid',
        reference: 'phaseOndeGrid',
        bind: {
            store: '{users}'
        },
        listeners: {
            itemdblclick: 'onItemDblClick'
        }
    },{
        xtype: 'window',
        reference: 'phaseOndeForm',
        hidden: true,
        modal: true,
        width: 400,
        height: 200,
        items: [{
            xtype: 'phaseone-form'
        }],
        bbar: ['->',{
            text: 'Cancel',
            handler: 'onCancel'
        },{
            text: 'Save',
            handler: 'onSave'
        }]
    }]
});