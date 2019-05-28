Ext.define('Front.view.product.ProductCreate', {
    extend: 'Ext.window.Window',
    xtype: 'productcreate',
 
    title: 'Продукт',
    layout: 'fit',
    autoShow: true,
 
    initComponent: function() {
        this.items = [{
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'Code',
                        fieldLabel: 'Code'
                    },{
                        xtype: 'textfield',
                        name : 'Name',
                        fieldLabel: 'Название'
                    },{
                        xtype: 'textfield',
                        name : 'Price',
                        fieldLabel: 'Price'
                    },{
                        xtype: 'textfield',
                        name : 'Category',
                        fieldLabel: 'Category'
                    },
                ]
            }];
        this.buttons = [
            {
                text: 'Создать',
                    action: 'create'
            }
        ];
 
        this.callParent(arguments);
    }
});