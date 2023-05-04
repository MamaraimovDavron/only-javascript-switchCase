let l = "sentner";
let m = 5;

switch(l){
    case 'g':
        console.log(m / 1000 + l);
        break;

    case 'kg':
        console.log(m / 1 + l);
        break;

    case 'tonna':
        console.log(m * 1000 + l);
        break;

    case 'sentner':
        console.log(m / 100 + l);
        break;

    default:
        console.log("Bunday og`irlik o`lchovi yo`q");
        break;
}