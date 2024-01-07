var username = prompt("Enter username ")
var password = prompt("Enter Password ")


if(username == "" || password == "")
{
    alert("username or password can not be blank")
}
else
{
    if(username == "admin" && password == "password123")
    {
            alert("Welcome to Website")
    }
    else
    {
        alert("Username or password incorrect")
    }
}