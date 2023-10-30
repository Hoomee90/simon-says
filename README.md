# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

GNU GPLv3

Copyright (c) _date_ _author name(s)_

## Pseudocode Tests Used During Development <small><small>(You can't even run these in the console anymore)</small></small>
All:
const simon = new SimonGame();

Describe: SimonGame.prototype.addElement()

Test: "It should add a random number between zero and four to the sequence array"
Code: 
simon.addElement();
console.log(simon.sequence);
Expected Output: ([0] || [1] || [2] || [3])

Describe: SimonGame.prototype.display()

Test: "It should return an array of colors based on its sequence array"
Code:
simon.sequence = [1, 2, 3];
console.log(simon.display());
Expected Output: ['yellow', 'green', 'blue']

Describe: SimonGame.prototype.check(seqEl)

Test: "It should return true if the input is in the sequence array"
Code: 
simon.sequence = [1, 2];
console.log(simon.check(1));
Expected Output: true

Test: "It check only at the index of an additional input"
Code: 
simon.sequence = [1, 2, 3];
console.log(simon.check(2, 3));
Expected Output: false