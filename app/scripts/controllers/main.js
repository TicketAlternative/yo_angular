'use strict';

var episodeFactory = function(date, id1, name1, id2, name2){
	return { 
		date: date, 
		game1name: name1, 
		id1: id1, 
		game2name: name2, 
		id2: id2 
	}};

angular.module('sampleAngularAppApp')
  .controller('MainCtrl', function ($scope) {
  	var eps = [];
  	eps.push (episodeFactory('9/1/2013', 1, 'name1', 2, 'name2'));
  	eps.push (episodeFactory('9/13/2013', 3, 'name3', 4, 'name4'));
  	eps.push (episodeFactory('9/21/2013', 5, 'name6', 8, 'name5'));
    
    $scope.episodes = eps;
      
  });
