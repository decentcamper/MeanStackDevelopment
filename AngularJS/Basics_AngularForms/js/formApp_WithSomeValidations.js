/**
 * Created by viveksh2 on 6/15/15.
 */

angular.module("registrationApp", [])
    .controller("regCtrl", function ($scope) {
        $scope.person = {};
        $scope.firstNameInvalid = false;
        $scope.lastNameInvalid = false;
        $scope.emailInvalid = false;
        $scope.researchInvalid = false;



        $scope.person.channels = [
            { value: "tv", label: "Television" },
            { value: "radio", label: "Radio" },
            { value: "social-media", label: "Social Media"},
            { value: "other", label: "Other"}
        ];

        $scope.person.newsletterOptIn = true;
        $scope.person.channel = "";

       /* When the document first loads, both firstNameInvalid and lastNameInvalid evaluate to false.
          Consequently, the ngShow directives will keep the span elements, and therefore the validation
          messages, hidden.

          When the user presses the submit button, we make use of the fact that AngularJS
          can tell us, on a field-by-field basis, whether or not an input is valid.

          In the case of the First name field, which we named firstName,
          in the form which we named registrationForm, we can use
          $scope.registrationForm.firstName.$valid to see if this field is currently valid.

          As you might expect, this scope.formName.fieldName.$property format applies
          to the Last name field too.

          Both of the conditional statements in the register() method work the same way;
          they each check to see if these fields are not currently valid.

          If indeed they are not,
          then the firstNameInvalid and lastNameInvalid variables are set to true.
          This will cause the ngShow directive to show the validation error messages.*/

        $scope.register = function(){
            if(!$scope.registrationForm.firstName.$valid){
                $scope.firstNameInvalid = true;
            }

            if(!$scope.registrationForm.lastName.$valid){
                $scope.lastNameInvalid = true;
            }

            if(!$scope.registrationForm.email.$valid){
                $scope.emailInvalid = true;
            }

            if(!$scope.registrationForm.research.$valid){
                $scope.researchInvalid = true;
            }

            if(!$scope.registrationForm.channels.$valid){
                $scope.channelsInvalid = true;
            }


        };




        $scope.person.register = function () {
            <!-- pending implementation -->
        }


    });
