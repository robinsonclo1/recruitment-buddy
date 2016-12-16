$(document).ready(function(){
    $('.btn').mouseenter(function() {
        $(this).fadeTo('fast');
    });
    $('.btn').mouseleave(function() {
        $(this).fadeTo('fast');
    });
});

function roundsOnLoad() {
	var rounds = document.getElementById('numRounds');
	return rounds;
}
function numRoundsButton() {
	rounds = roundsOnLoad();
	for (i=1; i <= rounds.value; i++) {
		$("#roundsMenu").append("<li><a>Round " + i + " </a></li>");
	}
}

function partiesOnLoad() {
	var parties = document.getElementById('numParties');
	return parties;
}

function numPartiesButton() {
	parties = partiesOnLoad();
	for (i=1; i <= parties.value; i++) {
		$(".pagination").append("<li><a>Party " + i + " </a></li>");
	}
}

window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    alert("Successfully processed!")
    alert(data);
  }