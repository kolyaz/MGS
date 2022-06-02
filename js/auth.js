const auth = (state) => {
    if (state.token) {
        $('#btnAuth').removeClass( "show" ).addClass( "hide" );
        return
      }
        $('#btnAuth').removeClass( "hide" ).addClass( "show" );
}

export {
    auth,
}