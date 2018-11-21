Ext.define('FS2_01.view.phaseone.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.phaseone-form',
    bodyPadding: 10,
    defaults: {
        xtype: 'textfield',
        anchor: '100%'
    },
    items:[{
        fieldLabel: 'Name',
        bind: '{currentRecord.name}'
    },{
        fieldLabel: 'Address',
        bind: '{currentRecord.address}'
    },{
        fieldLabel: 'City',
        bind: '{currentRecord.city}'
    },{
        fieldLabel: 'State',
        bind: '{currentRecord.state}'
    },{
        fieldLabel: 'Zip Code',
        bind: '{currentRecord.zipCode}'
    }]
});