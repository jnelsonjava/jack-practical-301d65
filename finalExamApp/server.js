'use strict';

// Packages

const express = require('express');
require('dotenv').config();
const superagent = require('superagent');

// Global Variables

const app = express();
const PORT = process.env.PORT || 3003;

// Express Configs

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// Routes

app.get('/', renderPokemon);

// Route Handlers

function renderPokemon(req, res) {
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon?limit=50`;

  superagent.get(pokeUrl)
    .then( (pokeResult) => {
      const sortedNames = pokeResult.body.results.map(poke => poke.name).sort();
      res.render('pages/show', {names: sortedNames});

    })
  



}

// Functions

// Server Start

app.listen(PORT, () => console.log(`server listening on PORT: ${PORT} ~`));

