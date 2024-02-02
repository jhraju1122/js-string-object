// ekta object k loof kora//
 const mobile = {
    brand: 'samsung',
    price:5000,
    color:'black',
    camera:'12mp',
    isNew: true
 }
 
 for(const prop in mobile) //in dey object er jonno and 'of' use kori Array er jonno
 {
    // console.log(prop)
    // console.log(mobile[prop])
 }

const keys = Object.keys(mobile);  //[ egula Arrey hoye gece]
console.log(keys)