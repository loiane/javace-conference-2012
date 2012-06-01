/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.Viewport',    
    
    layout: 'fit',
    
    requires: [
        'ExtMVC.view.contacts.StockForm',
        'ExtMVC.view.contacts.StockGrid',
        'Ext.ux.GMapPanel'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'stockform'
                }
            ]
        });
                
        me.callParent(arguments);
    }
});