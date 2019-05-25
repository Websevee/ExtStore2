Ext.define('Front.view.order.Order', {
    extend: 'Ext.window.Window',
    xtype: 'order',
 
    //title: '',
    layout: 'fit',
    autoShow: true,
    //closable: false,

    initComponent: function() {
        this.items = [{
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'UserId',
                        fieldLabel: 'UserId'
                    },{
                        xtype: 'textfield',
                        name : 'OrderDate',
                        fieldLabel: 'OrderDate'
                    },{
                        xtype: 'textfield',
                        name : 'ShipmentDate',
                        fieldLabel: 'ShipmentDate'
                    },{
                        xtype: 'textfield',
                        name : 'OrderNumber',
                        fieldLabel: 'OrderNumber'
                    },{
                        xtype: 'textfield',
                        name : 'Status',
                        fieldLabel: 'Status'
                    }
                ],
                
                buttons: [
                    {
                        text: 'Add to Cart',
                        action: 'onAddToCart'
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