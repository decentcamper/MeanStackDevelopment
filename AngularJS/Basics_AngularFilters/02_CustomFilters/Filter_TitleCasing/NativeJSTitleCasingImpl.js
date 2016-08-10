/**
 * Created by viveksh2 on 6/4/15.
 */

/**
 * It’s a fairly simple function, and it does what we need it to do.
 * That is to say, it will indeed convert the firstName and surname to title case.
 * It does so by using the string method’s charAt() method to access and convert the first character
 * to uppercase (as returned by str.charAt(0).toUpperCase()) and
 * concatenating the resulting value to a lowercased portion of the string that
 * consists of all but the first character (as returned by str.substr(1).toLowerCase()).
 * @param str
 * @returns {string}
 */
function toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

console.log(toTitleCase("jennifer"));
console.log(toTitleCase("jENniFEr"));
console.log(toTitleCase("jENniFEr amanda Grant"));

/**
 * Of course, the function is now a little more complicated.
 * The trick to understanding it lies in the use of the string object’s replace() method.
 * This method is very powerful, but it does require some knowledge of regular expressions
 * before you can truly master it. A regular expression is a sequence of symbols and characters
 * expressing a pattern to be searched for within a longer piece of text.
 * The first argument to this method is a regular expression, which looks like this: /\w\S/g.
 * More specifically, in this particular case, it is looking for each individual word.
 * The anonymous function, which is the second argument, is executed for each word that is found.
 * This function uses the same logic you saw in the previous example;
 * therefore, each word now has its first character converted to uppercase
 * and all remaining characters converted to lower case.
 *
 *
 */
function betterToTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log(betterToTitleCase("jennifer"));
console.log(betterToTitleCase("jENniFEr"));
console.log(betterToTitleCase("jENniFEr amanda Grant"));
