const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '5b8d0f6348f35620610c54a9';
//
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
//
// Todo.find({
//     _id: id
// }).then((todos) => console.log('Todos:', todos)).catch(err => console.log(err));
//
// Todo.findOne({
//     _id: id
// }).then((todo) => console.log('Todo:', todo)).catch(err => console.log(err));
//
// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Todo not found by id');
//     }
//     console.log('Todo by Id:', todo)
// }).catch(err => console.log(err));
//

User.findById(id).then(user => {
    if (!user) {
        return console.log('User not found for id',id);
    }
    console.log(JSON.stringify(user, undefined, 2));
}, error => {
    console.log(error);
});

