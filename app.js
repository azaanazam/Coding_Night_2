const signupForm = document.getElementById("signup");
const loginForm = document.getElementById("login");
const wel = document.getElementById("wel");
wel.style.display = "none";
let ululul = document.getElementById("ululul");


window.onload = function () {
  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn === "true") {
    showWelcome();
  } else {
    wel.style.display = "none";
    signupForm.style.display = "flex";
    loginForm.style.display = "none";
  }
};


function toggleForm() {
  if (signupForm.style.display === "none") {
    signupForm.style.display = "flex";
    loginForm.style.display = "none";
  } else {
    signupForm.style.display = "none";
    loginForm.style.display = "flex";
  }
}

function Signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("signupEmail").value;
  const number = document.getElementById("number").value;
  const password = document.getElementById("signupPassword").value;

  if (!name || !email || !number || !password) {
    alert(" Please fill all fields");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ name, email, number, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert(" SignUp Successful!");

  
  document.getElementById("name").value = "";
  document.getElementById("signupEmail").value = "";
  document.getElementById("number").value = "";
  document.getElementById("signupPassword").value = "";

  
  localStorage.setItem("loggedIn", "true");
  showWelcome();
}


function Login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert(" Please enter email and password");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const match = users.find(u => u.email === email && u.password === password);

  if (match) {
    alert(" Login Successful!");
    localStorage.setItem("loggedIn", "true");
    showWelcome();
  } else {
    alert(" Invalid Email or Password");
  }
}


function showWelcome() {
  signupForm.style.display = "none";
  loginForm.style.display = "none";
  wel.style.display = "block";

}


function btn3() {
  localStorage.setItem("loggedIn", "false");
  wel.style.display = "none";
  signupForm.style.display = "flex";
}


let addTask = document.getElementById("addTask");
let task = document.getElementById("task");
let list = document.getElementById("list");

addTask.addEventListener("click", () => {
  console.log(task);

  list.innerHTML += `<div class="main"><li>${task.value}</li> <div> <button onclick="edit(this)">Edit</button> <button onclick="del(this)">Delete</button></div> </div>`;
  task.value = " ";
});

function edit(element) {
  element.addEventListener("click", () => {
    task.value = element.parentNode.parentNode.firstChild.innerText
  });
}

function del(element) {
  element.addEventListener("click", () => {
    task.value = removeEventListener.parentNode.remove()
  });
}

