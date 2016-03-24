/**
 * Created by viveksh2 on 8/7/15.
 */
try {
    setTimeout(function () {
        try{throw new Error("Uh oh!");}
        catch(e){ console.log("I caught the error: " + e.message);}
    }, 2000);
} catch (e) {
    console.log("I caught the error: " + e.message);
}
