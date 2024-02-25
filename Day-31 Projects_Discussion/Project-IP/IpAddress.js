// IPV4-https://api.ipify.org/?format=json
// IPV6-https://ipapi.co/json


document.addEventListener('DOMContentLoaded', function(){
    // API call to get the IP Address of User
    fetch(`https://api.ipify.org/?format=json`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.ip)
        document.getElementById('ip_address').innerHTML = data.ip
        findGeolocation(data.ip);
    })
    .catch(err=>console.log(err))
})
async function findGeolocation(ip_address){
    // API call to get the Pincode of User's Location
   try
   {
    let res = await fetch(`https://ipinfo.io/${ip_address}/geo`)
    let data = await res.json();
    console.log(data.postal)
    document.getElementById('pincode').innerHTML = data.postal;
    findPostOffices(data.postal);
   }
   catch(err)
   {
    console.log(err.message)
   }
}

async function findPostOffices(pincode){
    // API call to get list of PostOffices at user's Pincode
    try{
    let res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
    let data = await res.json();
    let listOfPostOffice = data[0].PostOffice
    console.log(listOfPostOffice)
    displayPostOffice(listOfPostOffice)
    }
    catch(err){
        console.log("There is some issue with API")
    }
}

// To display the List of POst Offices on Document
function displayPostOffice(listOfPostOffice){
    let count=0
    for (const i of listOfPostOffice) {
        let newRow = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerHTML = `${++count}`
        let td2 = document.createElement('td')
        td2.innerHTML = `${i.Name}`

        newRow.appendChild(td1)
        newRow.appendChild(td2)

        document.getElementById('my_table').appendChild(newRow)
    }
}

