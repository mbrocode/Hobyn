function routeFw(params) {

    var fw = {}; // creating and adorning this object to be passed back to the HTML page.

    var startingPath = params.startingPath || '/home';
    var contentId = params.contentId || "view";

    if (!params.routeArray || params.routeArray[0]) {
        alert("parameter object must specify array 'routeArray' with at least one element");
        return;
    }

    // Declare a (private) array to store our routes. This array is an associative
    // array with key [index] the URL and value the associated function to run.
    var routes = params.routeArray;

    // private function that will be called whenever a link is clicked (or href changed)
    function router() { // private function

        console.log("location.hash (the link that was clicked) is " + location.hash);
        // prints something like #/home

        var path = location.hash; 

        // Use the url like an index (JS associative array notation) to find 
        // the desired content and place it in the content area.
        // document.getElementById("view").innerHTML = routes[url];
        if (!routes[path]) {
            document.getElementById(contentId).innerHTML = "Error: link '" + path +
                    "' was never added to the routing.";
        } else {
            // invoke the function that's specified by the ajaxFillId(routes[url], "view");
            // pass the correct route object to that function (either staticContent or jsonContent)
            routes[path](contentId); // invoke function routes[path], a JS funtion/component
        }
    }

    fw.printRoutes = function () {
        console.log("routes will be printed on the next line ");
        console.log(routes);
    };

    // Listen on hash change (whenever a link is clicked or href changed)
    // In other words, whenever a link is clicked, invoke function router.
    window.addEventListener('hashchange', router);

    // content for when page is first rendered.
    window.location.hash = "x"; // make sure there's a change when refreshing the page
                                // else you might see empty content.
    window.location.hash = startingPath;

    return fw;
}