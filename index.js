var ham = document.getElementById("nav_ham");
var loginClose = document.getElementById("login_cls");
let loginPage = document.getElementById("login");
let aLogin = document.getElementById("aLogin");
let aSignup = document.getElementById("aSignup");
let profile = document.getElementById("profileBtn");
let loginDrop = document.getElementById("loginDrop");
let hamDiv = document.getElementById("ham_div");
let hamClose = document.getElementById("ham_close");
const foodSection = document.querySelector('food_sec');


loginPage.classList.toggle("toggle");
window.onload = startup;

function startup(){
    showHam();
    showLogin();
   loginCls();
}


loginClose.onclick = loginCls;
aLogin.onclick = loginCls;
profile.onclick = showLogin;
hamClose.onclick = showHam;
ham.onclick = showHam;

function showLogin(){
    let logined = true;  //TODO if !logind show login page
    if (logined) {
        loginDrop.classList.toggle("logindrop");
    }
}

function loginCls(){

    loginPage.classList.toggle("close");
    
}
function showHam(){
    hamDiv.classList.toggle("close");
 
}




let foodItems = [{
    "item_name":"soup",
    "price":"$12",
    "image":"https://images.freeimages.com/images/previews/fcf/food-4-1324994.jpg"

},{
    "item_name":"Alfaham",
    "price":"$20",
    "image":"https://images.freeimages.com/images/previews/fcf/food-4-1324994.jpg"

},{
    "item_name":"kebab",
    "price":"$30",
    "image":""

},{
    "item_name":"shawaya",
    "price":"$28",
    "image":""

},{
    "item_name":"burger",
    "price":"$10",
    "image":""

}]

for (let i = 0; i < foodItems.length; i++) {
   
        const element = foodItems[i]["item_name"];
        console.log(element)
    }
    


// console.log(foodItems[0].item_name);  

