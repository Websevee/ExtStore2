Ext.define('Front.controller.Manager', {
    extend: 'Ext.app.Controller',

    views: ['manager.ListManager', 'manager.ProductManager'],
    stores: ['Products'],
    models: ['Product'],

    init: function() {
        this.control({
            'listmanager': {
                itemdblclick: this.editProduct
            },
            'button[action=onAdd]': {
                click: this.onAdd
            },
            'productmanager button[action=create]': {
                click: this.createProduct
            },
            'productmanager button[action=save]': {
                click: this.updateProduct
            },
            'productmanager button[action=delete]': {
                click: this.deleteProduct
            },
            'productmanager button[action=clear]': {
                click: this.clearForm
            }
        });
    },

    editProduct: function(grid, record) {
        var view = Ext.widget('productmanager');
        view.down('form').loadRecord(record);
    },

    onAdd: function() {
        Ext.widget('productmanager');
    },

    createProduct: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            type: 'json',
            url: '/Product/CreateNew',
            params: values,
            success: function(response, options){
                console.log(response.responseText == "");
                //console.log(response.responseText)
                var data=Ext.decode(response.responseText);
                if(data.success){
                    Ext.Msg.alert('Создание',data.message);
                    var store = Ext.widget('listmanager').getStore();
                    store.load();
                }
                else{
                    Ext.Msg.alert('Создание','Не удалось добавить книгу в библиотеку');
                }
            },
            failure: function(response, options){
                console.log(response)
            }
        });
    },

    updateProduct: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues(),
            id = form.getRecord().get('Id');
            values.id=id;
        Ext.Ajax.request({
            url: '/Product/EditItem',
            params: values,
            success: function(response){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    var store = Ext.widget('listmanager').getStore();
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
            id = form.getRecord().get('Id');
        Ext.Ajax.request({
            url: '/Product/DeleteItem',
            params: {id:id},
            success: function(response){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    Ext.Msg.alert('Удаление',data.message);
                    var store = Ext.widget('listmanager').getStore();
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
        button.up('productmanager').down('form').getForm().reset();
    }

    
})