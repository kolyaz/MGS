// Реализация обработки комманд API.
// Не стал использовать switch, так более наглядно получилось.

import { auth } from "./auth.js";
import { update_selectLocation } from "./selectLocation.js";
import { activatedGgrid,update_grid, load_gridData } from "./grid.js";

const apiFun = (json, state) => {
    try {

      // getToken - Авторизация на сервисе
      if (json.operation === 'token') {
        state.token = json.token;
        localStorage.setItem('token', state.token);
        auth(state);
        return true;
      }

      //getLocations - Возвращает список локаций
      if (json.operation === 'locationsList') {
        state.locationsList = json.data;
        $("#comboGrid").jsGrid("option", "data", state.locationsList);
        activatedGgrid(state);
        update_selectLocation(state);
        return true;
      }

      //addLocation - Добавляет новую локацию, возвращает статус добавления true/false
      if (json.operation === 'addLocation') {
        if (json.status) {
          update_selectLocation(state);
          return true;
        }
      }

      // deleteLocation - Удаляет локацию
      if (json.operation === 'deleteLocation') {
        if (json.status) {
          update_selectLocation(state);
          return true;
        }
        return false;
      }

      // getData - Основной массив данных
      if (json.operation === 'dataList') {
        state.dataList = json.data;
        update_grid(state);
        return true;
      }

      // addData - Добавляет данные в массив, возвращает статус добавления true/false
      if ((json.operation === 'addData') || (json.operation === 'addType') || (json.operation === 'deleteType')) {
        if (json.status) {
          load_gridData();
          return true;
        }
        return false;
      }

      return false;
    } catch (error) {
      console.log(error)
      return false;
    }

  }

  export {
      apiFun,
  }