Ext.define('Front.view.order.OrdersManager', {
    extend: 'Ext.grid.Panel',
    xtype: 'ordersmanager',
    store: 'AllOrders',
    
    title: 'OrdersManager',
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
                store: 'AllOrders',
                //dock: 'bottom',
                displayInfo: true
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
            text: 'OrderNumber',
        },
        {
            dataIndex: 'Status',
            text: 'Status'  
        }
    ]
});