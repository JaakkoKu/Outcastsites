const pages = [
    // Cities
    {title: "Home", url: "../index.html"},
      {title: "Vroengaard", url: "../cities/Vroengaard.html"},
      {title: "Wild warrior cave", url: "../cities/Wildwarriorcave.html"},
      {title: "World teleport", url: "../cities/worldteleport.html"},
      {title: "Aberon", url: "../cities/Aberon.html"},
      {title: "Adicama", url: "../cities/adicama.html"},
      {title: "Drushak", url: "../cities/drushak.html"},
      {title: "Edron/qutor's grove", url: "../cities/edron.html"},
      {title: "Forbidden forest", url: "../cities/forbidden.html"},
      {title: "Fendal", url: "../cities/fendal.html"},
      {title: "Lithgow", url: "../cities/Lithgow.html"},
      {title: "Snowmania", url: "../cities/Snowmania.html"},
      {title: "Tarid", url: "../cities/tarid.html"},
      {title: "Valmoor", url: "../cities/valmoor.html"},
      // cities end
      // Fallen gods
      {title: "Plains of gold", url: "../cities/Fallengods/plains.html"},
      {title: "Fallen gods main area", url: "../cities/Fallengods/mainarea.html"},
      {title: "Mysticon", url: "../cities/Fallengods/mysticon.html"},
      {title: "Wrecked ship", url: "../cities/Fallengods/wreckedship.html"},
      {title: "Skyrider waterfalls", url: "../cities/Fallengods/waterfalls.html"},
      {title: "Helarctos area", url: "../cities/Fallengods/helarctos.html"},
      // Fallen gods end
      // Access
      {title: "Access to Kingdom farmlands", url: "../cities/access/abysskfaccess.html"},
      {title: "Access to Yalahar abysses", url: "../cities/access/abysskfaccess.html"},
      {title: "Access to Dunes of Desert", url: "../cities/access/dunesaccess.html"},
      {title: "Access to spaceship", url: "../cities/access/spaceshipaccess.html"},
      {title: "Access to farmpits", url: "../cities/access/farmpitsaccess.html"},
      {title: "Access to Realms", url: "../cities/access/realmaccess.html"},
      // Access ends
      // Yalahar abysses
      {title: "Yalahar abysses of achernar part 1", url: "../cities/abyss/abyss1.html"},
      {title: "Yalahar abysses of achernar part 2", url: "../cities/abyss/abyss2.html"},
      {title: "Yalahar abysses of achernar part 3", url: "../cities/abyss/abyss3.html"},
      {title: "Spacewalk", url: "../cities/abyss/spacewalk.html"},
      {title: "Achernar's prison", url: "../cities/abyss/prison.html"},
      // Yalahar abysses ends
      // Kingdom farmlands
      { title: "Kingdom farmlands 1", url: "../cities/kf/kingdom1.html" },
      { title: "Kingdom farmlands 2", url: "../cities/kf/kingdom2.html" },
      {title: "Kingdom farmlands part 3", url: "../cities/kf/kingdom3.html"},
      // Kingdom farmlands ends
      // Bossrun
      {title: "Spaceship key", url: "../cities/Bossrun/spaceshipkey.html"},
      {title: "Beluna", url: "../cities/Bossrun/beluna.html"},
      {title: "Desert of zenith", url: "../cities/Bossrun/desert.html"},
      {title: "Yalahar", url: "../cities/Bossrun/yalahar.html"},
      {title: "Yalahar cirlces", url: "../cities/Bossrun/yalahar.html"},
      //Bossrun ends
      // {title: "Yalahar spaceship", url: "../cities/spaceship.html"},
      //Set upgrades
      {title: "Dark warrior set", url: "../cities/setupgrades/darkwarrior.html"},
      {title: "Zenith set to draconian set", url: "../cities/setupgrades/zenith.html"},
      {title: "Draconia set to Fallen gods set", url: "../cities/setupgrades/draconian.html"},
      {title: "Fallen gods set to Helarctos set", url: "../cities/setupgrades/fallen.html"},
      {title: "Helarctos set to Dark overlord set", url: "../cities/setupgrades/hela.html"},
      {title: "Dark overlord set to Cyclip set", url: "../cities/setupgrades/overlord.html"},
      {title: "Cyclip set to Craak slayer set", url: "../cities/setupgrades/cyclip.html"},
      //Set upgrades ends
      //Others
      {title: "Full hota quest", url: "../cities/other/fullhota.html"},
      {title: "Oceanic lizard weapon to skyrider weapon", url: "../cities/other/skywep.html"},
      {title: "Cyclip shield quest", url: "../cities/other/cycshield.html"},
      {title: "Oceanic lizard shield quest", url: "../cities/other/ocshield.html"},
      {title: "Skyrider shield quest", url: "../cities/other/skyshield.html"}
   ];
  
  
  
    const searchBar = document.getElementById('search-bar');
    const suggestionsContainer = document.getElementById('suggestions');
    let activeIndex = -1;
  
    searchBar.addEventListener('input', function () {
      const query = searchBar.value.toLowerCase();
      suggestionsContainer.innerHTML = '';
      activeIndex = -1;
  
      if (query) {
        const filteredPages = pages.filter(page =>
          page.title.toLowerCase().includes(query)
        );
  
        filteredPages.forEach((page, index) => {
          const suggestion = document.createElement('div');
          suggestion.textContent = page.title;
  
          suggestion.addEventListener('click', () => {
            window.location.href = page.url;
          });
          suggestion.dataset.index = index;
          suggestionsContainer.appendChild(suggestion);
        });
      }
    });
  
    searchBar.addEventListener('keydown', function (e){
      const suggestions = suggestionsContainer.querySelectorAll('div');
      if(!suggestions.length) return;
  
      if(e.key=== 'ArrowDown'){
          activeIndex = (activeIndex + 1)% suggestions.length;
          updateActiveSuggestion(suggestions);
      } else if(e.key === 'ArrowUp'){
          activeIndex = (activeIndex -1 + suggestions.length)% suggestions.length;
          updateActiveSuggestion(suggestions);
      } else if(e.key==='Enter'){
          e.preventDefault();
          if(activeIndex > -1){
              suggestions[activeIndex].click();
          }
      }
    });
  
    document.addEventListener('click', (e) => {
      if (!suggestionsContainer.contains(e.target) && e.target !== searchBar) {
        suggestionsContainer.innerHTML = '';
      }
    });
  
    function updateActiveSuggestion(suggestions){
      suggestions.forEach((suggestion, index) => {
          suggestion.classList.toggle('active', index === activeIndex);
      });
    }