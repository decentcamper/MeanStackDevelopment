/**
 * Created by viveksh2 on 6/18/15.
 */


var flightsModel = {

    flightScehdule: [
        {id:"JBU915" ,		num:"A321",	code:"John F Kennedy Intl (KJFK)",				dep:"2015-04-18T13:41:56-05:00",		arriv:1434510780,  price:123.2256  },
        {id:"UAL1731",		num:"B739",	code:"Houston Bush Int'ctl (KIAH)"	,		    dep:"2015-04-18T14:51:50-05:00",		arriv:1434510598,  price:532.226    },
        {id:"DAL2773",		num:"B712",	code:"Los Angeles Intl (KLAX)",				    dep:"2015-04-18T14:61:44-05:00",		arriv:1434510502,  price:440.2296   },
        {id:"EVA28",		num:"B77W",	code:"Taiwan Taoyuan Int'l (RCTP / TPE)",		dep:"2015-04-18T17:81:44-05:00",		arriv:1434510719,  price:553.446    },
        {id:"AMF1150",		num:"B190",	code:"Reno/Tahoe Intl (KRNO)",					dep:"2015-04-18T16:51:44-05:00",		arriv:1434510452,  price:678.6656   },
        {id:"AAL1799",		num:"A321",	code:"Charlotte/Douglas Intl (KCLT)",			dep:"2015-04-18T12:43:44-05:00",		arriv:1434510440,  price:990.5656    },
        {id:"CAL4",			num:"B744",	code:"Taiwan Taoyuan Int'l (RCTP / TPE)",		dep:"2015-04-18T11:47:44-05:00",		arriv:1434510783,  price:1123.562    },
        {id:"UAL1497",		num:"B739",	code:"Minneapolis/St Paul Intl (KMSP)",		    dep:"2015-04-18T15:40:44-05:00",		arriv:1434510428,  price:1114.565    },
        {id:"DAL445",		num:"B752",	code:"John F Kennedy Intl (KJFK)",				dep:"2015-04-18T10:45:44-05:00",		arriv:1434510703,  price:1143.565    },
        {id:"UAL522",   	num:"A320",	code:"San Diego Intl (KSAN)",					dep:"2015-04-18T10:49:44-05:00",		arriv:1434510496,  price:142.566     },
        {id:"PAL104",		num:"B77W",	code:"Manila Int'l (RPLL / MNL)",				dep:"2015-04-18T13:51:44-05:00",		arriv:1434510778,  price:123.2786   }]
};

var flightAppControllers = angular.module('flightAppControllers', []);


flightAppControllers.controller('listCtrl', ['$scope',
    function ($scope) {
        $scope.fligtsInfo = flightsModel;
    }]);


/**
 * ****** The $routeParams are replaced with the $stateParams ******
 *
 *
 *
 *
 * */


flightAppControllers.controller('detailsCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {
        $scope.flightId = $stateParams.flightId;
    }]);