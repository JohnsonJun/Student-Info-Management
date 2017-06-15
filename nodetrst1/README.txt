Here is the source code
Before starting the server, Please use the SQL query in the Database.sql to initiate the Database.
I used MySQL as the database on my computer. Therefore, the DB connection in the app.js file is based on MySQL with the local host. 
I leave the user and password blank to be filled in when the DB is set.

I used Jade template engine for the client side web page, so I didn't make it pretty.
After starting the server, you can get to the page by using the URL: localhost:3000/studentlist.
It will send a request to the server to get the student list from the Database and display the result. 
Also, there is a link(Add Student) in that page. 
If you click that link, you will go the localhost:3000/addstudent page. 
In the add-student page, you can click Cancel to get back to student list page.

You can add student by typing their names, and click Save to save it into Database.
There will be several cases that I have considered 
Example 0: No input. The web page will pop up an alert telling you to input student name.
Example 1: only one word. The web page will pop up an alert telling you to input student name in the right form.
Example 2: Last, First(or LAST, FIRST). If the name correctly added to DB, the web page will pop up a message telling you that the student name has been added, and you will be redirected to student list page to see the names.
Example 3: First Last(or FIRST LAST). The result will be the same as above if the name has been added successfully.
Example 4: Duplicated name. The web page will tell you the name already exists in the database.

