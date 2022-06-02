const grid = (state)=> {
    let editing = false;
    

   let  locations= [
        { Name: "", Id: 0 },
        { Name: "United States", Id: 1 },
        { Name: "Canada", Id: 2 },
        { Name: "United Kingdom", Id: 3 },
        { Name: "Russia", Id: 3 },
      ]
    $("#jsGrid").jsGrid({
        width: "100%",
        height: "400px",
        inserting: false,
        editing: false,
        sorting: true,
        paging: true,
        data: state.dataList,

        controller: {

            insertItem:   function(item) { 
                state.socket.send(JSON.stringify({
                    operation: 'addData',
                    token: state.token,
                    name:item.name,
                    inputLocation:item.inputLocation,
                    status: item.status,
                    comment: item.comment,
                }));
                return; 
            },

            loadData:   function() { 
                state.socket.send(JSON.stringify({
                    operation: 'getData',
                    token: state.token,
                }));
                return; 
            },

            deleteItem: function(item) {
                state.socket.send(JSON.stringify({
                    operation: 'deleteData',
                    token: state.token,
                    id:item.id
                }));
                return;
            },

            // updateItem: function(item) {
            //     state.socket.send(JSON.stringify({
            //         operation: 'editLocation',
            //         token: state.token,
            //         id:item.id
            //     }));
            //     return;
            // },
        },

        fields: [
            { name: "id", type: "number", width: 150, editing: false },
            { name: "name", type: "text", width: 100, validate: "required",editButton: true },
            { name: "inputLocation", type: "text",validate: "required",width: 100 },
            { name: "status", type: "checkbox", title: "Status",width: 50,  },
            { name: "comment", type: "text", width: 100 },
            { name: "type", type: "text", width: 100 },
            { type: "control", editButton: true }
        ]
    });
}

const activatedGgrid =  (state)=> {
    if (state.locationsList) {
        $("#jsGrid").jsGrid("option", "editing", true);
        $("#jsGrid").jsGrid("option", "inserting", true);
        $("#jsGrid").jsGrid("loadData");
        return true;
    }
    return false;
}

const update_grid = (state)=> {
    $("#jsGrid").jsGrid("option", "data", state.dataList);
}

const load_gridData = () => {
    $("#jsGrid").jsGrid("loadData");
}

export {
    grid,
    activatedGgrid,
    update_grid,
    load_gridData,
}
