const assert = require('assert');
const Room = require('../models/room.js');

describe('Room', function() {

    let room;

    this.beforeEach(function(){
        room = new Room(10);
    });

    it ('should have an area', function (){
        const actual = room.area;
        assert.strictEqual(actual, 10);
    });

    it ('should start unpainted', function (){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });

    it ('should be able to be painted', function(){
        room.getPainted();
        const actual = room.painted;
        assert.strictEqual(actual, true);
    });


});