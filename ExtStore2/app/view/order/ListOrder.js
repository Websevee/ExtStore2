Ext.define('Front.view.manager.ListManager', {
    extend: 'Ext.grid.Panel',
    xtype: 'listmanager',
    store: 'Products',
    
    title: 'ListManager',
    height: 500,

    beforeShow: function () {
        this.getStore().load();
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',

        items: [
            {
                xtype: 'button',
                text: 'Add Product',
                action: 'onAdd'
            }
        ]
    }],

    columns: [
        {
            dataIndex: 'ID',
            text: 'ID'
        },
        {
            dataIndex: 'Code',
            text: 'Code'  
        },
        {
            dataIndex: 'Name',
            text: 'Name'  
        },
        {
            dataIndex: 'Price',
            text: 'Price'  
        },
        {
            dataIndex: 'Category',
            text: 'Category'  
        }
    ]
});