import { Meteor } from 'meteor/meteor';
import { Todos } from '/imports/api/todos';

Meteor.startup(()=> {

});

Meteor.publish('todos', ()=> {
  return Todos.find({});
})
