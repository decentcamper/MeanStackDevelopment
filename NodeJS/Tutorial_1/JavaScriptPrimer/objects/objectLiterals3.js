/**
 * You can nest the object literals within other object literals.
 * @type {{bar: number, bas: {bas1: string, bas2: number}}}
 */
var foo = {
    bar: 123,
    bas: {
        bas1: 'some string',
        bas2: 345
    }
};
console.log(foo);
console.log(foo.bas);
