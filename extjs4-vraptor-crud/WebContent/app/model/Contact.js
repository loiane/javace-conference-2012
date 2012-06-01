Ext.define('ExtMVC.model.Contact', {
    extend: 'Ext.data.Model',

        fields: [
            'id',     
            'firstName',
            'lastName',
            'headshot',
            'twitter',
            'telephone',
            'city',
            'state',
            'country'
        ]
});