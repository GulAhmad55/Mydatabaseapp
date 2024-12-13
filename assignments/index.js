const Email = document.getElementById("email");
const Password = document.getElementById("password");
const confirmPassword = document.getElementById("Confirm-Password");
const tbody = document.getElementById("tbody");

function Adddata() {
  let tr = document.createElement("tr");
  tbody.appendChild(tr);

  let td1 = document.createElement("td");
  td1.innerHTML = Email.value;
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerHTML = Password.value;
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.innerHTML = confirmPassword.value;
  tr.appendChild(td3);
}

function Removedata(){
  Email.value = " ";
  Password.value = " ";
  confirmPassword.value = " ";
 
}

// const Email = document.getElementById("email")
// const Password = document.getElementById("password")
// const confirmPassword = document.getElementById("Confirm-Password")
// const tr = document.getElementById("tr")

// const Email1 = document.getElementById("email")
// const Password1 = document.getElementById("password")
// const confirmPassword1 = document.getElementById("Confirm-Password")
// const tr1 = document.getElementById("tr")

// function myFunction() {
//     let td = document.createElement("td");
//     td.innerHTML = email.value;
//     tr.appendChild(td);
//     td.innerHTML = password.value;
//     tr.appendChild(td);
//     td.innerHTML = Confirm-Password.value;
//     tr.appendChild(td);

//     let td1 = document.createElement("td");
//     td.innerHTML = email.value;
//     tr.appendChild(td);
//     td.innerHTML = password.value;
//     tr.appendChild(td);
//     td.innerHTML = Confirm-Password.value;
//     tr.appendChild(td);

// }
