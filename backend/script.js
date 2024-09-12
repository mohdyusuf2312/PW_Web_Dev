const fs = require('fs')

// fs.writeFile("./My_GitHub/PW_Web_Dev/backend/hey.txt", "Hello, How are you?", function(err){
//     if(err){console.error(err)}
//     else console.log("done.")
// })

// fs.appendFile("./My_GitHub/PW_Web_Dev/backend/hey.txt", "\nBye", function(err){
//     if(err){console.error(err)}
//     else console.log("done.")
// })

fs.unlink("./My_GitHub/PW_Web_Dev/backend/hey.txt", (err) => {
    if(err) console.log(err.message)
    else console.log("File removed")
})