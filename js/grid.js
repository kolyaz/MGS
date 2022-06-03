// Главная таблица



const grid = (state) => {
    const data =  state.dataList;
    let itemIndex = null;
    $("#jsGrid").jsGrid({
        width: "100%",
        height: "400px",
        inserting: true,
        editing: false,
        sorting: true,
        paging: true,
        data,

        onItemEditing: function(args) {
            itemIndex = args.itemIndex
        },

        controller: {
            insertItem: function (item) {
                state.socket.send(JSON.stringify({
                    operation: 'addData',
                    token: state.token,
                    name: item.name,
                    inputLocation: item.inputLocation,
                    status: item.status,
                    comment: item.comment,
                }));
                return;
            },

            loadData: function () {
                state.socket.send(JSON.stringify({
                    operation: 'getData',
                    token: state.token,
                }));
                return;
            },

            updateItem: function (item) {

                    if (item.name != state.dataList[itemIndex].name) {
                    state.socket.send(JSON.stringify({
                        operation: 'editName',
                        token: state.token,
                        id: item.id,
                        name: item.name
                        }));   
                    }

                    if (item.inputLocation != state.dataList[itemIndex].inputLocation) {
                        state.socket.send(JSON.stringify({
                            operation: 'editInputLocation',
                            token: state.token,
                            id: item.id,
                            inputLocation: item.inputLocation
                            }));   
                    }

                    if (item.status != state.dataList[itemIndex].status) {
                        state.socket.send(JSON.stringify({
                            operation: 'editStatus',
                            token: state.token,
                            id: item.id,
                            status: item.status
                            }));   
                    }

                    if (item.Comment != state.dataList[itemIndex].comment) {
                        state.socket.send(JSON.stringify({
                            operation: 'editComment',
                            token: state.token,
                            id: item.id,
                            comment: item.comment
                            }));   
                    }
                return;
            },

        },

        fields: [
            { name: "id", type: "number", width: 150, editing: false },
            { name: "name", type: "text", width: 100, validate: "required", editButton: true },
            { name: "inputLocation", type: "text", validate: "required", width: 100 },
            { name: "status", type: "checkbox", title: "Status", width: 50, },
            { name: "comment", type: "text", width: 100},
            {
                name: "type", type: "text", width: 100, 
                editing:false, insertButton: true,modeSwitchButton: false,

                itemTemplate: function (value, item) {
                    let $text = $("<div>").attr("class", "col-11").text(item.type);
                    let $button = $("<i>")
                    .attr("class", "col-1 fa-solid fa-pen mr-10")
                    .attr("data-bs-target", "#staticBackdrop")
                    .attr("data-bs-toggle","modal")
                        .on("click", function () {
                            // showDetailsDialog("Add", {});
                        });
                    return $("<div>").attr("class", "d-flex").append($text).append($button);
                }

            },
            { type: "control", editButton: false, deleteButton: false }
        ]
    });
}

// Активация таблицы
const activatedGgrid = (state) => {
    if (state.locationsList) {
        $("#jsGrid").jsGrid("option", "editing", true);
        $("#jsGrid").jsGrid("loadData");
        return true;
    }
    return false;
}

// Обновление таблицы
const update_grid = (state) => {
    $("#jsGrid").jsGrid("option", "data", state.dataList);
}

// Запрос на получение данных 
const load_gridData = () => {
    $("#jsGrid").jsGrid("loadData");// Можно было применить "socket.send", но для разнообразия применил это.
}


// $("#detailsDialog").dialog({
//     autoOpen: false,
//     width: 400,
//     close: function() {
//         $("#detailsForm").validate().resetForm();
//         $("#detailsForm").find(".error").removeClass("error");
//     }
// });

// $("#detailsForm").validate({
//     rules: {
//         name: "required",
//         age: { required: true, range: [18, 150] },
//         address: { required: true, minlength: 10 },
//         country: "required"
//     },
//     messages: {
//         name: "Please enter name",
//         age: "Please enter valid age",
//         address: "Please enter address (more than 10 chars)",
//         country: "Please select country"
//     },
//     submitHandler: function() {
//         formSubmitHandler();
//     }
// });

// let formSubmitHandler = $.noop;

// const showDetailsDialog = function(dialogType, client) {
//     $("#name").val(client.Name);
//     $("#age").val(client.Age);
//     $("#address").val(client.Address);
//     $("#country").val(client.Country);
//     $("#married").prop("checked", client.Married);

//     formSubmitHandler = function() {
//         saveClient(client, dialogType === "Add");
//     };

//     $("#detailsDialog").dialog("option", "title", dialogType + " Client")
//             .dialog("open");
// };

// const saveClient = function(client, isNew) {
//     $.extend(client, {
//         Name: $("#name").val(),
//         Age: parseInt($("#age").val(), 10),
//         Address: $("#address").val(),
//         Country: parseInt($("#country").val(), 10),
//         Married: $("#married").is(":checked")
//     });

//     $("#jsGrid").jsGrid(isNew ? "insertItem" : "updateItem", client);

//     $("#detailsDialog").dialog("close");
// };

export {
    grid,
    activatedGgrid,
    update_grid,
    load_gridData,
}
