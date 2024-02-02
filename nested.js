const college = {
    name: 'rakib',
    class: ['11', '12'],
    events: ['science', 'bijoy'],
    unique:{
        color:'blue',
         merit:'5'
       
    }
  

}
console.log(college);
// console.log(college.class);
college.events[1]= '16 december'
console.log(college.events[1])

//delete
delete college.events
console.log(college)