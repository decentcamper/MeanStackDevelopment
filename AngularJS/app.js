var obj = {
    myVar: 123

};


console.log(obj.myVar);


function myModule() {
    var myVar = 123;

    function getVar() {
        return myVar;

    }

    function setVar(myVarPassed) {
        if (myVarPassed) {
            myVar = myVarPassed;
        }


    }

    module.exports = {
        getVar: getVar


    }
}


var result = myModule().getVar();



