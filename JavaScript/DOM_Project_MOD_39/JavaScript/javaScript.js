function hey(){
    document.body.style.backgroundColor = colorCreation();
}

let colorCreation = () => {
    let cons = "#";
    let hex = "0123456789abcdef";
    for(let i = 0; i < 6; i++){
        cons += hex[Math.floor(Math.random() * 16)];
    }
    return cons;
}