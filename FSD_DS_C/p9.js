const fs = require('fs');
fs.mkdir('mydir', (err) => {
  if (err) throw err ;
    console.error(err);
  }
  else {
    console.log("Directory Created")
  }
}
)