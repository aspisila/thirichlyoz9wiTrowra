Ext.define('FS2_01.view.phaseone.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.phaseone-grid',
    columns:[{
        text: 'Name',
        dataIndex: 'name',
        flex: 1
    },{
        text: 'Address',
        dataIndex: 'address'
    },{
        text: 'City',
        dataIndex: 'city',
    },{
        text: 'State',
        dataIndex: 'state'
    },{
        text: 'Zip Code',
        dataIndex: 'zipCode'
    }]
});