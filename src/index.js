export default function sortObject(obj, param) {
    const arr = [];

    const ordered = {};
    Object.keys(obj).sort().forEach((key) => {
        ordered[key] = obj[key];
    }); 

    for(let item of param) {
        arr.push({key:item, value:obj[item]});
     }
    for(let item in ordered){
        if(arr.some(i => i.key === item)) continue
        arr.push({key:item, value:obj[item]})
    }
    // console.log(arr)
    return arr;
}
// const obj = {
//     name: 'мечник', 
//     health: 10, 
//     level: 2, 
//     attack: 80, 
//     defence: 40
//   }

// sortObject(obj, ["name", "level"])