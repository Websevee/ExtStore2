Ext.application({
    name: 'Front',
    
    //autoCreateViewport: true,
    
    models: ['Product'],    
    stores: ['Products'],

    controllers: ['User', 'Product', 'Store', 'Order'],
    

    launch: function () {
        Ext.Ajax.request({
            url: '/Account/IsAuthenticated',
            success: function(response, options){
                var data=Ext.decode(response.responseText);

                if(data.success){
                    Ext.widget('main');
                    localStorage.setItem('user', data.admin);
                }
                else{
                    Ext.widget('login');
                }
            },
            failure: function(){
                Ext.widget('login');
            }

        });
    }
});