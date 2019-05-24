Ext.define('Front.controller.Cart', {
    extend: 'Ext.app.Controller',

    views: ['cart.Cart'],
    stores: ['CartItems'],
    models: ['CartItem'],

    
    init: function() {
        this.control({
        });
    },

    
})