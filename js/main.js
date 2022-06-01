import { WebSockets } from "./websocket.js";
import { grid } from "./grid.js";
import { state } from "./store.js";
import { action } from "./action.js";


const init = () => {

  const initFun = (json) => {
    try {

      if (json.operation === 'token') {
        state.token = json.token;
        return true;
      }

      if (json.operation=== 'locationsList') {
        state.locationsList = json.locationsList;
        return true;
      }

      if (json.operation=== 'dataList') {
        state.dataList = json.dataList;
        return true;
      }

      return false;
    } catch (error) {
      console.log(error)
      return false;
    }

  }

  WebSockets(initFun, state);
  grid(state);
  action(state);


}
 export { init, state };
