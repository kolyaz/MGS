const btnEditPress = (state) => {
  
    $( "#btnEdit" ).on( "click", function() {
        state.socket.send(JSON.stringify({
          operation: 'getLocations', 
          token: state.token
        }))
      });
}

const btnAuthPress = (state) => {
    $( "#btnAuth" ).on( "click", function() {
        state.socket.send(JSON.stringify({
          operation: 'getToken', 
        }));
      });
}

const gridPress = (state) => {
  $( ".disactivatedGgrid" ).on( "click", function() {
    console.log
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
    btnEditPress,
    action,
};