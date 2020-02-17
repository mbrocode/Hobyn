// Declare single global object with same name as js file name.
// This object will have just one public method for now, but more later...
var map = {};

map.display = function (id) {
    
    console.log ("map.display function was called");

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `  
        <h3>My Google Maps Demo</h3>
        <!--The div element for the map -->
        <div id="map"></div>

    `;
    document.getElementById(id).innerHTML = content;
    
    function initMap() {
        // The location of Uluru
        var uluru = {lat: -25.344, lng: 131.036};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
    }
    
    initMap();
};
