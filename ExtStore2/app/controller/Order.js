Ext.define('Front.controller.Order', {
    extend: 'Ext.app.Controller',

    stores: ['Orders', 'Cart'],
    models: ['Order', 'CartItem'],
    views: ['order.Orders', 'order.Cart', 'order.Order'],
    

    init: function() {
        this.control({
            'orders': {
                itemdblclick: this.Order
            },
            'button[action=onCreateOrder]': {
                click: this.onCreateOrder
            },
        });
    },

    Order: function(grid, record) {
        var view = Ext.widget('order');
        console.log(record.raw.OrderItems);
        view.down('form').loadRecord(record);
    },


    onCreateOrder: function(item) {
        var win    = item.up('grid');

        Ext.Ajax.request({
            url: 'Order/CreateOrder',
            method: 'POST',

            success: function(response, options){
                var data = Ext.decode(response.responseText);
                if(data.success){
                    win.getStore().load();
                }
                else{
                    Ext.Msg.alert('Ошибка','Ошибка');
                }
            }
        });
    },
})