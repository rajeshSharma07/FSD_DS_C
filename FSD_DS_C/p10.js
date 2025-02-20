const fs = require('fs');
fs.rmdir("mydir",(err) =>{
    if (err)
        console.log(err);
    console.log("directory deleted successfully.");
});