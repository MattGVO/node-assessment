const userData = require('./userData.json')

module.exports={
    getAllUsers(req,res){
        let data = userData
        if(req.query.favorites){
           data = [...userData.filter(user => user.favorites.includes(req.query.favorites))]
        }
        if(req.query.age){
           data = userData.filter(user => user.age <= req.query.age)
        }
        if(req.query.email){
           data = [...userData.filter(user => user.email === req.query.email)]
        }
            res.status(200).send(data)
    
    },
    getUserById(req,res){
        let data = userData.filter(user => user.id == req.params.id)[0]
        if(data){
            res.status(200).send(data)
        } else{
            res.sendStatus(404)
        }
    },
    getAllAdmins(req,res){
        let data = userData.filter(user => user.type === 'admin' )
        res.status(200).send(data)
    },
    getNonAdmins(req,res){
        let data = userData.filter(user => user.type !== 'admin' )
        res.status(200).send(data)
    },
    getUserByType(req,res){
        let data = userData.filter(user => user.type === req.params.userType)
        res.status(200).send(data)
    },
    updateUserById(req,res){
        let data = userData
        let index = userData.indexOf(userData.filter(user => user.id == req.params.userId)[0])
        data.splice(index,1,req.body)
        res.status(200).send(data)
    },
    addUser(req,res){
        let id = userData[userData.length -1].id + 1
        userData.push({id: id,...req.body, })
        res.status(200).send(userData)
    },
    removeUserById(req,res){
        let data = userData
        let index = userData.indexOf(userData.filter(user => user.id == req.params.userId)[0])
        data.splice(index,1)
        res.status(200).send(data)
    }
}