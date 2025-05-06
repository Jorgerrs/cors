const express = require ('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(cors());

const RICK_API_URL = 'https://rickandmortyapi.com/api/character';

app.get('/characters', async (req, res) => {
    try{
        const response = await axios.get(RICK_API_URL);
        res.json(response.data.results);
    } catch (error) {
        console.error('Error obteniendo personajes:', error.message);
        res.status(500).json({ error: 'Error al obtener los personajes' });
      }
    });

    app.get('/characters/:name', async (req, res) => {
        const characterName = req.params.name;
        try {
          const response = await axios.get(`${RICK_API_URL}/?name=${characterName}`);
          
          if (response.data.results && response.data.results.length > 0) {
            res.json(response.data.results[0]);
          } else {
            res.status(404).json({ error: 'Personaje no encontrado' });
          }
        } catch (error) {
          res.status(404).json({ error: 'Personaje no encontrado' });
        }
      });

      app.listen(3000, () => {
        console.log('Servidor de Rick and Morty API corriendo en http://localhost:3000');
      });