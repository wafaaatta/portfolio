const fragments = {
    sujet: ["La vie", "L'amour", "La rouge", "La cuisine", "La Palestine"],
    verbe: ["est", "a été", "sera", "a", "avait"],
    complement: ["bombardée.", "la clé du bonheur.", "un misérable.", "une source de joie."]
  };
  
  function generateQuote() {
    let numQuotes = document.getElementById('numQuotes').value;
    let quotes = '';
  
    for (let i = 0; i < numQuotes; i++) {
      let sujet = fragments.sujet[Math.floor(Math.random() * fragments.sujet.length)];
      let verbe = fragments.verbe[Math.floor(Math.random() * fragments.verbe.length)];
      let complement = fragments.complement[Math.floor(Math.random() * fragments.complement.length)];
  
      // Génération aléatoire de styles CSS
      let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);//Le système hexadécimal est un système de numération en base 16, ce qui signifie qu'il utilise 16 symboles pour représenter les valeurs
      let randomFontFamily = Math.random() < 0.5 ? 'Arial' : 'Verdana';
      let randomBackgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      
  
      quotes += `<p style="color: ${randomColor}; font-family: ${randomFontFamily}; background-color: ${randomBackgroundColor};">${sujet} ${verbe} ${complement}</p>`;
    }
  
    return quotes;
  }
  
  document.getElementById('generateBtn').addEventListener('click', function() {
    let quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.innerHTML = generateQuote();
  });
  