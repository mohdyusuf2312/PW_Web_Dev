function checkCaps(name){
    if(name[0] === name[0].toUpperCase()) return name;
    else return name[0].toUpperCase() + name.slice(1);
}

console.log(checkCaps("yusuf"));