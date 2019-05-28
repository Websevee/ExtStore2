Ext.define('Front.view.order.OrderDetails', {
    extend: 'Ext.window.Window',
    xtype: 'orderdetails',
 
    //title: '',
    layout: 'fit',
    autoShow: true,
    //closable: false,

    initComponent: function() {
       
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
                        xtype: 'displayfield',
                        name : 'OrderNumber',
                        fieldLabel: 'OrderNumber'
                    },{
                        xtype: 'displayfield',
                        name : 'Status',
                        fieldLabel: 'Status'
                    }
                ],
                
                buttons: [
                    {
                        text: 'Close Order',
                        action: 'onDeleteOrder'
                    }, {
                        text: 'Cancel',
                        handler: function(){
                            this.up('window').close();
                        }
                    }
                ]
            }];
        this.callParent(arguments);
    }
});