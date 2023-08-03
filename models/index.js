const { User } =  require('./User');
const { Todo } =  require('./Todo');

Todo.belongsTo(User);
User.hasMany(Todo);

module.exports = { Todo, User };