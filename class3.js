/*higher order function*/
function fn(f1,f2){
    console.log("fn started executing")

f1()
f2()
}
fn(function(){
    console.log(" function f1 is called")

},
function(){
    console.log(" function f2 is called")
})