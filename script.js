// Manipulare DOM
const modelsContainer = document.querySelector('.models');

// Creare element
const newModel = document.createElement('div');
newModel.className = 'model';
newModel.innerHTML = `
    <img src="img/bmw-m340i.jpg" alt="BMW Seria 3">
    <h3>BMW M340i</h3>
    <p>Progres catre perfectiune.</p>
`;

const newModel1 = document.createElement('div');
newModel1.className = 'model';
newModel1.innerHTML = `
    <img src="img/bmw-m440i.jpg" alt="BMW Seria 4">
    <h3>BMW M440i</h3>
    <p>Tehnologie inovatoare.</p>
`;

const newModel2 = document.createElement('div');
newModel2.className = 'model';
newModel2.innerHTML = `
    <img src="img/bmw-m550i.jpg" alt="BMW Seria 5">
    <h3>BMW M550i</h3>
    <p>Sedanul perfect.</p>
`;

const newModel3 = document.createElement('div');
newModel3.className = 'model';
newModel3.innerHTML = `
    <img src="img/bmw-m760i.jpg" alt="BMW Seria 7">
    <h3>BMW M760i</h3>
    <p>Lux la alt nivel.</p>
`;

// Adaugare elemente
modelsContainer.appendChild(newModel);
modelsContainer.appendChild(newModel1);
modelsContainer.appendChild(newModel2);
modelsContainer.appendChild(newModel3);

// Exemplu Event handling 
const banner = document.querySelector('.banner');
banner.addEventListener('click', function() {
    banner.style.backgroundColor = 'red';
});

// Inputuri funcționale

function myFunctionTI() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", "Performanta accesibila.");
  document.body.appendChild(x);
}

function myFunctionNI() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "number");
  x.setAttribute("value", "58000");
  document.body.appendChild(x);
}

// SetTimeout si SetInterval

let counter=0;

	const timerID = setTimeout(function() {
		window.location.href = "https://www.bmw-m.com/";
	}, 20000000);
	
	function incrementByOne(){
		counter++;
		console.log(counter);
	}
	
	const intervalID = setInterval(function() {
		incrementByOne();
		if(counter==6)
		{
			clearInterval(intervalID);
			console.log("Interval was cleared");
		}
	}, 1000);
	
// LocalStorage

const carCollection = [
    { 
		brand: 'BMW', 
		model: 'M135i' 
	},
	{ 
		brand: 'BMW', 
		model: 'M240i' 
	},
	{ 
		brand: 'BMW', 
		model: 'M340i' 
	},
    { 
		brand: 'BMW', 
		model: 'M440i' 
	},
    { 
		brand: "BMW", 
		model: "M550i" 
	},
	{
		brand: "BMW", 
		model: "M760i"
	}
];

localStorage.setItem("cars", JSON.stringify(carCollection));

const storedCars = JSON.parse(localStorage.getItem('cars'));
console.log(storedCars);

// Metode din JavaScript

let arraypreturi = [53000,58000,67000,70000,98000,141000];

let sum = arraypreturi.reduce(function(a, b){
  return a + b;
});

console.log(sum,'€');

console.log(Math.min(53000,58000,67000,70000,98000,141000));

console.log(Math.max(53000,58000,67000,70000,98000,141000));

const d = new Date();
console.log(document.getElementById("demo").innerHTML = d);


// Schimbarea aleatoare a valorilor unor proprietăți

document.querySelector("#myButton").onclick = function(){
	
	const h1 = document.querySelector("#myH1");
	const underline = document.createElement("u");
    underline.innerText = "Felicitari!";
    h1.innerText = "";
    h1.append(underline);

    const p = document.querySelectorAll(".myP");
    //p[0].innerText = "WHOAAAAAA!";
    p.forEach(element => element.innerText = "Ti-ai ales modelul preferat!");

    const buttons = document.querySelectorAll("button");
    //buttons[3].remove();
    buttons.forEach(element => element.remove());
}

// Utilizarea proprietăților classList, target sau currentTarget

function getClass()  
    {  
      var e = document.getElementById("Btn");  
      e.classList.add("myClass");  
    } 


// Utilizarea metodelor getComputedStyle și stopPropagation

const element = document.getElementById("test");
const ob = window.getComputedStyle(element, null);

let bgColor = ob.getPropertyValue("background-color");
console.log(document.getElementById("demo").innerHTML = bgColor);



// Validarea datelor dintr-un formular folosind expresii regulate

const name = document.getElementById('name')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
	let messages = []
	if(name.value === '' || name.value == null) {
		messages.push('Please fill in this field.')
	}
	
if(messages.lenght>0){
	e.preventDefault()
	errorElement.innerText = messages.join(', ')
}
})






	
