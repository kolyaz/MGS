
const WebSockets = (fun, state) => {
    try {
        state.socket = new WebSocket(`ws://${state.socketLink}:${state.port}`);
        state.socket.onopen = () => {
            // state.socket.send(JSON.stringify({operation: 'getToken'}));
        }
        state.socket.onmessage =  (data) => {
        const getJson = JSON.parse(data.data);
        fun(getJson);
      };
      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  };
  export {
    WebSockets,
  };
