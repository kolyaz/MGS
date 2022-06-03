// Combo для type

const typeGrid= (state, items, value)=> {
    console.log(value)
    $("#typeGrid").jsGrid({
        width: "100%",
        height: "auto",
        inserting: true,
        editing: false,
        sorting: true,
        paging: true,
        data:value,


        controller: {
            insertItem:  function(item) { 
                state.socket.send(JSON.stringify({
                    operation: 'addType',
                    token: state.token,
                    name: item.type,
                    id: items.id,
                }));
                return; 
            },

            deleteItem: function(item) {
                state.socket.send(JSON.stringify({
                    operation: 'deleteType',
                    token: state.token,
                    type_id:item.id,
                    id:items.id,
                }));
                return;
            },

        },

        fields: [
            { name: "type", type: "text", width: 100, editing: false },
            { type: "control", editButton: false, },
        ]
    });
}

export { typeGrid }
