export default function something (i) {
    return i * i;
}


export function some(params) {
    console.log(params.add);
}

let p = {add: 5}

some(p);