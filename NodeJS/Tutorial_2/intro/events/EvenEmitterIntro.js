/**
 * Created by viveksh2 on 1/5/16.
 */
var EventEmitter  = require('events').EventEmitter;
var util = require('util');

var Counter = function(init){
    this.increment = function(){
        init++;
        this.emit('incremented', init);
    }
};

util.inherits(Counter,EventEmitter);

var counter  = new Counter(10);

var callBack = function(count){
    console.log(count);
};

counter.addEventListener('incremented',callBack );

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();


