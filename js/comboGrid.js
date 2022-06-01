const comboGrid= (state)=> {
    $("#comboGrid").jsGrid({
        width: "100%",
        height: "100%",
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        data: state.locationsList,

        controller: {
            insertItem:  async function(item) { 
                console.log(state.locationsList);
                  const query = await state.socket.send(JSON.stringify({
                    operation: 'addLocation',
                    token: state.token,
                    name:item.name
                }))
                return state.locationsList
                
            },
            loadData: function(filter) {
                return $.ajax({
                    type: "GET",
                    url: "/items",
                    data: filter
                });
            },
            
            // insertItem: function(item) {
            //     console.log(item)
            //     return $.ajax({
            //         type: "POST",
            //         url: "/items",
            //         data: item
            //     });
            // },
            
            // updateItem: function(item) {
            //     return $.ajax({
            //         type: "PUT",
            //         url: "/items",
            //         data: item
            //     });
            // },
            
            // deleteItem: function(item) {
            //     return $.ajax({
            //         type: "DELETE",
            //         url: "/items",
            //         data: item
            //     });
            // },
        },

        fields: [
            { name: "name", type: "text", width: 100, validate: "required" },
            { name: "id", type: "text", width: 150 },
                        // {
            //     type: "control",
            //     modeSwitchButton: false,
            //     editButton: false,
            //     headerTemplate: function() {
            //         return $("<button>").attr("type", "button").text("Add")
            //                 .on("click", function () {
            //                     showDetailsDialog("Add", {});
            //                 });
            //     }
            // }
            { type: "control" },
        ]
    });
}

export {comboGrid}
