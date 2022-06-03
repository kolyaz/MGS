// Реализация  websocket
const webSocketInit = (fun, state) => {
    try {
        state.socket = new WebSocket(`ws://${state.socketLink}:${state.port}`);
        state.socket.onopen = () => {
        }
        state.socket.onmessage =  (data) => {
        const getJson = JSON.parse(data.data);
        fun(getJson, state);
      };
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  export {
    webSocketInit,
  };
