// Create an object using bracket and dot notation that represents the characters and related
//data you may find in a game of Clue.

var game = {};

game.murderer = "??";

game['weapons'] = [
    { type: 'lasers', location: 'lab' },
    { type: 'angry cats', location: 'bedroom' },
    { type: 'dish soap', location: 'bathroom' }];

game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr. Green');
console.log(game.name)

