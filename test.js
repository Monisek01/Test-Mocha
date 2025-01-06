// Importujeme knihovnu axios pro HTTP požadavky
const axios = require('axios');
// Importujeme assert pro ověřování očekávaných výsledků
const assert = require('assert');

// Popisujeme testovací sadu "Cat Facts API"
describe('Cat Facts API', function() {
  // Test kontrolující odpověď z API a dobu spojení
  it('by měl vrátit status code 200, odpověď ve formátu JSON a dobu spojení menší než 666 ms', async function() {
    try {
      // Zaznamenáme start času před odesláním požadavku
      const startTime = Date.now();

      // Odesíláme GET požadavek na API
      const response = await axios.get('https://catfact.ninja/fact');

      // Zaznamenáme konec času po obdržení odpovědi
      const endTime = Date.now();

      // Vypočítáme dobu spojení
      const responseTime = endTime - startTime;

      // Kontrolujeme, že odpověď má status 200
      assert.strictEqual(response.status, 200, `Očekávalo se 200, ale byl vrácen ${response.status}`);

      // Kontrolujeme, že doba spojení je menší než 1000 ms
      assert.ok(responseTime < 666, `Doba spojení byla příliš dlouhá: ${responseTime} ms`);

      // Vypisujeme obsah odpovědi do konzole
      console.log('Přijatá odpověď:', response.data);
      console.log('Doba spojení:', responseTime, 'ms');
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
