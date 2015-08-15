/**
 * Created by viveksh2 on 8/7/15.
 */
function compute_intersection(arr1, arr2, callback) {
    var results = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr2[j] == arr1[i]) {
                results[results.length] = arr2[j];
                break;
            }
        }
    }
    callback(null, results);   // no error, pass in results!
}

var a1 = [3476, 2457, 7547, 34523, 3, 6, 7, 2, 77, 8, 2345,
    7623457, 2347, 23572457, 237457, 234869, 237,
    24572457524];
var a2 = [3476, 75347547, 2457634563, 56763472, 34574, 2347,
    7, 34652364, 13461346, 572346, 23723457234, 237,
    234, 24352345, 537, 2345235, 2345675, 34534,
    7582768, 284835, 8553577, 2577257, 545634, 457247247,
    2345];
compute_intersection(a1, a2, function (err, results) {
    if (err) {
        console.log("Error: " + JSON.stringify(err));
        return;
    } else {
        console.log(results);

    }
});