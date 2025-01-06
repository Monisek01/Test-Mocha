// Git init - Projekt Mocha - API

// Importujeme knihovnu axios pro HTTP požadavky
const axios = require('axios');
// Importujeme assert pro ověřování očekávaných výsledků
const assert = require('assert');

// Popisujeme testovací sadu "Cat Facts API"
describe('Cat Facts API', function() {
  // Test kontrolující odpověď z API
  it('by měl vrátit status code 200 a odpověď ve formátu JSON', async function() {
    try {
      // Odesíláme GET požadavek na API
      const response = await axios.get('https://catfact.ninja/fact');
