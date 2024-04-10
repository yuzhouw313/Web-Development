// API Endpoints: https://gbfs.divvybikes.com/gbfs/gbfs.json
// Stations: https://gbfs.divvybikes.com/gbfs/en/station_information.json
// Real-time status: https://gbfs.divvybikes.com/gbfs/en/station_status.json


// Note: loadStations instead of loadStations() because want to provide the 
// function as an argument without evoking the function; loadStations() will 
// pass in the return value after running this function - () means to run the 
// function while without it just refer to that function
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("h1").addEventListener("click", loadStations)
})

function emit_stations(s) {
    console.log(s.name, s.capacity)
}

// fetch is a built-in function all browsers have
// Everytime using await need to put async in front of the function
async function loadStations() {
  let http_response = await fetch("https://gbfs.divvybikes.com/gbfs/en/station_information.json")
  let station_data = await http_response.json()
  
//   console.log(station_data)

  let stations = station_data.data.stations

  // first way to iterate
//   for (let i = 0; i < stations.length; ++i) {
//     let station = stations[i]
//     console.log(station.name, station.capacity)
//   }
    
  // second way to iterate
    // stations.forEach(emit_stations);

  // Third way to iterate - ananymous function
//   stations.forEach(function(s){
//     console.log(s.name, s.capacity)
//   })

  // Fourth way to iterate: arrow syntax
//   stations.forEach((s) => {
//     console.log(s.name, s.capacity)
//   })

  // Fifth way to iterate: arrow syntax, don't need to return console.log() when 
  // propogate, which is required for the fourth method
  stations.forEach((s) => console.log(s.name, s.capacity))
//   stations.forEach((s) => s.name.substr('Ellis'))

}
