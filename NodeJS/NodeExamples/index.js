var rect = require('./rectangle');
function solveRectangle(l,b){
    console.log("Solving rectangle for l = "+l+" b = "+b);
    if(l<=0||b<=0){
        console.log("Rectangle dimensions should be greater then zero")
    }
    else{
        console.log("Perimeter of rectangle is " + rect.perimeter(l,b));
        console.log("Area of rectangle is " + rect.area(l,b));
    }
}
solveRectangle(10,20)
solveRectangle(-10,20)
solveRectangle(10,0)
solveRectangle(10,10)