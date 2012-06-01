Ext.define('ExtMVC.view.contacts.StockForm', {
	extend: 'Ext.form.Panel',
	alias : 'widget.stockform',

	requires: [
		'ExtMVC.view.contacts.StockGrid',
		'ExtMVC.view.contacts.MapPanel'
	],

	title: 'Address Book',
    frame: true,
    bodyPadding: 5,

    fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    items: [
        {
        
        layout: {type: 'hbox', align: 'stretch'},
        flex: 3,
        border: false,
        bodyStyle: 'background-color: transparent',
        
        items: [{
        	xtype: 'stockgrid'
        }, {
            flex: 0.4,
            layout: {
                type: 'vbox',
                align:'stretch'
            },
            margin: '0 0 0 5',
            title: 'Photo',
            items: [{
            	xtype: 'box',
            	height: 150,
            	frame: false,
                html: '<img id="pic" src="resources/images/headshots/loiane-groner.png"></img>'
            },{
                margin: '5',
                xtype: 'fieldset',
                flex: 1,
                title:'Information',
                defaults: {
                    width: 240,
                    labelWidth: 90,
                    editable: true
                },
                defaultType: 'textfield',
                items: [{
                    fieldLabel: 'firstName',
                    name: 'firstName',
                    xtype: 'textfield'
                },{
                    fieldLabel: 'lastName',
                    name: 'lastName'
                },{
                    fieldLabel: 'twitter',
                    name: 'twitter'
                },{
                    fieldLabel: 'telephone',
                    name: 'telephone',
                    xtype: 'textfield'
                },{
                    fieldLabel: 'city',
                    name: 'city',
                    xtype: 'textfield'
                },{
                    fieldLabel: 'state',
                    name: 'state'
                },{
                    fieldLabel: 'country',
                    name: 'country'
                }]
            }, {xtype:'mappanel'}]
        }]
    }]
});
