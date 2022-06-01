import { webSocketInit } from "./webSocketInit.js";
import { grid } from "./grid.js";
import { comboGrid } from "./comboGrid.js";
import { state } from "./store.js";
import { action } from "./action.js";
import { apiFun } from "./apiFun.js";


const init = () => {
  webSocketInit(apiFun, state);
  grid(state);
  comboGrid(state)
  action(state);
}
 export { init, state };
