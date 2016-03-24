/**
 * Created by viveksh2 on 6/3/15.
 */

var Logger = (function () {
    var loggerInstance = null;

    function createLogger() {
        var _loggerInstance = function (logMessage) {
            return logMessage.toUpperCase();
        };
        return {loggerInstance: _loggerInstance}
    }

    return {
        getInstance: function () {
            if (loggerInstance) {
                return loggerInstance;
            } else {
                loggerInstance = createLogger();
                return loggerInstance;
            }
        }
    }
})();

var logger = Logger.getInstance();
console.log(logger.loggerInstance('This is my Try'));
