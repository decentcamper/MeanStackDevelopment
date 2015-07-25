/**
 * Created by viveksh2 on 6/4/15.
 */


/**
 * This function is relatively straightforward.
 * It accepts a single argument—the dash delimited string—and returns the modified string.
 * We have used a few calls to console.log for the purpose of verifying our expectation that
 * it will strip out all of the dashes and leave spaces in their place.
 * @param txt
 * @returns {string}
 */
function stripDashes(txt) {
    return txt.split('-').join(' ');
};


function factory(myFun, myarg1, myarg2){
    return myFun(myarg1, myarg2);
}


function sum(a,b ){
    return a+b;
}


myfunct = factory(sum,10,20);

myfunct();

console.log(stripDashes("super-basic-plan"));
console.log(stripDashes("something-with-a-lot-more-dashes-plan"));
console.log(stripDashes("noDashesPlan"));

