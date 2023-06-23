const assert = require('assert');
const Paint_can = require('../models/paint_can.js');

describe('Paint_can', function(){

    let paint_can;

    this.beforeEach(function(){
        paint_can = new Paint_can(5);
    });

    it ('should have a number of litres of paint', function () {
        const actual = paint_can.litresOfPaint;
        assert.strictEqual(actual, 5);
    });

    it ('should be able to check if it is empty', function() {
        const actual = paint_can.isEmpty;
        assert.strictEqual(actual, false);
    });

    it ('should be able to empty itself of paint', function(){
        paint_can.empty()
        const actual = paint_can.isEmpty;
        assert.strictEqual(actual, true);
    });

});