const loginForm = document.querySelector("#input-form");
const loginInput = document.querySelector("#input-form input");
const welecomeText = document.querySelector("#welcome-text");
// const loginForm = document.getElementById("input-form");
// const loginInput = loginForm.querySelector("input");
// const welecomeText = document.querySelector("#welcome-text");

const USER_NAME = "userName";
const HIDDEN = "hidden";


function handleInput(event) {
    event.preventDefault();
    const inputValue = loginInput.value;
    localStorage.setItem(USER_NAME,inputValue);
    loginForm.classList.add(HIDDEN);
    welcomeTextfunction(inputValue);
}


function welcomeTextfunction (name) {
    welecomeText.classList.remove(HIDDEN);
    welecomeText.innerText = `hello ${name}`;
}

const GetUserName = localStorage.getItem(USER_NAME);


if (GetUserName === null ){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", handleInput);  
} else {
    welcomeTextfunction(GetUserName);
}



/* html 
<form id="input-form" class="hidden">
<input type="text" placeholder="what's your name?" />
<input type="submit" value="next" />
</form>
<h1 id="welcome-text" class="hidden"></h1> 
*/