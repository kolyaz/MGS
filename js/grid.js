// Главная таблица

import { typeGrid } from "./typeGrid.js";

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
                    let $button = $("<i>")
                    .attr("class", " fa-solid fa-pen ")
                    .attr("data-bs-target", "#staticBackdrop2")
                    .attr("data-bs-toggle","modal")
                        .on("click", function () {
                            typeGrid(state, item, value);
                        });
                    return $("<div>").attr("class", "d-flex ").append($button);
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


export {
    grid,
    activatedGgrid,
    update_grid,
    load_gridData,
}
