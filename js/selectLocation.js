const update_selectLocation = (state) => {
    const locationList = state.locationsList;
    $('#selectLocation').empty();

    for (let index = 0; index < locationList.length; index++) {
        $('#selectLocation').append(`<option value="">${locationList[index].name}</option>`);
    }
}

export {
    update_selectLocation,
}