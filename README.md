# currency

General Usage Notes
--------------------

Running on Node.JS 11.10.1

Function.txt contains code that can run in console. I used codepen for ease of use.

 Console input can be:

`countcoins(100, [25,10,5,1])`

This would display the total number of ways to make change for 100cents. You can also input any other number to make change for. It essentially handles the second part of the problem which would be hitting a certain amount using a different variation coins.

The index.js file currently throws an error when a command line prompt is entered in the format required

`"Quarter,4,Dime,10,Nickel,20,Penny,100"`

The goal of the code is to parse the command line input, first removing the commas first. Then making a distinction between the coin names and their values. Using the __getEven__ and __getOdd__ functions. And push those into their own arrays.

The __printCombinations__ function would loop through and find possible solutions. When a solution is found; it would be displayed. Inputted names will also be displayed above.
