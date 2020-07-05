const rectangle = require('./rectangle');
function solveRectangle(l,b){
    console.log("Solving rectangle for l = "+l+" b = "+b);
    rectangle(l,b,(err,rectangle)=>{
        if(err)
        {
            console.log("ERROR :" + err.message);
        }
        else
        {
            console.log("Area of rectangle is : " + rectangle.area());
            console.log("perimeter of rectangle is : " + rectangle.perimeter());
        }
    }
    );
    console.log("after call back execution");
}
solveRectangle(10,20);
solveRectangle(-10,20);
solveRectangle(10,0);
solveRectangle(10,10);