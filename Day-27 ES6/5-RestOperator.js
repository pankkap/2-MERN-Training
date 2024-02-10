// Rest Operator: is used to Pack the data
function display(a,b,...item){      // spread Operator
    console.log(a,b)    
    console.log(item)
    // console.log(item)       // Array of Data
    item.forEach(element=>console.log(element))

}
display(5,10,15,20,25,30,27,34,56,78,8778,23,56,78)