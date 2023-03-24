const employees=[
{ name:"Dravid carlson",age:30},
{ name:"john Cena",age:34},
{ name:"Mike Sheridan",age:25},
{ name:"john Carte",age:50}
];

//find index method
let result= employees.find(function(value){
	return value.name === 'John Cena';
});
console.log(result);

//find index first element in an Array
let resultpos=employees.findIndex(function(value){
	 return value.name === 'John Cena';
});
console.log(resultpos);