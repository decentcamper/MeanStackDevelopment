/**
 * Created by viveksh2 on 7/27/15.
 */
// blah
setTimeout(function () {
    console.log("I've finished my work!");
}, 2000);


console.log("I'm waiting for all my work to finish.");

/*
    I hope this is not a surprise to you: The program sets the timeout for 2000ms (2s),
    giving it the function to call when it fires,
    and then continues with execution, which prints out the “I’m waiting...” text.

    Two seconds later, you see the “I’ve done...” message, and the program then exits.


    Now, look at a world where any time you call a function that needs to wait for
    some external resource (database server, network request, or file system read/write operation),
    it has a similar signature.


    That is, instead of calling fopen(path, mode) and waiting,
    you would instead call fopen(path, mode, function callback(file_handle) { ... }).


    Now we can go back and rewrite the preceding synchronous script in PHP
    using the new asynchronous functions.


    You can actually enter and run this program with node from the command line.
    Just make sure you also create a file called info.txt.txt that can be read.
*/
