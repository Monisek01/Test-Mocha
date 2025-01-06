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

      / Kontrolujeme, že odpověď má status 200
      assert.strictEqual(response.status, 200, `Očekávalo se 200, ale byl vrácen ${response.status}`);

      // Vypisujeme obsah odpovědi do konzole
      console.log('Přijatá odpověď:', response.data);
    } catch (error) {
      // Pokud API vrátí jiný status code
      if (error.response) {
        console.error(`Chyba: Status code ${error.response.status}`);
        assert.fail(`Neočekávaný status code: ${error.response.status}`);
      } else {
        // Pro jiné chyby (např. síťová chyba)
        console.error('Chyba při požadavku:', error.message);
        assert.fail(`Chyba: ${error.message}`);
      }
    }
  });
});