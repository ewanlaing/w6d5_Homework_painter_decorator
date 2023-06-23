const Decorator = function(){
    this.stock = []
}

Decorator.prototype.addPaint = function (paint_can){
    this.stock.push(paint_can);
};

Decorator.prototype.totalLitres = function (){
    return this.stock.reduce((total, paint_can) => {
        return total += paint_can.litresOfPaint;
    },0);
};

Decorator.prototype.canPaintRoom = function(room){
    if(this.totalLitres() >= room.area){
        return true;
    }else{
        return false;
    }
};

Decorator.prototype.paintRoom = function(room){
    if(this.canPaintRoom(room) === true){
        room.painted = true;
        let total = room.area;
        while(total > 0){
            this.stock.forEach((paint_can) => {
                if(total > paint_can.litresOfPaint){
                    total -= paint_can.litresOfPaint;
                    paint_can.empty();
                }else{
                    paint_can.litresOfPaint -= total;
                    total = 0;
                };
            });
        };
    };
};

Decorator.prototype.getRidOfEmptyCans = function(){
    let new_stock = [];
    for(paint_can of this.stock){
        if (paint_can.isEmpty === false){
            new_stock.push(paint_can);
            } 
        }
    this.stock = new_stock;
};

module.exports = Decorator;