const update_selectLocation = (state) => {
    //$('#locations').size());
    const locationList = state.locationsList;
    // $('#selectLocation option[value=1]').remove();
    $('#selectLocation').empty();

    for (let index = 0; index < locationList.length; index++) {
        $('#selectLocation').append(`<option value="">${locationList[index].name}</option>`);
    }
}

export {
    update_selectLocation,
}