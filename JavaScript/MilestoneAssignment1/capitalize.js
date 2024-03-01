// Method 1

function checkCaps(name){
    if(name[0] === name[0].toUpperCase()) return name;
    else return name[0].toUpperCase() + name.slice(1);
}

console.log(checkCaps("yusuf"));

// Method 2

let arr = ["yusuf", "arshad", "kamil", "Shan"];
arr.map((ele) => {console.log(ele[0].toUpperCase() + ele.slice(1))});