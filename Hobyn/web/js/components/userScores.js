// Declare single global object with same name as js file name.
// This object will have just one public method for now, but more later...
var userScores = {};

userScores.display = function (id) {
    
    console.log ("userScores.display function was called");

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `  
        <style>                
                /* override size of image from the clicksort.css */
                .clickSort td img { /* applies to any <img> tag in a <td> tag in any element classed "clickSort" */
                    width: 40px;
                    border-radius: 6px;
                    box-shadow: 3px 3px 3px #444444;
                }
            </style> 
            
            <h1>User Scores</h1>

            <!-- BEGGINNING OF ajax functionality Code... ------------------------------------------------------------------------------------>
            <p>
            This table shows all of the registered users and their information. 
            The table begins with the user id and username, both are pretty self 
            explanatory. Next is an image that the user can upload. Now we get 
            into the meat where we see the number of attempts the user took at 
            the test. The score is shown in the next column and finally the 
            webUserId is shown last. 
            </p>
            <div id="listHere" class="clickSort"></div>

    `;
    document.getElementById(id).innerHTML = content;

    // invoke ajax function to read cars.json and if the call was successful, 
    // run function processJSON, otherwise, put an error message in the DOM element 
    // that has id "listHere".
    ajax("json/allUserScores.json", processData, "listHere");

    function processData(list) {

        // print out JS object/array that was converted from JSON data by ajax function
        console.log(list);  

        // build new list as we want the fields to appear in the HTML table
        // we can decide the order we want the fields to appear (first property defined is shown first)
        // we can combine, decide to exclude etc...
        var userList = [];

        // modify properties (image and price) of the array of objects so it will look 
        // better on the page.
        for (var i = 0; i < list.length; i++) {

            userList[i]={};
            userList[i].id = list[i].userScoreId + " " + list[i].userName;
            userList[i].image = "<img  src='" + list[i].imageUrl + "'>";
            userList[i].attempts = list[i].userTestAttempts; 
            userList[i].score = list[i].userTestScore;
            userList[i].webUserId = list[i].webUserId;
        }

        console.log("USER LIST");
        console.log(userList);

        MakeSortableANDFilterableTable(userList, "listHere", "id", "icons/sortUpDown16.png");
    }
};