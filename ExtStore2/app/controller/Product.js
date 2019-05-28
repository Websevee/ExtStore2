Ext.define('Front.controller.Product', {
    extend: 'Ext.app.Controller',

    views: ['product.ProductsManager', 'product.ProductEdit', 'product.ProductCreate'],
    stores: ['Products'],
    models: ['Product'],

    init: function() {
        this.control({
            'productsmanager': {
                itemdblclick: this.editProduct
            },
            'button[action=onAdd]': {
                click: this.onAdd
            },
            'productcreate button[action=create]': {
                click: this.createProduct
            },
            'productedit button[action=save]': {
                click: this.updateProduct
            },
            'productedit button[action=delete]': {
                click: this.deleteProduct
            },
            'productedit button[action=clear]': {
                click: this.clearForm
            }
        });
    },

    editProduct: function(grid, record) {
        var view = Ext.widget('productedit');
        view.down('form').loadRecord(record);
        view.setTitle('ID: ' + record.data.ProductId);
    },

    onAdd: function() {
        var product = 'productcreate'
        Ext.widget(product);
    },

    createProduct: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            type: 'json',
            url: '/Product/Create',
            params: values,
            success: function(response, options){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    Ext.Msg.alert('Создание',data.message);
                    var store = Ext.widget('productsmanager').getStore();
                    store.load();
                }
                else{
                    Ext.Msg.alert('Создание','Не удалось добавить книгу в библиотеку');
                    console.log(response, options, data)
                }
            },
            failure: function(response, options){
                var data=Ext.decode(response.responseText);
                console.log(response, options, data)
            }
        });
    },

    updateProduct: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues(),
            id = form.getRecord().get('ProductId');
            values.ProductId=id;
        Ext.Ajax.request({
            url: '/Product/Edit',
            params: values,
            success: function(response){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    var store = Ext.widget('productsmanager').getStore();
                    store.load();
                    Ext.Msg.alert('Обновление',data.message);
                }
                else{
                    Ext.Msg.alert('Обновление','Не удалось обновить книгу в библиотеке');
                }
            }
        });
    },

    deleteProduct: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            id = form.getRecord().get('ProductId');
        Ext.Ajax.request({
            url: '/Product/Delete',
            params: {id:id},
            success: function(response){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    Ext.Msg.alert('Удаление',data.message);
                    var store = Ext.widget('productsmanager').getStore();
                    store.load();
                }
                else{
                    Ext.Msg.alert('Удаление','Не удалось удалить книгу из библиотеки');
                }
                win.close()
            }
        });
    },

    clearForm: function(button, record) {
        button.up('productedit').down('form').getForm().reset();
    }

    
})