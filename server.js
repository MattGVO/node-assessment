const express = require('express')
const app = express();
const port = 3000
const usersCtrl = require('./usersCtrl')

app.use(express.json());

//Enpoints
app.get('/api/user', usersCtrl.getAllUsers)

app.get('/api/user/:id',usersCtrl.getUserById)

app.get('/api/admin',usersCtrl.getAllAdmins)

app.get('/api/nonadmin',usersCtrl.getNonAdmins)

app.get('/api/type/:userType',usersCtrl.getUserByType)

app.put('/api/user/:userId', usersCtrl.updateUserById)

app.post('/api/user',usersCtrl.addUser)

app.delete('/api/user/:userId',usersCtrl.removeUserById)



app.listen(port, () => console.log(`Port ${port} is a runnin'!`));