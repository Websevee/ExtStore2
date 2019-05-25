Ext.define('Front.view.store.Product', {
    extend: 'Ext.window.Window',
    xtype: 'product',
 
    layout: 'fit',
    minWidth: 300,
    autoShow: true,
    closable: false,

    
    
    initComponent: function() {
        this.items = [{
                xtype: 'form',
                items: [
                    {
                        xtype: 'displayfield',
                        name : 'Name',
                        fieldLabel: 'Название'
                    },
                    {
                        xtype: 'displayfield',
                        name : 'Price',
                        fieldLabel: 'Price'
                    },
                    {
                        xtype: 'displayfield',
                        name : 'Category',
                        fieldLabel: 'Category'
                    },
                    {
                        xtype: 'displayfield',
                        name : 'Code',
                        fieldLabel: 'Code'
                    },
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