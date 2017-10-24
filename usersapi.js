const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const users = [
    {
        id: 1,
        username: 'first',
        name: 'Rajesh'
        gender: 0,
        password: 987645
    },
    {
        id: 2,
        username: 'second',
        name: 'Kutrapali',
        gender: 0,
        password: 987654
    },

        id: 3,
        username: 'third',
        name: 'Manushak',
        gender: 1,
        password: 987546
];
//GET
app.get('/users/:id',function(req,res) {
    let id = req.params.id;
    for (let ix = 0; ix < users.length; ++ix) {
        if (users[ix].id == id) {
            return res.send(users[ix]);
        }
    }
    return res.send('not found');
});


// POST
app.post('/users/:id', function(req, res)
{
    let id = req.body.id;
    let name = req.body.name;
    username: req.body.username,
    pasword: req.body.pasword,
    gender: req.body.gender

    res.send(user);
});


//PUT
app.put('/users/:id', function (req, res)
 {
  let id = req.params.id;
  console.log(req.body.name);
  for (let ix = 0; ix < users.length; ++ix)
  {
    if(id == users[ix].id)
    {
      users[ix].name = req.body.name;
      res.send(users[ix]);
      return;
    }
  }

  res.send(user);
});


//DELETE
app.delete('/user', function (req, res)
 {
   users.remove({
            id: req.params.id
        }, function(err, users) {
            if (err)
                res.send(err);
            else
            res.send('Got a DELETE request at /user')
});


app.listen(3000);
