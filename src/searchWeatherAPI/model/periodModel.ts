const periodModel= {
    periodBegin: {
        name: 'periodBegin',
        notNull: false,
        type: 'STRING',
        maxLength: 10,
        position: 0
    },
    periodEnd: {
        name: 'periodEnd',
        notNull: false,
        type: 'STRING',
        maxLength: 10,
        position: 1
    }
}
export {periodModel}