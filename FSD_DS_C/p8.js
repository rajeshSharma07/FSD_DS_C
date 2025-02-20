const fs = require('fs');
const data = " I am suspended data"
fs.appendFile("./mydir/data.txt", data, (err) => {
    if (err)
        console.log(err)
    console.log("data suspended");
});