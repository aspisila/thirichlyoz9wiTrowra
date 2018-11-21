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
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        api: {
            read: '/resources/data/users.json',
            create: '/resources/data/create.json',
            update: '/resources/data/update.json'
        }
    }
});