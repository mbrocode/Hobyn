function home(id) {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `
    
        <h1>Hobyn - find a local hobby app</h1>
        <p> 
            </br>
        </p>

        <p>
            <img class="homePic" src="pics/hobyn.jpg">
        </p>

        <div class="stopFloat"></div>
        <p> 
            </br>
        </p>

        <h2>Hobby: an activity done regularly in one's leisure time for pleasure</h2> 
        <p>Context for this app: Hobby could be anything from getting people together for a run or pick up basketball game, playing a tabletop game, getting together to practice yoga, etc.</p>            
        <p> 
            </br>
        </p>

        <h2>Description of the overall project:</h2>
        <p>To build an open source application / website that helps people find local activities / hobbies / interests. By turning on location or inputting a zipcode or address, the user can choose between map or list view of all the hobbies in that area. Could be used by enthusiast looking to practice their craft with other hobbyist, recruitment into clubs / regular meetings, etc. “Accepters” people who go to events being held, can rate the people that create events and vice-versa. </p>    

        <p> 
            </br>
        </p>
    
    `;
    document.getElementById(id).innerHTML = content;
}