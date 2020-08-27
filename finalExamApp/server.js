'use strict';

// Packages

const express = require('express');
require('dotenv').config();
const superagent = require('superagent');
const pg = require('pg');

// Global Variables

const app = express();
const PORT = process.env.PORT || 3003;
const DATABASE_URL = process.env.DATABASE_URL;
const client = new pg.Client(DATABASE_URL);
client.on('error', error => console.error(error));

// Express Configs

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// Routes

app.get('/', renderPokemon);
app.post('/pokemon', addFavorite);

// Route Handlers

function renderPokemon(req, res) {
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon?limit=50`;
  superagent.get(pokeUrl)
    .then( (pokeResult) => {
      const sortedNames = pokeResult.body.results.map(poke => poke.name).sort();
      res.render('pages/show', {names: sortedNames});
    })
}

function addFavorite(req, res) {
  console.log(`inserting ${req.body.name} into favorites`);
  client.query('INSERT INTO favorites (name) VALUES ($1)', [req.body.name])
  res.redirect('/');
}

// Functions

// Server Start

client.connect()
  .then( () => {
    app.listen(PORT, () => console.log(`server listening on PORT: ${PORT} ~`));
  });

