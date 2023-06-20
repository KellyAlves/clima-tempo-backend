const LocalesModel = {
    id:{
        name: 'id',
        primaryKey: true,
        notNull: true,
        type: 'INTEGER',
        maxLength: 11,
        position:0
    },
    nameLocales:{
        name: 'nameLocales',
        primaryKey: false,
        notNull: true,
        type: 'STRING',
        maxLength: 255,
        position: 1
    },
    state:{
        name: 'state', 
        primaryKey: false,
        notNull: true,
        type: 'CHAR',
        maxLength: 2,
        position: 2
    },
    latitude: {
        name: 'latitude',
        primaryKey: false,
        notNull: true,
        type: 'DOUBLE',
        maxLength: 10,
        position: 3
    },
    longitude: {
        name: 'longitude',
        primaryKey: false,
        notNull: true,
        type: 'DOUBLE',
        maxlength: 10,
        position: 4
    }
}
export {LocalesModel}