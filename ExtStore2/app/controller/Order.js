Ext.define('Front.controller.Order', {
    extend: 'Ext.app.Controller',

    stores: ['Orders', 'Cart', 'AllOrders'],
    models: ['Order', 'CartItem'],
    views: ['order.Orders', 'order.Cart', 'order.OrderEdit', 'order.OrderDetails', 'order.OrdersManager',],
    

    init: function() {
        this.control({
            'orders': {
                itemdblclick: this.Order
            },
            'ordersmanager': {
                itemdblclick: this.OrderManager
            },
            'button[action=onCreateOrder]': {
                click: this.createOrder
            },
            'button[action=onDeleteOrder]': {
                click: this.deleteOrder
            },
            'button[action=onUpdateOrder]': {
                click: this.updateOrder
            }
        });
    },

    Order: function(grid, record) {
        var view = Ext.widget('orderdetails');
        view.down('form').loadRecord(record);
        view.setTitle('ID: ' + record.data.OrderId);
    },

    OrderManager: function(grid, record) {
        var view = Ext.widget('orderedit');
        view.down('form').loadRecord(record);
        view.setTitle('ID: ' + record.data.OrderId);
    },


    createOrder: function(item) {
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

    updateOrder: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();
            model = form.getRecord().data;
            model.OrderNumber = values.OrderNumber;
            model.Status = values.Status;

            console.log(model);

        Ext.Ajax.request({
            url: '/Order/Edit',
            params: model,
            success: function(response){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    var store = Ext.widget('ordersmanager').getStore();
                    store.load();
                    Ext.Msg.alert('TRUE!','Успех!');
                }
                else{
                    Ext.Msg.alert('Обновление','Не удалось обновить книгу в библиотеке');
                }
            }
        });
    },

    deleteOrder: function(item) {
        var win     = item.up('window'),
            values  = win.down('form').getRecord();

            console.log(localStorage.getItem('user'));

            if (localStorage.getItem('user') == "true" || values.get('Status') == 'New')
            {
                Ext.Ajax.request({
                    url: 'Order/Delete',
                    params: {id: values.get('OrderId')},
                    method: 'POST',
                    

                    success: function(response, options){
                        var data = Ext.decode(response.responseText);
                        if(data.success){
                            var store = Ext.widget('ordersmanager').getStore().load();
                            store.load();
                            store = Ext.widget('orders').getStore().load();
                            store.load();
                            win.close();
                        }
                        else{
                            Ext.Msg.alert('Ошибка','Ошибка');
                        }
                    }
                });
            }
            else
            {
                Ext.Msg.alert('Ошибка','Заказ уже выполняется или выполнен');
            }
    }
})