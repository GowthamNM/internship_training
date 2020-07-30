let headData = [{
    text: "Name"
}];
let dataRows = [];
for (i = 0; i < 300; i++) {
    let currentRow = [{
        text: "Hello World"
    }];
    dataRows.push({
        data: currentRow
    });
}
let newDynamicTable = new DynamicTable({
    tableId: `tableData`,
    headData,
    dataRows,
    head2Row,
    footRow,
    functionArray,
    addRowCount: true,
    addHeadDataAtBottom: true,
    addFilter: true,
    addLimit: true,
    addCheckboxes: true,
    checkboxClass
});
let newDynamicTableNode = newDynamicTable.createTable();
let divNode = document.getElementById(`tableDiv`);
divNode.appendChild(newDynamicTableNode);


function iseven(num){
if(num>0)
{
if(num%2==0)
{
return "True";
}
else
{
return "False";
}
}
else if(num==0)
{
return "Zero";
}
}




function facto(num){
var g=1;
for(var i=1;i<=num;i++)
{
g=g*i;
}
return g;
}




function kts(str){
while(str.match("-"))
{
str=str.replace("-","_");
}
return str;
}



function bet_neg_ten_to_pos_twel(num=-10){	
	console.log("1. All no. between -10 & 19")
	while(num>=-10 && num<20)
	{
	console.log(num);
	num++;
	}
}

function bet_ten_to_foty(num=10){
	console.log("2. All even no. between 10 & 40")
	while(num>=10 && num<=40)
	{
		if(num%2==0)
		{
			console.log(num);
		}
		num++;
	}
}

function odd_bet_trihun_tritri(num=300){

	console.log("3. All odd no. between 300 & 333")
	while(num>=300 && num<=333)
	{
		if(num%2!=0)
		{
			console.log(num);
		}
	num++;
	}
}

function val_div_by_fiv_to_fifty(num=5){
	console.log("4. All no. /5 && 3  between 5 & 50")
	while(num>=5 && num<=50)
	{
		if(num%5==0 && num%3==0)
		{
			console.log(num);
		}
		num++;
		}
}

function toCelsius(fahrenheit) {
	console.log("Fahrenheit to Celsius");
  	return (5/9) * (fahrenheit-32);
}


function array_val(){
	console.log("Array");
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
//document.getElementById("demo").innerHTML = txt;
console.log(txt);

function myFunction(value, index, array) {
  txt = txt + value +"\n"; 
}
}


