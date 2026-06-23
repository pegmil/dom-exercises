const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey, I'm red!";
para.style.color = 'red';
container.appendChild(para);

const head3 = document.createElement("h3");
head3.style.color = 'blue';
head3.textContent = "I'm a blue h3!";
container.appendChild(head3);

const div2 = document.createElement("div");
div2.style.backgroundColor = 'pink';
div2.style.borderColor = 'black';

const head1 = document.createElement("h1");
head1.textContent = "I'm in a div";
div2.appendChild(head1);

const para2 = document.createElement('p');
para2.textContent = "ME TOO!";
div2.appendChild(para2);

container.appendChild(div2);

//the JavaScript file
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World - 2nd option");

// the JavaScript file
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Hello World - a 3rd time");
});

// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// METHODS 2 & 3
function alertFunction2() {
  alert("YAY! YOU DID IT - again!");
}

const btn5 = document.querySelector("#btn5");

// METHOD 2
btn5.onclick = alertFunction2;

// METHOD 3
btn5.addEventListener("click", alertFunction2);

btn5.addEventListener("click", function (e) {
  console.log(e);
});

btn5.addEventListener("click", function (e) {
  console.log(e.target);
});

btn5.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

