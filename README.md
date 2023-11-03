# Simon Says

#### By Samantha Callie

#### Play the classic memory game

## Technologies Used

* HTML
* CSS
* BootStrap
* JS
* Webpack

## Description

This site allows users to play the game Simon Says. Just press the start button and try to repeat the order of button presses given to you.

## Setup/Installation Requirements

* Clone repository
* Using your favorite command line console, run `npm run build` (requires npm) in the top level directory
* Navigate to the newly-generated scr directory and open index.html

## Known Bugs

* The game may break if the user presses buttons at the wrong times

## License

[GNU GPLv3](https://choosealicense.com/licenses/agpl-3.0/)

Copyright (c) 2023 Samantha Callie

## Pseudocode Tests Used During Development <small><small><small><small> (You can't even run these in the console anymore)</small></small></small></small>
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