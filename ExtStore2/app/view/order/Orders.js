Ext.define('Front.view.order.Orders', {
    extend: 'Ext.grid.Panel',
    xtype: 'orders',
    store: 'Orders',
    model: 'Order',
    
    title: 'Orders',
    height: 500,

    filterable: true,

    initComponent: function () {
        var parent = this;
        var atext = Ext.widget('textfield');
        atext.value = "";
        atext.fieldLabel = 'Status';

        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',

            items: [
                {
                    xtype: atext,
                },
                {
                    xtype: 'button',
                    text: 'Status',
                    handler: function(){
                        parent.getStore().clearFilter(true);
                        parent.getStore().filter('Status', atext.value);
                    }
                }
            ]
        }],
        this.callParent();
    },
    
    beforeRender: function () {
        this.getStore().load();
    },

    columns: [
        {
            dataIndex: 'Status',
            text: 'Status',
            filterable: true,
            filter: {
                type: 'string'
            }
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
    ],

    
});