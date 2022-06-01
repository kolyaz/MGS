import { state } from "./store.js";


const WebSockets = (fun, socketLink, port) => {
    try {
        state.socket = new WebSocket(`ws://${socketLink}:${port}`);
        state.socket.onopen = () => {
            state.socket.send(JSON.stringify({operation: 'getToken'}));
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
