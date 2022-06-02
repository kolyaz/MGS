import { auth } from "./auth.js";
import { update_selectLocation } from "./selectLocation.js";

const apiFun = (json, state) => {
    try {

      if (json.operation === 'token') {
        state.token = json.token;
        localStorage.setItem('token', state.token);
        auth(state);
        return true;
      }

      if (json.operation === 'locationsList') {
        state.locationsList = json.data;
        $("#comboGrid").jsGrid("option", "data", state.locationsList);
        update_selectLocation(state);
        return true;
      }

      if (json.operation === 'addLocation') {
        if (json.status) {
          update_selectLocation(state);
          return true;
        }
      }

      if (json.operation === 'deleteLocation') {
        if (json.status) {
          update_selectLocation(state);
          return true;
        }
      }


      if (json.operation === 'dataList') {
        state.dataList = [...json.data];
        return true;
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