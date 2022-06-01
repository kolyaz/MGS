const state = {
  port: 8888,
  socketLink: '185.246.65.199',
  socket: null,
  locations: [
    { Name: "", Id: 0 },
    { Name: "United States", Id: 1 },
    { Name: "Canada", Id: 2 },
    { Name: "United Kingdom", Id: 3 },
    { Name: "Russia", Id: 3 },
  ],
  token: '',
  locationsList: [],
  dataList: [
    { "id": 25, "Name": "Otto Clay", "InputLocation": 1, "Status": false, "Comment": '' },
    { "id": 26, "Name": "Otto Clays", "InputLocation": 1, "Status": true, "Comment": '' },
  ],
}

export {
  state
}
