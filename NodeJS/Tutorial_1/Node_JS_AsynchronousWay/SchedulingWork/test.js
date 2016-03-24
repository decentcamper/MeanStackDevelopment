/**
 * Created by viveksh2 on 8/8/15.
 */
try {
    setTimeout(function () {
        throw new Error("Uh oh!");
    }, 2000);
} catch (e) {
    console.log("I caught the error: " + e.message);
}