const { Router } = require('express');
const axios = require('axios');
const { Character, Occupation, character_occuption } = require('../db.js');
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

const getAll = async() => {
  const apiInfo = await getApi();
  const dbInfo = await getDb();
  const allInfo = apiInfo.concat(dbInfo);
  return allInfo;
};


///routes

router.get('/characters', async(req, res) => {
  const {name} = req.query;
  const allCharacters = await getAll();
  if(name) {
      const byName = await allCharacters.filter(i => i.name.toLowerCase().includes(name.toLowerCase()))
      byName.length ? 
      res.status(200).send(byName) :
      res.status(404).send("No hay personaje con ese nombre");
  } else {
      res.status(200).send(allCharacters)
  };
});



router.get('/occupations', async (req, res) => {
  const {data} = await axios.get('https://breakingbadapi.com/api/characters')
  const occupations = data.map(i => i.occupation)
  const dbOccupation = occupations.flat()
  dbOccupation.forEach(i => {
      Occupation.findOrCreate({
          where: {
              name: i
          }
      })
  })
  const allOccupations = await Occupation.findAll();
  return res.status(200).send(allOccupations)
})


module.exports = router;
