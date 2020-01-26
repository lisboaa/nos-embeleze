const User = require('../models/User');

module.exports = {
  async index(request, response) {
    const users = await User.find();
    
    return response.json(users);
  },

  async merge(request, response) {
    const { name, 
      idade, 
      sexo, 
      celular, 
      email, 
      instagram, 
      facebook, 
      horario } = request.body;

      user = await User.create({
        name,
        idade, 
        sexo, 
        celular, 
        email, 
        instagram, 
        facebook, 
        horario 
      });

      return response.json(user);
},

async buscarUsuarios(request, response) {
  const users = await User.findAll();

  return response.json(users);
}

};
