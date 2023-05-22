//alert("Hello");

console.log("test");

// ////////////////////////////////////////

var x = 10;
var y = 15;

console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x*y);
console.log(x>y);
console.log(x>=y);
console.log(x<y);
console.log(x<=y);
console.log(x==y);
console.log(x===y);
console.log(x!=y);

// ///////////////////////////////////////////
console.log("/////////If else///////////")

if (x>y){
    console.log("Hello X")
}
else{
    console.log("Hello Y")
}

// ///////////////////////////////////////////
console.log("/////////Switch case loop///////////")

var day = "monday";

switch (day) {
    case "sunday":
        console.log("This is Sunday");
    break;

    case "monday":
        console.log("This is Monday");
    break;

    default:
        console.log("It's Weekly Holiday");
    break;

}

// ////////////////////////////////////////////
console.log("/////////For Loop///////////")

for (let a = 0; a < 10; a++) {
    console.log(a);
    
}
// ////////////////////////////////////////////
console.log("/////////Do while loop///////////")

var number = 1;

do {

    console.log(number);
    number++;
    
} while (number <= 15);

// ///////////////////////////////////////////////
console.log("/////////While Loop///////////")

var sum = 1;
while (sum < 10) {
    console.log(sum);
    sum++;
    
}

// ///////////////////////////////////////////////
console.log("/////////Array///////////")

var name2 = ["Rimon" , "Jahid" , "Muhit"]


console.log(name2);
console.log(name2[1]);
console.log("///////// ///////////")

name2.push("Tonmoy")
name2.push("Tonmoy2")
name2.pop()
name2.splice(1,2)

for (let v = 0; v < name2.length; v++) {
    console.log(name2[v]);
    
}

// ///////////////////////////////////////////////
console.log("/////////Object///////////")

var info2 = {
    fullName : "Rimon",
    mail : "Info@mail.com"
}

console.log(info2)

// ///////////////////////////////////////////////
console.log("/////////Function///////////")

function myCode(a,b) {
    var sun = a + b ;
    return sun;
    
}
console.log(myCode(20,10))
console.log(myCode(100,10))
console.log(myCode(20,100))