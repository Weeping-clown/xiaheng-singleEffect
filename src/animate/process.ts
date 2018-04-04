export class Tween {

    easeOut: Function = (t, b, c, d) => {
        console.log(t, b, c, d);
        return -c * (t /= d) * (t - 2) + b;
    }
    // constructor() {
    //     this.easeOut = (t, b, c, d) => {
    //         console.log(t, b, c, d);

    //         return -c * (t /= d) * (t - 2) + b;
    //     }
    // }
    // Quad:{
    //     easeOut:(t,b,c,d)=>{
    //         return -c *(t/=d)*(t-2) + b; 
    //     }
    // }
}
export function easeOut(type, t, b, c, d) {
    let x = -c * (t /= d) * (t - 2) * type + b;
    console.log("返回距离2", -c * (t /= d) * (t - 2) * type, x);
    return x;
}
// export function easeOutLeft(t, b, c, d) {
//     let x = c * (t /= d) * (t - 2) + b;
//     console.log("返回距离2", x);
//     return x;
// }


