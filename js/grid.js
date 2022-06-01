const grid = (state)=> {
    $("#jsGrid").jsGrid({
        width: "100%",
        height: "400px",
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        data: state.dataList,

        fields: [
            { name: "id", type: "number", width: 150 },
            { name: "Name", type: "text", width: 100, validate: "required" },
            { name: "InputLocation", type: "select", items: state.locations , valueField: "Id", textField: "Name",width: 100 },
            { name: "Status", type: "checkbox", title: "Status", sorting: false },
            { name: "Comment", type: "text", width: 100 },
            { name: "type", type: "Arraylist<type>", width: 50 },
            { type: "control" }
        ]
    });
}

export {grid}
