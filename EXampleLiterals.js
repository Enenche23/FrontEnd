function CheckStatement(floor){

let x = 
floor < 5
? "Web3Bridge"
:floor>=5 && floor< 9
? "Nigeria"
:floor >=9 && floor< 12
? "Smart Contract"
: "Blockchain"


return x;
}

console.log(CheckStatement(4));

