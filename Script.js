const passwordBox = document.getElementById("password");
const passwordList = document.getElementById("passwordList");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghjklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+/.,;'[]'";
const allChars = upperCase + lowerCase + number + symbol;

let savedPasswords = [];

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

function savePassword() {
  const pwd = passwordBox.value;
  if (pwd && !savedPasswords.includes(pwd)) {
    savedPasswords.push(pwd);
    renderPasswords();
    alert("Password has been saved");

  }
}

function deletePassword(pwd) {
  savedPasswords = savedPasswords.filter(p => p !== pwd);
  renderPasswords();
}

function renderPasswords() {
  passwordList.innerHTML = "";
  savedPasswords.forEach(pwd => {
    const div = document.createElement("div");
    div.classList.add("password-item");
    div.innerHTML = `
      <span>${pwd}</span>
      <button onclick="deletePassword('${pwd}')">Delete</button>
    `;
    passwordList.appendChild(div);
  });
}
