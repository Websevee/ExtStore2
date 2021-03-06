Ext.define('Front.controller.Store', {
    extend: 'Ext.app.Controller',

    stores: ['Products'],
    models: ['Product'],
    views: ['product.Store', 'product.ProductDetails'],
    
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
        var view = Ext.widget('productdetails');
        view.down('form').loadRecord(record);
        view.setTitle('ID: ' + record.data.ProductId);
    },

    onAddToCart: function (button) {
        var win    = button.up('window');
        form   = win.down('form');
        id = form.getRecord().get('ProductId');

        Ext.Ajax.request({
            url: 'Order/AddCartItem',
            params: {productId:id},
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