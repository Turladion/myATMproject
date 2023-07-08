# myATMproject
This project contains the starter files for my MIT ATM assignment, as well as my improvements, listed as 'ATMOriginal.jsx' and 'myatmchanges.jsx' respectively. It allows users to simulate an ATM's functionality, including depositing, withdrawing, cashback functions.


Installation
To run the project locally, follow these steps:

Clone the repository:
$ git clone https://github.com/your-username/your-repo.git
Open the project directory:
Copy code $ cd your-repo
Start a local server to view the HTML file properly. You can use the https-server package for this purpose. If you don't have it installed, you can install it globally using npm:
Copy code $ npm install -g http-server Start the local server with caching disabled:
Copy code $ http-server -c-1 Open your web browser and visit http://localhost:8080/standalone.html to see the ATM machine simulation.

Usage
When the page loads, you will see the title "ATM Machine" at the center of the screen.
Select an action by selecting an option from the dropdown menu.
If you select "Deposit", enter the amount you want to deposit in the input field. If you select "Cash Back", enter the amount you want to withdraw.
The account balance will be displayed below the input field, indicating the current account balance.
If the entered amount is acceptable (greater than 0 and within the available balance for cashback), the "Submit" button will function. Otherwise, it will not.


License This project is licensed under the MIT License.
