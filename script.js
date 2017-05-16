
"use strict";

var teamArr = [];

//-----------------------------------------------------------------------------//
//These watch for button clicks to change the form

$('#add-button').on('click', getTeam);

$('#showFootball').on('click', showForm);



//write function to get data from the form and display in the table

function getTeam(){
	var name = $('#input-name').val();
	var team = $('#input-team').val();
    var player = $('#input-player').val();

	
	var newObject = {name: name, team: team, player: player};
  
  teamArr.push(newObject); 
  showTable();
  
  teamArr.forEach(buildTable);
	
	$('input').val(''); //clear inputs
	event.preventDefault();
}

function buildTable() {
  $("#build-tbody").empty();
  for (var i = 0; i < teamArr.length; i++) {
     $("#build-tbody").append("<tr><td>" + teamArr[i].name + "</td><td>" + teamArr[i].team + "</td><td>" + teamArr[i].player + "</td></tr>");
  }
   
}

//write function to show form

function showForm() {
  $('#showFootball').hide();
  $('#football-data').hide();
  $('#hide-form').show();
}

function showTable(){
  $('#showFootball').show();
  $('#football-data').show();
  $('#hide-form').hide();
}