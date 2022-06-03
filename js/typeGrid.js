// Combo для выбора локаций

const typeGrid= (state)=> {
    const data = state.locationsList
    $(".type").jsGrid({
        width: "100%",
        height: "auto",
        inserting: true,
        editing: false,
        sorting: true,
        paging: true,
        data,


        controller: {
            insertItem:   function(item) { 
                state.socket.send(JSON.stringify({
                    operation: 'addLocation',
                    token: state.token,
                    name:item.name
                }));
                return; 
            },

            deleteItem: function(item) {
                state.socket.send(JSON.stringify({
                    operation: 'deleteLocation',
                    token: state.token,
                    id:item.id
                }));
                return;
            },

        },

        fields: [
            { name: "name", type: "text", width: 100, validate: "required" },
            { 
                type: "control",
                editButton: false,                   
            },
        ]
    });
}

export {comboGrid}
