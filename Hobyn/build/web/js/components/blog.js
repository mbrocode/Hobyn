function blog(id) {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `  
        <!-- These style rules will be applied after (or on top of) any other styles defined in the header of the template -->
        <style>
            #content {
                padding-left: 16px;
                padding-right: 16px;
            }

            #content p {
                margin-left: 1em; /* indent paragraphs inside of content (indent amount is the size of a captial "M") */
            }
        </style>

        <h1>Blog</h1>

        <h3>Homework 1: Web Home Page</h3>
        <p>
            My web experience consists of ... 

        </p>
        <p>
            I learned advanced html techniques and organizing a nav bar with javaScript dropdown animations. 
            I got to learn about advanced CSS techniques that allowed me to combine all my styling into a single file. 
            I had trouble trying to get the dropdown animation to actully "dropdown" from the point of click but settled 
            on just having the dropdown show up, instead of flying in from the right. I found the sample code to 
            be very helpful.
        </p>

        <h3>Homework 2: Routing and DB</h3>
        <p>    
            My database experience consists of ... 
        </p>
        <p>
            I learned about mySQLworkbench and how it is a gui for SQL commands and organization of database tables. 
            I also learned more about routing inside of web pages. I found setting up the tables with the tutorial to be easy. 
            I found actually writing commands in mySQLworkbench to be difficult as I have never worked with SQL commands before.
            Click <a href="HW2mySQL.docx">here</a> to see the document that shows my database work for this week. 
        </p>

        <h3>Homework 3: Display Data</h3>
        <p>    
            My JavaScript component and AJAX experience consists of ...
        </p>
        <p>
            In this Homework, I learned how to write JavaScript components that make an AJAX call, convert the resulting JSON 
            data to a click sort-able / filterable HTML table, and than inject that into the content area of the web page. I
            found this entire homework to be very difficult and very time consuming. I spent nearly all day completeing this. 
            I found combining the provided JavaScript functions to be very difficult to achieve both a click sort-able and 
            filterable HTML table to be very time consuming. The only easy part was copying the code to make the "other" 
            table. Click <a href="HW3dataDisplay.docx">here</a> to see the document that shows my display data work for this week.

        </p>
        <h3>Homework 4: Tutorial Proposal</h3>
        <p>
            In this Homework, I learned how to implement google maps into my project. I had alot of trouble gettin a custom API key
            to get to use google maps to begin with. I do not feel like google has made the process very streamlined as this took
            a majority of my time. Once I got that working on my page I was able to create a custom marker as this will be the starting 
            point of my component. With this I will implement an onClick function that will trigger an off map display of information
            regarding that marker. This will help my users study for the test that will eventually be implemented.
            Click <a href="tutorial/proposal.pdf">here</a> to see the pdf that shows my proposal work for this week.
        </p>
        <h3>...</h3>
    `;
    document.getElementById(id).innerHTML = content;
}