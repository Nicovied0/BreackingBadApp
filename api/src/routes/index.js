const { Router } = require('express');
const axios = require('axios');
const { Character, Occupation } = require('../db.js');
// Importar todos los routers;
const router = Router();

const getApi = async () => {
  const { data } = await axios.get('https://breakingbadapi.com/api/characters')
  const info = await data.map(e => {
    return {
      id: e.char_id,
      name: e.name,
      nickName: e.nickName,
      birthday: e.birthday,
      image: e.img,
      status: e.status,
      occupation: e.occupation.map(e => e)
    }
  });
  return info
}

const getDb = async () => {
  return await Character.findAll({
    include: {
      model: Occupation,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  })
}

const getAll = async() =>{
  const apiInfo = getApi();
  const dbInfo = getDb();
  const allInfo = apiInfo.concat(dbInfo);
  return allInfo
}



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
