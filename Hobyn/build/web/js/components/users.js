// Declare single global object with same name as js file name.
// This object will have just one public method for now, but more later...
var users = {};

users.display = function (id) {
    
    console.log ("user.display function was called");

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

        <h1>Users</h1>

        <p>
            This table shows all of the registered users and their information. 
            It details the contents of their role. This role is split between 
            the users role number 1-5 as shown in the table. The next column is 
            an image that the user can upload. There is a userEmail column 
            showing the users registered email. The birthday of the user is shown 
            in the birthday column. Finally the membership fee that the user 
            pays annually is shown in the last column.
        </p>
   
        <div id="listHere" class="clickSort"></div>
    
        <p>
            End of list...
        </p>

    `;
    document.getElementById(id).innerHTML = content;

    // invoke ajax function to read cars.json and if the call was successful, 
    // run function processJSON, otherwise, put an error message in the DOM element 
    // that has id "listHere".
    ajax("json/allWebUsers.json", processData, "listHere");

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
            userList[i].role = list[i].userRoleId + " " + list[i].userRoleType;
            // Don't show the id (no meaningful data)
            userList[i].image = "<img  src='" + list[i].image + "'>";
            userList[i].userEmail = list[i].userEmail; // show this first
            // Don't show the password
            userList[i].birthday = list[i].birthday;
            userList[i].membershipFee = list[i].membershipFee;
        }

        console.log("USER LIST");
        console.log(userList);

        MakeSortableANDFilterableTable(userList, "listHere", "role", "icons/sortUpDown16.png");
    }
};