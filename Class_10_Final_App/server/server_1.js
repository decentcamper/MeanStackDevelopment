var mongoose = require('mongoose');
var express = require('express');
//Connect to teh DB
mongoose.connect('mongodb://localhost/MeanCompany');


/**
 * The first argument is the singular name of the collection your model is for.
 *
 * Mongoose automatically looks for the plural version of your model name. For example, if you use
 * var MyModel = mongoose.model('Ticket', mySchema);
 * Then Mongoose will create the model for your tickets collection, not your ticket collection.
 * @type {Model<T>}
 */
var Employee = mongoose.model('Employee', {
    EmployeeID: String,
    LastName: String,
    FirstName: String,
    Title: String,
    TitleOfCourtesy: String,
    BirthDate: String,
    HireDate: String,
    Address: String
});


var emp = new Employee({
    EmployeeID: "10",
    LastName: "Sharma",
    FirstName: "Vivek",
    Title: "Instructor.",
    TitleOfCourtesy: "Mr.",
    BirthDate: "1960-05-29 00:00:00.000",
    HireDate: "1994-01-02 00:00:00.000",
    Address: "Morgan Hill"
});

emp.save(function (err) {
    if (err) {
        console.log(err)

    } else {
        console.log('saved');

    }

});




