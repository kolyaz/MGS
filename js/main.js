///////////////////////////////////////////////////////////
// Главная функуция  - точка входа.
// При исполнении не стал использовать "геттеры и сеттеры", 
// чтоб предотвратить избыточность кода , 
// а примянил прямую  "мутацию".
///////////////////////////////////////////////////////////
import { webSocketInit } from "./webSocketInit.js";
import { grid } from "./grid.js";
import { comboGrid } from "./comboGrid.js";
import { state } from "./store.js";
import { action } from "./action.js";
import { apiFun } from "./apiFun.js";
import { auth } from "./auth.js";



const init = () => {

  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token');
    state.token = token;

  }

  auth(state);
  webSocketInit(apiFun, state);
  grid(state);
  comboGrid(state)
  action(state);
}
 export { init, state };
