Ext.define('Front.view.user.UsersManager', {
    extend: 'Ext.grid.Panel',
    xtype: 'usersmanager',
    store: 'Users',
    
    title: 'Users Manager',
    height: 500,
    width: 600,

    beforeShow: function () {
        this.getStore().load();
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',

        items: [
            {
                xtype: 'pagingtoolbar',
                store: 'Users',
                //dock: 'bottom',
                displayInfo: true
            }
        ]
    }],

    columns: [
        {
            dataIndex: 'Email',
            text: 'Email'
        },
        {
            dataIndex: 'Name',
            text: 'Name'  
        },
        {
            dataIndex: 'Address',
            text: 'Address'  
        },
        {
            dataIndex: 'Code',
            text: 'Code'  
        },
        {
            dataIndex: 'Disount',
            text: 'Disount'  
        }
    ]
});