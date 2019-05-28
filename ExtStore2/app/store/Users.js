Ext.define('Front.store.Users', {
    extend: 'Ext.data.Store',
    model: 'Front.model.User',

    autoLoad: true,
    autoSync: true,
    pageSize: 15,

    proxy: {
        type: 'ajax',
        url: 'Account/GetUsers',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    },
/*
    filters: [{
        property: 'Status',
        value: 'New'
    }]*/
});