const grid = (state)=> {
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
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        data: state.dataList,

        fields: [
            { name: "id", type: "number", width: 150, editing: false },
            { name: "Name", type: "text", width: 100, validate: "required",editButton: true },
            { name: "InputLocation", type: "select", items: locations , valueField: "Id", textField: "Name",width: 100 },
            { name: "Status", type: "checkbox", title: "Status",width: 50,  },
            { name: "Comment", type: "text", width: 100 },
            { name: "type", type: "text", width: 100 },
            { type: "control" }
        ]
    });
}

export {grid}
