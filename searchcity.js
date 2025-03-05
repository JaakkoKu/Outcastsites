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

      // Quests
      {title: "Platinum coin", url: "../cities/worldteleport.html"},
      {title: "Viking helmet", url: "../cities/Vroengaard.html"},
      {title: "Plate legs", url: "../cities/Vroengaard.html"},
      {title: "Dark armor", url: "../cities/Vroengaard.html"},
      {title: "Ring of healing", url: "../cities/Vroengaard.html"},
      {title: "Battle shield", url: "../cities/Vroengaard.html"},
      {title: "Green backpack", url: "../cities/Vroengaard.html"},
      {title: "Dwarven legs", url: "../cities/Vroengaard.html"},
      {title: "Dwarven armor", url: "../cities/Vroengaard.html"},
      {title: "Crown helmet", url: "../cities/Vroengaard.html"},
      {title: "Throwing star", url: "../cities/Vroengaard.html"},
      {title: "Warhammer", url: "../cities/Vroengaard.html"},
      {title: "Daramian waraxe", url: "../cities/Vroengaard.html"},
      {title: "Ornamented shield", url: "../cities/Vroengaard.html"},
      {title: "Crystal mace", url: "../cities/Vroengaard.html"},
      {title: "Silver mace", url: "../cities/Vroengaard.html"},
      {title: "Plasma shield", url: "../cities/Vroengaard.html"},
      {title: "Empty ectoplasma container", url: "../cities/Vroengaard.html"},
      {title: "Magic longsword", url: "../cities/Wildwarriorcave.html"},
      {title: "Full ectoplasma container", url: "../cities/Wildwarriorcave.html"},
      {title: "Golden boots", url: "../cities/Wildwarriorcave.html"},
      {title: "Blessed shield", url: "../cities/Wildwarriorcave.html"},
      {title: "Golden mace", url: "../cities/Wildwarriorcave.html"},
      {title: "Golden armor", url: "../cities/worldteleport.html"},
      {title: "Warlord sword", url: "../cities/worldteleport.html"},
      {title: "Combat knife", url: "../cities/worldteleport.html"},
      {title: "Tempest shield", url: "../cities/worldteleport.html"},
      {title: "Winged helmet", url: "../cities/worldteleport.html"},
      {title: "The horned helmet", url: "../cities/worldteleport.html"},
      {title: "Hammer of wrath", url: "../cities/worldteleport.html"},
      {title: "Dragon scale mail, DSM", url: "../cities/worldteleport.html"},
      {title: "Crown legs", url: "../cities/worldteleport.html"},
      {title: "Dragon lance", url: "../cities/worldteleport.html"},
      {title: "Steel spear", url: "../cities/worldteleport.html"},
      {title: "Noble armor", url: "../cities/worldteleport.html"},
      {title: "Amazon shield", url: "../cities/worldteleport.html"},
      {title: "Spider chain mail", url: "../cities/worldteleport.html"},
      {title: "Skull staff", url: "../cities/worldteleport.html"},
      {title: "Fire axe", url: "../cities/worldteleport.html"},
      {title: "Phoenix shield", url: "../cities/worldteleport.html"},
      {title: "Crown armor", url: "../cities/worldteleport.html"},
      {title: "Crown", url: "../cities/Aberon.html"},
      {title: "Burning heart", url: "../cities/Aberon.html"},
      {title: "Dragon scale helmet", url: "../cities/Aberon.html"},
      {title: "Great shield", url: "../cities/Aberon.html"},
      {title: "Magic plate armor", url: "../cities/Aberon.html"},
      {title: "Dragon scale legs", url: "../cities/Aberon.html"},
      {title: "Left horn piece for HOTA", url: "../cities/adicama.html"},
      {title: "Helmet adornment piece for HOTA", url: "../cities/adicama.html"},
      {title: "Gem holder piece for HOTA", url: "../cities/adicama.html"},
      {title: "Great axe", url: "../cities/adicama.html"},
      {title: "Drushak's Annihilator", url: "../cities/drushak.html"},
      {title: "Demon helmet", url: "../cities/drushak.html"},
      {title: "Steel boots", url: "../cities/drushak.html"},
      {title: "Demon shield", url: "../cities/drushak.html"},
      {title: "Demon armor", url: "../cities/drushak.html"},
      {title: "Stonecutter's axe", url: "../cities/drushak.html"},
      {title: "Thunder hammer", url: "../cities/drushak.html"},
      {title: "Sword of valor", url: "../cities/drushak.html"},
      {title: "Right horn piece for HOTA", url: "../cities/drushak.html"},
      {title: "Eagle shield", url: "../cities/drushak.html"},
      {title: "Tear of daraman", url: "../cities/edron.html"},
      {title: "Edron's Annihilator", url: "../cities/edron.html"},
      {title: "Epicureanic armor", url: "../cities/edron.html"},
      {title: "Black helmet", url: "../cities/edron.html"},
      {title: "Satyr helmet", url: "../cities/edron.html"},
      {title: "Demon legs", url: "../cities/edron.html"},
      {title: "Soldier blessimus necklace", url: "../cities/edron.html"},
      {title: "Country backpack", url: "../cities/forbidden.html"},
      {title: "Battle spear", url: "../cities/forbidden.html"},
      {title: "Passage scroll", url: "../cities/forbidden.html"},
      {title: "Sword", url: "../cities/fendal.html"},
      {title: "Black shield", url: "../cities/fendal.html"},
      {title: "Giant sword", url: "../cities/fendal.html"},
      {title: "Dark helmet", url: "../cities/fendal.html"},
      {title: "Plate shield", url: "../cities/fendal.html"},
      {title: "Soft boots", url: "../cities/Lithgow.html"},
      {title: "Achilles legs", url: "../cities/Lithgow.html"},
      {title: "Faceless helmet", url: "../cities/Lithgow.html"},
      {title: "Blessimus necklace", url: "../cities/Lithgow.html"},
      {title: "Gem quest", url: "../cities/Lithgow.html"},
      {title: "Dark star set quest", url: "../cities/Snowmania.html"},
      {title: "Dark warrior set upgrade", url: "../cities/Snowmania.html"},
      {title: "Knight armor", url: "../cities/tarid.html"},
      {title: "Plate armor", url: "../cities/tarid.html"},
      {title: "Rope", url: "../cities/tarid.html"},
      {title: "Closed trap", url: "../cities/tarid.html"},
      {title: "Hunter Eragon's trap", url: "../cities/tarid.html"},
      {title: "Boots of haste, BOH", url: "../cities/tarid.html"},
      {title: "Crystal ring", url: "../cities/tarid.html"},
      {title: "Naginata", url: "../cities/tarid.html"},
      {title: "Blue robe", url: "../cities/tarid.html"},
      {title: "Life crystal", url: "../cities/tarid.html"},
      {title: "Deathlands", url: "../cities/tarid.html"},
      {title: "Broken helmet of HOTA", url: "../cities/tarid.html"},
      {title: "Helmet piece of HOTA", url: "../cities/tarid.html"},
      {title: "Helmet ornament of HOTA", url: "../cities/tarid.html"},
      {title: "Full helmet of the ancients", url: "../cities/tarid.html"},
      {title: "HOTA quest", url: "../cities/tarid.html"},
      {title: "Bright sword", url: "../cities/tarid.html"},
      {title: "Fire mushroom", url: "../cities/tarid.html"},
      {title: "Oceanic lizard weapon", url: "../cities/tarid.html"},
      {title: "Oceanic lizard legs", url: "../cities/tarid.html"},
      {title: "Elemental brooch", url: "../cities/valmoor.html"},
     
      // Fallen gods
      {title: "Plains of gold", url: "../cities/Fallengods/plains.html"},
      {title: "Fallen gods main area", url: "../cities/Fallengods/mainarea.html"},
      {title: "Mysticon", url: "../cities/Fallengods/mysticon.html"},
      {title: "Wrecked ship", url: "../cities/Fallengods/wreckedship.html"},
      {title: "Skyrider waterfalls", url: "../cities/Fallengods/waterfalls.html"},
      {title: "Helarctos area", url: "../cities/Fallengods/helarctos.html"},
     
      // Access
      {title: "Access to Kingdom farmlands", url: "../cities/access/abysskfaccess.html"},
      {title: "Access to Yalahar abysses", url: "../cities/access/abysskfaccess.html"},
      {title: "Access to Dunes of Desert", url: "../cities/access/dunesaccess.html"},
      {title: "Access to spaceship", url: "../cities/access/spaceshipaccess.html"},
      {title: "Access to farmpits", url: "../cities/access/farmpitsaccess.html"},
      {title: "Access to Realms", url: "../cities/access/realmaccess.html"},
     
      // Yalahar abysses
      {title: "Yalahar abysses of achernar part 1", url: "../cities/abyss/abyss1.html"},
      {title: "Yalahar abysses of achernar part 2", url: "../cities/abyss/abyss2.html"},
      {title: "Yalahar abysses of achernar part 3", url: "../cities/abyss/abyss3.html"},
      {title: "Spacewalk", url: "../cities/abyss/spacewalk.html"},
      {title: "Achernar's prison", url: "../cities/abyss/prison.html"},
     
      // Kingdom farmlands
      { title: "Kingdom farmlands 1", url: "../cities/kf/kingdom1.html" },
      { title: "Kingdom farmlands 2", url: "../cities/kf/kingdom2.html" },
      {title: "Kingdom farmlands part 3", url: "../cities/kf/kingdom3.html"},
      
      // Bossrun
      {title: "Spaceship key", url: "../cities/Bossrun/spaceshipkey.html"},
      {title: "Beluna", url: "../cities/Bossrun/beluna.html"},
      {title: "Desert of zenith", url: "../cities/Bossrun/desert.html"},
      {title: "Yalahar", url: "../cities/Bossrun/yalahar.html"},
      {title: "Yalahar cirlces", url: "../cities/Bossrun/yalahar.html"},
      
      // {title: "Yalahar spaceship", url: "../cities/spaceship.html"},
      //Set upgrades
      {title: "Dark warrior set", url: "../cities/setupgrades/darkwarrior.html"},
      {title: "Zenith set to draconian set", url: "../cities/setupgrades/zenith.html"},
      {title: "Draconia set to Fallen gods set", url: "../cities/setupgrades/draconian.html"},
      {title: "Fallen gods set to Helarctos set", url: "../cities/setupgrades/fallen.html"},
      {title: "Helarctos set to Dark overlord set", url: "../cities/setupgrades/hela.html"},
      {title: "Dark overlord set to Cyclip set", url: "../cities/setupgrades/overlord.html"},
      {title: "Underworld axxion", url: "../cities/setupgrades/overlord.html"},
      {title: "Cyclip set to Craak slayer set", url: "../cities/setupgrades/cyclip.html"},
      
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