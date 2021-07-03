Can you put together a technical example that you’d be happy to walk through with the Development Team. We’ve provided a sample set of data, attached “users.json”, which we’d you to use in the following Story. 
Story
As the System User I would like to see active user’s personal data in a table so that I may make management decisions. I would like to filter, order and search the data to help me make those decisions.  
Definition of Done
1.	A table bound to the data “user.json”
•	showing the following columns
•	Name
•	Age
•	Registered Date, format dd-mm-yyyy dd:mm:ss
•	Email
•	Balance	, format currency as pounds to 2 decimal places
•	sorted by “Name” ascending by default
•	we are not interested in paging

2.	A “Search” input and label 
•	Typing in the search input filters the table results by “Name”
3.	A button named “Reset Balance” that sets all of users balances to zero and reflects this in the view.

Restrictions
•	Must use AngularJS
•	Responsive grid (using a 3rd party framework is acceptable)
•	No restrictions on ECMA standards (whatever you’re comfortable with).

Please don’t spend more than 2 hours on this as we’re not looking for something polished but more your approach. If you’d like to publish it to GitHub we can pull this down from the office. Please also feel free to place the “users.json” as an object literal within your script.
