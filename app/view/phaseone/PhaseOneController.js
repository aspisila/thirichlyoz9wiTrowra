Ext.define('FS2_01.view.phaseone.PhaseOneController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.phaseone',
    
    onAdd: function() {
        this.getViewModel().set('currentRecord', Ext.create('FS2_01.model.PhaseOne'));
        this.getForm().show();
    },

    onItemDblClick: function(grid, record) {
        this.getViewModel().set('currentRecord', record);
        this.getForm().show();
    },

    onCancel: function() {
        this.getForm().hide();
    },

    onSave: function() {
        var me = this,
            record = me.getViewModel().get('currentRecord'),
            store = me.getGrid().getStore();

        me.getForm().hide();

        if(record.isPhantom()) {
            record.set('id', Math.random()); //fix duplicate id
            store.insert(0, record);
        }

        store.sync();
    },

    getForm: function() {
        return this.lookupReference('phaseOndeForm');
    },

    getGrid: function() {
        return this.lookupReference('phaseOndeGrid');
    }
});