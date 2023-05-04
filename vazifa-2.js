let m = 50;
let L = "tonna";

switch(L){
    case "g":
        console.log(m / 1000 + " kg");
        break;

    case "kg":
        console.log(m  + " kg");
        break;

    case "tonna":
        console.log(m * 1000 + " kg");
        break;

    case "sentner":
        console.log(m / 100 + " kg");
        break;

    default: 
        console.log("Bunday Og`rilik o`lchovi mavjud emas!");
        break;
}