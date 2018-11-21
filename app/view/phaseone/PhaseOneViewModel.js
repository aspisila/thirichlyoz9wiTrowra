Ext.define('FS2_01.view.phaseone.PhaseOneViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.phaseone',
    data: {
        currentRecord: null
    },
    stores: {
        users: {
            model: 'FS2_01.model.PhaseOne',
            autoLoad: true
        }
    }
});