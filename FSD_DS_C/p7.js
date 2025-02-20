const fs = require('fs');

const data = "I am appended data";

fs.appendFile("./data.txt", data, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Data appended");
    }
});