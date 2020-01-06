var currentLocation = '/ariskycode/profile';
var currentDirectory = ariskycode.profile;

$(document).click(function (event) {
   $('#input').focus(); 
});

$(document).ready(function (event) {
   $('#input').focus(); 
});

$(document).keypress(function(event) {
    var input = $('#input').val();
    if (event.key === "Enter" && input != '') {
        $('#path').append('<span> ' + input + '</span');
        parseInput(input);
    }
});

function parseInput(input) {
    if (input === 'clear') {
        console.log('Clearing cli');
        $('#welcome').remove();
        $('#cli').html('');
    }
    if (input === 'details') {
        $('#cli').append('<div>>'+ currentDirectory.details +'</div');
    }
    if (input === 'ls -la') {
        $('#cli').append('<div>>'+ currentDirectory.directory +'</div');
    }
    if (input.startsWith('cd')) {
        updateLocation(input);
    }
    if (input === ':help') {
        $('#cli').append('<div>>Thank you for using help.<br/>>To navigate, use command <i>cd \'path\'</i><br/>>To move up a directory, use command <i>cd ..</i><br/>>To view the contents of a directory, use command <i>ls -la</i><br/>>To seek help, use command <i>:help</i><br/></div');
    }
    createNewLine();
}

function updateLocation(input) {
    var location = input.replace('cd ', '');
    if(location != '..') {
        currentDirectory = ariskycode[location];
        currentLocation += '/' + location;
    } else {
        currentDirectory = ariskycode[currentDirectory.parent];
        currentLocation = currentLocation.substring(0, currentLocation.lastIndexOf('/'));
    }
}

function createNewLine() {
    $('#path').removeAttr('id');
    $('#input').remove();
    $('#cli').append('<div><span id="path">'+currentLocation+'> </span><input id="input" class="cli" type="text"/><div>');
    $('#input').focus(); 
}
