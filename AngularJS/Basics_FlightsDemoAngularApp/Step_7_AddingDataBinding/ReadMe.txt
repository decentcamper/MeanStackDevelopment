In this example following are the modifications:

1) Removed the filters from the controller.
2) We introduced a new h2 tag and wired it with the expression {{fligtsInfo.flightScehdule[0].num}} to demonsrtate the two-way binding.
3) We replaced the simple columns of the table with the input fields, which can be used to edit the flight model
4) The one way binding is already being displayed in the length of the flights array.
