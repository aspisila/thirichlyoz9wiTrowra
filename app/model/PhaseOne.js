Ext.define('FS2_01.model.PhaseOne', {
    extend: 'Ext.data.Model',
    fields: [
        'name',
        'address',
        'city',
        'state',
        'zipCode'
    ],
    proxy: {
        type: 'ajax',
        url: '/resources/data/users.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});