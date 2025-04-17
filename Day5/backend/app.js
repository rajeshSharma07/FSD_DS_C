const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');

const app = express();
let users = [];

app.use(cors());
app.use(express.json());

const readdata = async () => {
  try {
    users = JSON.parse(await fs.readFile('./data.json', 'utf8')) || [];
  } catch (error) {
    users = [];
  }
};

const writedata = async () => {
  await fs.writeFile('./data.json', JSON.stringify(users));
};

readdata();

app.get('/users', async (req, res) => {
  res.json(users);
});

app.post('/users', async (req, res) => {

  const { name, age } = req.body;
  const newid=users.length>0 ?users[users.length-1].id+1:1;
  const newUser = {
    id: Date.now(),
    name,
    age
  };
  users.push(newUser);
  await writedata();
  res.status(200).json({ message: 'User added successfully', data: newUser });
});

app.put('/users/:id',(req,res)=>{
    const id=req.params.id;
    const{name,age}=req.body;
    const index=users.findIndex(user=>user.id==uid);
    if(!name||age){
        res.status(400),json({message:'please provide  both name and age'});
        return;
    }
    if(index==-1){
        res.status(404).json({message:'user not found!'});
    }
    users[index].name=name;
    users[index].age=age;
    writedata();
    res.status(200).json({message:'user update successfully',data: users[index] });
})


const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});

