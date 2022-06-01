const btnEditPress = (state) => {
    $( "#btnEdit" ).on( "click", function() {
        state.socket.send(JSON.stringify({
          operation: 'getData', 
          token: state.token
        }))
      });
}

const btnAuthPress = (state) => {
    $( "#btnAuth" ).on( "click", function() {
        state.socket.send(JSON.stringify({
          operation: 'getToken', 
        }))
      });
}

const action = (state) => {
    btnEditPress(state);
    btnAuthPress(state);
}

export {
    btnEditPress,
    action,
};