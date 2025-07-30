const pages = [
    // Cities
    {title: "Home", url: "../index"},
      {title: "Vroengaard", url: "../cities/Vroengaard"},
      {title: "Wild warrior cave", url: "../cities/Wildwarriorcave"},
      {title: "World teleport", url: "../cities/worldteleport"},
      {title: "Aberon", url: "../cities/Aberon"},
      {title: "Adicama", url: "../cities/adicama"},
      {title: "Drushak", url: "../cities/drushak"},
      {title: "Edron/qutor's grove", url: "../cities/edron"},
      {title: "Forbidden forest", url: "../cities/forbidden"},
      {title: "Fendal", url: "../cities/fendal"},
      {title: "Lithgow", url: "../cities/Lithgow"},
      {title: "Snowmania", url: "../cities/Snowmania"},
      {title: "Tarid", url: "../cities/tarid"},
      {title: "Valmoor", url: "../cities/valmoor"},

      // Quests
      {title: "Platinum coin", url: "../cities/worldteleport#pcoin"},
      {title: "Viking helmet", url: "../cities/Vroengaard#vikinghelmet"},
      {title: "Plate legs", url: "../cities/Vroengaard#noobquest"},
      {title: "Dark armor", url: "../cities/Vroengaard#noobquest"},
      {title: "Ring of healing", url: "../cities/Vroengaard#noobquest"},
      {title: "Battle shield", url: "../cities/Vroengaard#noobquest"},
      {title: "Green backpack", url: "../cities/Vroengaard#noobquest"},
      {title: "Dwarven legs", url: "../cities/Vroengaard#dwarvenlegs"},
      {title: "Dwarven armor", url: "../cities/Vroengaard#dwarvenarmor"},
      {title: "Crown helmet", url: "../cities/Vroengaard#crownhelmet"},
      {title: "Throwing star", url: "../cities/Vroengaard#tstar"},
      {title: "Warhammer", url: "../cities/Vroengaard#wh"},
      {title: "Daramian waraxe", url: "../cities/Vroengaard#daramianwaraxe"},
      {title: "Ornamented shield", url: "../cities/Vroengaard#ornamented"},
      {title: "Crystal mace", url: "../cities/Vroengaard#ornamented"},
      {title: "Silver mace", url: "../cities/Vroengaard#silvermace"},
      {title: "Plasma shield", url: "../cities/Vroengaard#plasmashield"},
      {title: "Empty ectoplasma container", url: "../cities/Vroengaard#emptyecto"},
      {title: "Magic longsword", url: "../cities/Wildwarriorcave#mls"},
      {title: "Full ectoplasma container", url: "../cities/Wildwarriorcave#fullecto"},
      {title: "Golden boots", url: "../cities/Wildwarriorcave#gboots"},
      {title: "Blessed shield", url: "../cities/Wildwarriorcave#blessed"},
      {title: "Golden mace", url: "../cities/Wildwarriorcave#gmace"},
      {title: "Golden armor", url: "../cities/worldteleport#garmor"},
      {title: "Warlord sword", url: "../cities/worldteleport#wsword"},
      {title: "Combat knife", url: "../cities/worldteleport#combatknife"},
      {title: "Tempest shield", url: "../cities/worldteleport#tempest"},
      {title: "Winged helmet", url: "../cities/worldteleport#hornedhelmet"},
      {title: "The horned helmet", url: "../cities/worldteleport#hornedhelmet"},
      {title: "Hammer of wrath", url: "../cities/worldteleport#dsm"},
      {title: "Dragon scale mail, DSM", url: "../cities/worldteleport#dsm"},
      {title: "Crown legs", url: "../cities/worldteleport#dsm"},
      {title: "Dragon lance", url: "../cities/worldteleport#dsm"},
      {title: "Steel spear", url: "../cities/worldteleport#sspear"},
      {title: "Noble armor", url: "../cities/worldteleport#noble"},
      {title: "Amazon shield", url: "../cities/worldteleport#amazonshield"},
      {title: "Spider chain mail", url: "../cities/worldteleport#amazonshield"},
      {title: "Skull staff", url: "../cities/worldteleport#faxe"},
      {title: "Fire axe", url: "../cities/worldteleport#faxe"},
      {title: "Phoenix shield", url: "../cities/worldteleport#faxe"},
      {title: "Crown armor", url: "../cities/worldteleport#carmor"},
      {title: "Crown", url: "../cities/Aberon#crown"},
      {title: "Burning heart", url: "../cities/Aberon#crown"},
      {title: "Dragon scale helmet", url: "../cities/Aberon#dcalehelm"},
      {title: "Great shield", url: "../cities/Aberon#dscalehelm"},
      {title: "Magic plate armor", url: "../cities/Aberon#mpa"},
      {title: "Dragon scale legs", url: "../cities/Aberon#mpa"},
      {title: "Left horn piece for HOTA", url: "../cities/adicama#lhorn"},
      {title: "Helmet adornment piece for HOTA", url: "../cities/adicama#ador"},
      {title: "Gem holder piece for HOTA", url: "../cities/adicama#gemh"},
      {title: "Great axe", url: "../cities/adicama#gaxe"},
      {title: "Drushak's Annihilator", url: "../cities/drushak#dhq"},
      {title: "Demon helmet", url: "../cities/drushak#dhq"},
      {title: "Steel boots", url: "../cities/drushak#dhq"},
      {title: "Demon shield", url: "../cities/drushak#dhq"},
      {title: "Demon armor", url: "../cities/drushak#danni"},
      {title: "Stonecutter's axe", url: "../cities/drushak#danni"},
      {title: "Thunder hammer", url: "../cities/drushak#danni"},
      {title: "Sword of valor", url: "../cities/drushak#danni"},
      {title: "Right horn piece for HOTA", url: "../cities/drushak#rhota"},
      {title: "Eagle shield", url: "../cities/drushak#eagle"},
      {title: "Tear of daraman", url: "../cities/edron#tear"},
      {title: "Edron's Annihilator", url: "../cities/edron#eanni"},
      {title: "Epicureanic armor", url: "../cities/edron#eanni"},
      {title: "Black helmet", url: "../cities/edron#eanni"},
      {title: "Satyr helmet", url: "../cities/edron#eanni"},
      {title: "Demon legs", url: "../cities/edron#dlegs"},
      {title: "Soldier blessimus necklace", url: "../cities/edron#blessimus"},
      {title: "Country backpack", url: "../cities/forbidden#country"},
      {title: "Battle spear", url: "../cities/forbidden#bspear"},
      {title: "Passage scroll", url: "../cities/forbidden#scroll"},
      {title: "Sword", url: "../cities/fendal#sword"},
      {title: "Black shield", url: "../cities/fendal#sword"},
      {title: "Giant sword", url: "../cities/fendal#gs"},
      {title: "Dark helmet", url: "../cities/fendal#gs"},
      {title: "Plate shield", url: "../cities/fendal#gs"},
      {title: "Soft boots", url: "../cities/Lithgow#soft"},
      {title: "Achilles legs", url: "../cities/Lithgow#gemquest"},
      {title: "Faceless helmet", url: "../cities/Lithgow#gemquest"},
      {title: "Blessimus necklace", url: "../cities/Lithgow#gemquest"},
      {title: "Gem quest", url: "../cities/Lithgow#gemquest"},
      {title: "Dark star set quest", url: "../cities/Snowmania#dstar"},
      {title: "Dark warrior set upgrade", url: "../cities/Snowmania#dwarriorup"},
      {title: "Knight armor", url: "../cities/tarid#karmor"},
      {title: "Plate armor", url: "../cities/tarid#rope"},
      {title: "Rope", url: "../cities/tarid#rope"},
      {title: "Closed trap", url: "../cities/tarid#trap"},
      {title: "Hunter Eragon's trap", url: "../cities/tarid#eragon"},
      {title: "Boots of haste, BOH", url: "../cities/tarid#boh"},
      {title: "Crystal ring", url: "../cities/tarid#cring"},
      {title: "Naginata", url: "../cities/tarid#naginata"},
      {title: "Blue robe", url: "../cities/tarid#brobe"},
      {title: "Life crystal", url: "../cities/tarid#brobe"},
      {title: "Deathlands", url: "../cities/tarid#hotaorna"},
      {title: "Broken helmet of HOTA", url: "../cities/tarid#brokenhelm"},
      {title: "Helmet piece of HOTA", url: "../cities/tarid#hotapiece"},
      {title: "Helmet ornament of HOTA", url: "../cities/tarid#hotaorna"},
      {title: "Full helmet of the ancients", url: "../cities/tarid#fullhota"},
      {title: "HOTA quest", url: "../cities/tarid#fullhota"},
      {title: "Bright sword", url: "../cities/tarid#hotaorna"},
      {title: "Fire mushroom", url: "../cities/tarid#fmush"},
      {title: "Oceanic lizard weapon", url: "../cities/tarid#ocwep"},
      {title: "Oceanic lizard legs", url: "../cities/tarid#ocwep"},
      {title: "Elemental brooch", url: "../cities/valmoor#ebrooch"},
     
      // Fallen gods
      {title: "Plains of gold", url: "../cities/Fallengods/plains"},
      {title: "Fallen gods main area", url: "../cities/Fallengods/mainarea"},
      {title: "Mysticon", url: "../cities/Fallengods/mysticon"},
      {title: "Wrecked ship", url: "../cities/Fallengods/wreckedship"},
      {title: "Skyrider waterfalls", url: "../cities/Fallengods/waterfalls"},
      {title: "Helarctos area", url: "../cities/Fallengods/helarctos"},
      {title: "Silver brooch quest", url: "../cities/Fallengods/plains#silverbrooch"},
      {title: "Access to Plains of Gold", url: "../cities/Fallengods/plains#accessplains"},
      {title: "Butterfly conservation kit 2 quest", url: "../cities/Fallengods/plains#butterfly2"},
      {title: "Botanist's container 2 quest", url: "../cities/Fallengods/plains#botanist2"},
      {title: "Ice stalagmite quest", url: "../cities/Fallengods/plains#icestala"},
      {title: "Tail of darkness quest", url: "../cities/Fallengods/plains#tailofdark"},
      {title: "Stone herb quest", url: "../cities/Fallengods/plains#tailofdark"},
      {title: "Golden raptor's amulet quest", url: "../cities/Fallengods/plains#graptoramulet"},
      {title: "Cyclip shield quest", url: "../cities/Fallengods/plains#roseshield"},
      {title: "", url: "../cities/Fallengods/plains#"},
      
     
      // Access
      {title: "Access to Kingdom farmlands", url: "../cities/access/abysskfaccess"},
      {title: "Access to Yalahar abysses", url: "../cities/access/abysskfaccess"},
      {title: "Access to Dunes of Desert", url: "../cities/access/dunesaccess"},
      {title: "Access to spaceship", url: "../cities/access/spaceshipaccess"},
      {title: "Access to farmpits", url: "../cities/access/farmpitsaccess"},
      {title: "Access to Realms", url: "../cities/access/realmaccess"},
     
      // Yalahar abysses
      {title: "Yalahar abysses of achernar part 1", url: "../cities/abyss/abyss1"},
      {title: "Yalahar abysses of achernar part 2", url: "../cities/abyss/abyss2"},
      {title: "Yalahar abysses of achernar part 3", url: "../cities/abyss/abyss3"},
      {title: "Spacewalk", url: "../cities/abyss/spacewalk"},
      {title: "Achernar's prison", url: "../cities/abyss/prison"},
     
      // Kingdom farmlands
      { title: "Kingdom farmlands 1", url: "../cities/kf/kingdom1" },
      { title: "Kingdom farmlands 2", url: "../cities/kf/kingdom2" },
      {title: "Kingdom farmlands part 3", url: "../cities/kf/kingdom3"},
      
      // Bossrun
      {title: "Spaceship key", url: "../cities/Bossrun/spaceshipkey"},
      {title: "Beluna", url: "../cities/Bossrun/beluna"},
      {title: "Desert of zenith", url: "../cities/Bossrun/desert"},
      {title: "Yalahar", url: "../cities/Bossrun/yalahar"},
      {title: "Yalahar cirlces", url: "../cities/Bossrun/yalahar"},
      
      // {title: "Yalahar spaceship", url: "../cities/spaceship"},
      //Set upgrades
      {title: "Dark warrior set", url: "../cities/setupgrades/darkwarrior"},
      {title: "Zenith set to draconian set", url: "../cities/setupgrades/zenith"},
      {title: "Draconia set to Fallen gods set", url: "../cities/setupgrades/draconian"},
      {title: "Fallen gods set to Helarctos set", url: "../cities/setupgrades/fallen"},
      {title: "Helarctos set to Dark overlord set", url: "../cities/setupgrades/hela"},
      {title: "Dark overlord set to Cyclip set", url: "../cities/setupgrades/overlord"},
      {title: "Underworld axxion", url: "../cities/setupgrades/overlord"},
      {title: "Cyclip set to Craak slayer set", url: "../cities/setupgrades/cyclip"},
      
      //Others
      {title: "Full hota quest", url: "../cities/other/fullhota"},
      {title: "Oceanic lizard weapon to skyrider weapon", url: "../cities/other/skywep"},
      {title: "Cyclip shield quest", url: "../cities/other/cycshield"},
      {title: "Oceanic lizard shield quest", url: "../cities/other/ocshield"},
      {title: "Skyrider shield quest", url: "../cities/other/skyshield"},
      {title: "Hitchhiker scopes", url: "../cities/other/scopes"}
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

     document.querySelectorAll(".box img").forEach(image => {
    image.onclick = () => {
        const popup = document.querySelector('.popup-image');
        const popupImg = popup.querySelector('img');

        popup.style.display = 'block';
        popupImg.src = image.getAttribute('src');
    }
});

// Hide popup when clicking outside the image or on the image
document.querySelector('.popup-image').onclick = () => {
    document.querySelector('.popup-image').style.display = "none";
};