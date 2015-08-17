(function() {
  var app = angular.module('aboutMeApp', []);
  
  app.controller("AboutMeController", function($scope) {
      $scope.sections = sections;
      $scope.selectedSection = sections[-1];
      $scope.selectSection = function(section) {
          $scope.selectedSection = section;
      }

  });

  sections = [
  {
    title: "Contact Details",
    address: "Apartment 11, 3 Regent Terrace, Rita Road, London, SW8 1AW",
    tel: "07818 064374"
  },
  {
    title: "Education",
    dates: "Nov 2014 - Feb 2015",
    school: "General Assembly",
    qualification: "Web Development Immersive",

    dates2: "Sept 2000 - May 2003",
    school2: "London South Bank University",
    qualification2: "2:1 BSc (Hons) Media and Society",

    dates3: "",
    school3: "",
    qualification3: ""

  },
  {
    title: "Career",
    establishment: "Andiamo"
  },
  {
    title: "Home",
    something: "TEST"
  }
]

})();

