function fn(){
    var personinfo={
         name:"indu",
         email:"indu05@gmail.com",
    
   contactdetails:{
        mobile:5555,
        land:222,
    },
    address:{
        hno:"305",
        city:"bangalore",
        state:"karataka"
    }
   
}
/*accessing the property in object*/
//console.log(personinfo.name)
//console.log(personinfo.email)
//console.log(personinfo.contactdetails.land)
//console.log(personinfo.address.city)
//console.log(personinfo.address.state)

/*update the property*/
//personinfo.address.city="chittoor"
//console.log(personinfo)

//personinfo.contactdetails.mobile="0000"
//console.log(personinfo)

/*delete theproperty*/
//delete personinfo.contactdetails.land
//console.log(personinfo)

/*insert the property*/
personinfo.contactdetails.country="india"
console.log(personinfo)






}
fn()