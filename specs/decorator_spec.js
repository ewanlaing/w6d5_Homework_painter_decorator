const assert = require('assert');
const Decorator = require('../models/decorator.js');
const Paint_can = require('../models/paint_can.js');
const Room = require('../models/room.js');

describe('Decorator', function(){
    let decorator;
    let paint_can1;
    let paint_can2;
    let paint_can3;
    let room1;
    let room2;
    let room3;

    this.beforeEach(function(){
       decorator = new Decorator();
       paint_can1 = new Paint_can(5);
       paint_can2 = new Paint_can(10);
       paint_can3 = new Paint_can(15);
       room1 = new Room (5);
       room2 = new Room (10);
       room3 = new Room (15);
    });

    it ('should start with an empty paint stock', function(){
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 0);
    });

    it ('should be able to add a can of paint', function () {
        decorator.addPaint(paint_can1);
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [paint_can1])
    });

    it ('should be able to calculate total litres of paint', function(){
        decorator.addPaint(paint_can2);
        const actual = decorator.totalLitres();
        assert.strictEqual(actual, 10);
    })

    it ('should be able to calculate wether it has enough paint to paint a room (truecase)', function(){
        decorator.addPaint(paint_can2);
        const actual = decorator.canPaintRoom(room1);
        assert.strictEqual(actual, true);
    });

    it ('should be able to calculate wether it has enough paint to paint a room (falsecase)', function(){
        decorator.addPaint(paint_can2);
        const actual = decorator.canPaintRoom(room3);
        assert.strictEqual(actual, false);
    });

    it ('be able to paint a room if it has enough stock(truecase)', function(){
        decorator.addPaint(paint_can3);
        decorator.paintRoom(room3);
        const actual = room3.painted;
        assert.strictEqual(actual, true);
    });

    it ('be able to paint a room if it has enough stock(falsecase)', function(){
        decorator.addPaint(paint_can2);
        decorator.paintRoom(room3);
        const actual = room3.painted;
        assert.strictEqual(actual, false);
    });

    it ('should decrease the amount of paint in stock when painting a room', function(){
        decorator.addPaint(paint_can2);
        decorator.paintRoom(room1);
        const actual = decorator.totalLitres();
        assert.strictEqual(actual, 5);
    });

    it ('should be able to remove empty paint cans from stock', function() {
        decorator.addPaint(paint_can1);
        decorator.addPaint(paint_can2);
        decorator.addPaint(paint_can3);
        paint_can2.empty();
        paint_can1.empty();
        decorator.getRidOfEmptyCans();
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [paint_can3]);
    })

});