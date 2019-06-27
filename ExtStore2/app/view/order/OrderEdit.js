Ext.define('Front.view.order.OrderEdit', {
    extend: 'Ext.window.Window',
    xtype: 'orderedit',
    //model: 'Order',
 
    title: 'Продукт',
    layout: 'fit',
    autoShow: true,
 
    initComponent: function() {
        var statuses = Ext.create('Ext.data.Store', {
            fields: ['status'],
            data : [
                {"status":"New"},
                {"status":"Progress"},
                {"status":"End"}
            ],
        });

        this.items = [{
                xtype: 'form',
                items: [
                    {
                        xtype: 'displayfield',
                        name : 'UserId',
                        fieldLabel: 'UserId'
                    },{
                        xtype: 'displayfield',
                        name : 'OrderDate',
                        fieldLabel: 'OrderDate'
                    },{
                        xtype: 'displayfield',
                        name : 'ShipmentDate',
                        fieldLabel: 'ShipmentDate'
                    },{
                        xtype: 'textfield',
                        name : 'OrderNumber',
                        fieldLabel: 'OrderNumber'
                    },{
                        xtype: 'combo',
                        name : 'Status',
                        store: statuses,
                        queryMode: 'local',
                        displayField: 'status',
                        valueField: 'status',
                        fieldLabel: 'Status'
                    }

                ]
            }];
        this.buttons = [
            {
                text: 'Сохранить',
                action: 'onUpdateOrder'
            },
            {
                text: 'Удалить',
                scope: this,
                action: 'onDeleteOrder'
            }
        ];
 
        this.callParent(arguments);
    }
});