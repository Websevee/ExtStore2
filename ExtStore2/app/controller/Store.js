Ext.define('Front.controller.Store', {
    extend: 'Ext.app.Controller',

    stores: ['Products'],
    models: ['Product'],
    views: ['store.Store', 'store.Product'],
    

    init: function() {
        this.control({
            'store': {
                itemdblclick: this.Product
            },
            'button[action=onAddToCart]': {
                click: this.onAddToCart
            },
        });
    },

    Product: function(grid, record) {
        var view = Ext.widget('product');
        view.down('form').loadRecord(record);
        view.setTitle('ID: ' + record.data.Id);
    },


    onAddToCart: function (button) {
        var win    = button.up('window');
        form   = win.down('form');
        id = form.getRecord().get('Id');

        Ext.Ajax.request({
            url: '/ShoppingCart/AddToCart/',
            params: {id:id},
            success: function(response, options){
                var data = Ext.decode(response.responseText);
                if(data.success){
                    win.destroy();     
                    Ext.widget('main'); 
                    console.log('TRUE');
                }
                else{
                    Ext.Msg.alert('Ошибка','Ошибка');
                }
            }
        });
    }
})