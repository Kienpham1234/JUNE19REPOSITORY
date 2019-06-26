

//factory function
function createCircle(radius){
return{
    radius,
    draw: function(){
        console.log('draw');
    }
};
}
const circle = createCircle(1);

// Constructor function
const Circle1 = new Function('radius',`
this.radius = radius;
this.draw = function(){
        console.log('draw');
}
`);
const orange = new Circle1(1);
const another = new Circle1(1);
