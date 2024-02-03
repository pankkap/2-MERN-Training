var apiUrl = "https://jsonplaceholder.typicode.com/users"

function apiData(api)
{
    fetch(api)
    .then(function(data){return data.json()})
    .then(function(res){console.log(res)})
    .catch(function(err){console.log(err)})
    
}
apiData(apiUrl)