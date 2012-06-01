Ext.define('ExtMVC.view.contacts.MapPanel', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.mappanel',
	
	requires: ['Ext.ux.GMapPanel'],
	
	layout: 'fit',
    title: 'Mapa',
    border: false,
    x: 40,
    y: 60,
    height:200,
    items: {
        xtype: 'gmappanel',
        center: {
            geoCodeAddr: 'Sao Paulo, Brazil'
        }
    }
});	