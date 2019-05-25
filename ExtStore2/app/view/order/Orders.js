Ext.define('Front.view.order.Orders', {
    extend: 'Ext.grid.Panel',
    xtype: 'orders',
    store: 'Orders',
    model: 'Order',
    
    title: 'Orders',
    height: 500,

    beforeShow: function () {
        this.getStore().load();

        console.log('KEK', this.getStore());
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',

        items: [
            {
                xtype: 'button',
                text: 'Add Product',
                //action: 'onAdd'
            }
        ]
    }],

    columns: [
        {
            dataIndex: 'UserId',
            text: 'UserId'
        },
        {
            dataIndex: 'OrderDate',
            text: 'OrderDate'  
        },
        {
            dataIndex: 'ShipmentDate',
            text: 'ShipmentDate'  
        },
        {
            dataIndex: 'OrderNumber',
            text: 'OrderNumber'  
        },
        {
            dataIndex: 'Status',
            text: 'Status'  
        }
    ]
});