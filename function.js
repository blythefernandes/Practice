function greet (name, cb){
    console.log("Hello, "+ name+ "!");
    cb();
}
function gdb(){
    console.log("Goodbye!");
}
console.log (greet("Blythe",gdb));
