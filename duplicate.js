const names = ['shormi', 'tasnim', 'tasniqul', 'tamim','taposi','tamim','tasnim','alimuzzaman', 'tamim'];
function removeduplicatename (names){ 
    const unique=[];
    for(let i = 0; i < names.length; i++){
        const name= names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqename= removeduplicatename(names);
console.log(uniqename);