// function pow(x, y) {
//     let res = 1;

//     if (y == 0) {
//         return 1;
//     } else if (x == 0){
//         return res
//     } else if (x < 0 && y > 0){
//         for (let i = 1; i < y; i++){
//             return res*x;
//         }
//     } else if (x > 0 && y < 0){
//         for (let i = y; i < 0; i++){
//             return res/x;
//         }
//     } else {
//         for(let i = 1; i <= y; i++){
//             return res*x
//         }
//     }

//     return res;


//     // if (y == 0) return 1;
//     // if (y < 0) return 1/x^y;
//     // if (x == 0) return 0;
//     // if (x < 0) return -(res);


//     // for(let i = 1 ; i < y; i++) res*=x
//     // return res;
// }

// module.exports = {
//     pow
// }


function pow(x, y) {
    let result = 1;
    if (y == 0) {
        return result;
    } else if (x == 0) {
        return result = 0;
    } else if (x < 0 && y > 0) {
        for (let i = 1; i <= y; i++) {
            result = result * x;
        }
    } else if (x > 0 && y < 0) {
        for (let i = y; i < 0; i++) {
            result = result / x;
        }
    } else {
        for (let i = 1; i <= y; i++) {
            result = result * x;
        }
    }

    return result;
}

module.exports = {
    pow
}