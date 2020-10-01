/*
console.log("okk goooys");

console.log('JavaScript Boombaam!!!!');

var name = 'sasi' ;

let day1='monday' ;

console.log('name of the student is --- '+name);

console.log('appointment on '+day1);

let marks = 80 ;

console.log('marks obtained is '+marks);

console.log('data type of name is '+typeof name);

console.log('data type of marks is '+typeof marks);

let price = 99.99 ;

console.log('price of calc is '+price);

console.log('data type of price is '+typeof price);

let appointAvailable = false ;

console.log('Appointment is confirmed '+appointAvailable) ;

console.log('data type of appointmentAvailable is '+typeof name);

let day1 = 1 ;

if(day1 == 1){
    console.log('appointmnt confirmed')
}
else {
    console.log('not confirmed')
}

let marks = 101;
if(marks>=94 && marks<=100) {
    console.log('Grade-A+');
}
else if(marks>=87 && marks<=93){
    console.log('Grade-A');
}
else if(marks>=80 && marks<=86){
    console.log('Grade-A-');
}
else if(marks>=77 && marks<=79){
    console.log('Grade-B+');
}
else if(marks>=73 && marks<=76){
    console.log('Grade-B');
}
else if(marks>=70 && marks<=72){
    console.log('Grade-B-');
}
else if(marks>=67 && marks<=69){
    console.log('Grade-C+');
}
else if(marks>=63 && marks<=66){
    console.log('Grade-C');
}
else if(marks>=60 && marks<=62){
    console.log('Grade-C-');
}
else if(marks>=50 && marks<=59){
    console.log('Grade-D');
}
else if(marks<=49) {
    console.log('Grade-F');
}
else {
    console.log('Not valid');
}

*/
/*
document.write("Welcome "+"<br>");

let i ;
for(i=1;i<=5;i++){
 
    for(let j=1;j<=i;j++){
 
        document.write(" # ");
    }
    document.write("<br>")
   
}
*/
/*
function getmsg(name){

    document.write(`Hello dear ${name} from a fn <br><br>`);
}
getmsg("Nikh");

function getcontact(){

    let contact = "647-111-2222"
    return contact ;
}
document.write(getcontact());

*/


function getaddition(n1,n2){

    document.write(`sum of two numbers ${n1} and ${n2} is--> ${n1+n2} <br><br>`);
}
getaddition(7,8);

function getsubtrationn(n1,n2){

    document.write(`difference of two numbers ${n1} and ${n2} is--> ${n1-n2} <br><br>`);
}
getsubtrationn(8,5);

function getdivision(n1,n2){

    document.write(`division of two numbers ${n1} and ${n2} is--> ${n1/n2} <br><br>`);
}
getdivision(70,7);

function getproduct(n1,n2){

    document.write(`multiplication of two numbers ${n1} and ${n2} is--> ${n1*n2} <br><br>`);
}
getproduct(7,8);

function celciustofahrenhiet(temp){

    document.write(`celcius to fahrenhiet <br><br>`); 
    let value = (temp*(9/5))+32 ;
    document.write(`${temp}C is ${value}F`);
}
celciustofahrenhiet(30);



function fahrenhiettocelcius(temp){

    document.write(`<br><br>fahrenhiet to celcius <br><br>`); 
    let value = (temp-32)*(5/9) ;
    document.write(`${temp}F is ${value}C`);
}
fahrenhiettocelcius(130);


