Ext.define('ExtMVC.store.Contacts', {
    extend: 'Ext.data.Store',

        model: 'ExtMVC.model.Contact',
        autoLoad: true,
        sorters: 'firstName',
        grouper: {
            groupFn: function(record) {
                return record.get('lastName')[0];
            }
        }, 
        proxy: {
            type: 'ajax',
            
            api: {
            	read: 'contacts/list',
            	create: 'contacts/create',
            	update: 'contacts/update',
            	destroy: 'contacts/delete'
            },
            
            reader: {
            	type: 'json',
            	root: 'data'
            },
            
            writer: {
                type: 'json',
                writeAllFields: true,
                encode: false,
                root: 'data'
            }
        }
});
