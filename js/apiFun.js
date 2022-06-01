const apiFun = (json, state) => {
    try {

      if (json.operation === 'token') {
        state.token = json.token;
        return true;
      }

      if (json.operation=== 'locationsList') {
        state.locationsList = json.data;
        return true;
      }

      if (json.operation=== 'dataList') {
        state.dataList = json.data;
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