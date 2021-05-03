/* src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCSV7XUKItR7LX455m6QEUkgqz2Fc6ycGk&callback=initMap&libraries=&v=weekly"
async 
  callAPI(requestURL)

let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

// Initialize and add the map
function initMap() {
  // The location of 
  const creighton = { lat: 41.265308, lng: -95.947189 };
  const UNO = { lat: 41.257561, lng: -96.004929 };
  const UNL = { lat: 40.859692, lng: -96.642288 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: creighton,
  });
  // The marker, positioned at Creighton
  const marker = new google.maps.Marker({
    position: creighton,
    map: map,
  });
}

CL.onclick = function() {
    // have to run this before you do anything else - call this getLocation button
    navigator.geolocation.getCurrentPosition(gotLocation)
    NSB.WaitCursor(true)

}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
map = new google.maps.Map(document.getElementById("map"), {...});
*/