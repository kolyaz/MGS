const apiFun = (json, state) => {
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

  export {
      apiFun,
  }