// Реализация взаимодействия с компонентами

// Реализация нажатия кнопки "Edit"
const btnEditPress = (state) => {
    $( "#btnEdit" ).on( "click", function() {
        state.socket.send(JSON.stringify({
          operation: 'getLocations', 
          token: state.token
        }))
      });
}

// Реализация нажатия кнопки "Авторизация"
const btnAuthPress = (state) => {
    $( "#btnAuth" ).on( "click", function() {
        state.socket.send(JSON.stringify({
          operation: 'getToken', 
        }));
      });
}

// Реализация нажатия на главную таблицу
const gridPress = (state) => {
  $( ".disactivatedGgrid" ).on( "click", function() {
    if (!state.locationsList.length) {
      $('#jsGrid').removeClass( "disactivatedGgrid" );
      $.notify('Выберите  локацию', { position:"top center" });
    }
    });
}

const action = (state) => {
    btnEditPress(state);
    btnAuthPress(state);
    gridPress(state);
}

export {
    action,
};