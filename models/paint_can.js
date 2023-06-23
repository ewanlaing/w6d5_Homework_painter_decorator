const Paint_can = function (litresOfPaint){
    this.litresOfPaint = litresOfPaint;
    this.isEmpty = false;
}

Paint_can.prototype.empty = function() {
    this.isEmpty = true;
}

module.exports = Paint_can;